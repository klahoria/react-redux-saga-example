export const Finance = (action) => {
  return  { type: 'get_can_finance_status', payload: action.payload }
}

export const chooseFinanceType = (action) => {
  return  { type: 'choose_finance_type', payload: action.payload }
}

export const SaveServices = (action) => {
  return  { type: 'save_services', payload: action.payload }
}

export const saveDownPayment = (action) => {
  return  { type: 'save_down_payment', payload: action.payload }
}