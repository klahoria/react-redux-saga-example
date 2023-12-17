// src/redux/reducers.js
const initialState = {

};

const Finance = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GETFINANCINGSTATUS':
            return { ...state, userFinanceStatus: action.payload };
        case 'PLANTYPE':
            return { ...state, financeProcess: action.payload }
        case 'REMOVE_FINANCE_DETAILS':
            if (state.financeProcess) {
                delete state.financeProcess;
            }
            return { ...state }
        default:
            return state;
    }
};

export default Finance;
