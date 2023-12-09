// src/redux/reducers.js
const initialState = {

};

const GetSettings = (state = initialState, action) => {
    switch (action.type) {
        case 'GETSETTINGS':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default GetSettings;
