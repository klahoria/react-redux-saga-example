// src/redux/reducers.js
const initialState = {

};

const Finance = (state = initialState, action) => {
    console.log(action.type,"Finance")
    switch (action.type) {
        case 'GETFINANCINGSTATUS':
            return action.payload;
        default:
            return state;
    }
};

export default Finance;
