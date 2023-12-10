import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import clsx from 'clsx'

export const Navbar = ({ login }) => {
    return (
        <div className='container__nav px-3 NavBar col-12 h-100'>
            <div className="pb-3 pt-4 px-3">
                <figure className='mb-0'>
                    <img src="https://testbusiness.denefits.com/assets/img/svg/denefits_logo_vector.svg" alt="" />
                </figure>
            </div>
            <NavLinks login={login?.menu} />
        </div>
    )
}

Navbar.propTypes = {
    //   second: PropTypes.third
    login: PropTypes.object
}

const mapStateToProps = (state) => ({
    login: state.Login
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


function NavLinks({ login }) {
    const [url, setURL] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(location)
    }, [])

    function showThisMenu(item) {
        return item.find(menu => (menu.path === location.pathname)) ? true : false
    }

    function checkThisLink(item) {
        return ((item.includes(location.pathname) || location.pathname.includes(item)) && location.pathname !== '') ? true : false
    }

    function handleNavigate(item) {

        item.submenu = !item.submenu ? [] : item.submenu.filter(item => (Number(item.only_path) === 0));

        if (Number(item.submenu.length) === 0) {
            navigate(item.link)
            setURL(prev => '');
            return
        }
        else {
            setURL(prev => item.link);
            // setURL(prev => item.link == prev ? '' : item.link);
        }
    }

    return (
        <div className="nav_menu" key={Math.random() * 8} >
            {login && login.map((item) => {
                // return JSON.stringify(item)
                return (Number(item.only_path) !== 1 &&
                    <ListGroup role='button' key={item.url} defaultActiveKey={location.pathname} className={clsx('rounded-2 nav_link_text', { 'active_link rounded-2': (item.link === location.pathname || (checkThisLink(item.link) && showThisMenu(item.submenu) && item.submenu)), "px-3 py-3 nav_link_text": !item.submenu })} onClick={() => handleNavigate(item)}>
                        <div to={item.link}
                            className={clsx("nav-link", { "px-3 py-3 nav_link_text rounded-1": item.submenu })} >
                            {/* <i className={item.icon ? ('fa fa-' + (item.icon.split('_').length > 0 ? item.icon.split('_')[item.icon.split('_').length - 1] : item.icon.split('_')[0])) : ''}></i> */}
                            {item.menu_name}
                        </div>
                        {item && item.submenu && <div className="ps-3 submenu">
                            {item && item.submenu && (item.link === url) && <NavLinks login={item.submenu} extraClass="d-none" />}
                        </div>}
                    </ListGroup>
                )
            })}
        </div >
    )
}
