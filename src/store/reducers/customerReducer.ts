import { CustomerState, CustomerAction, EDIT_CUSTOMER, LOGIN_CUSTOMER, DELETE_CUSTOMER } from "../types";

const initialState: CustomerState = {
    customer: {
        dni: "",
        email: "",
        lastname: "",
        name: "",
        id: NaN
    }, token: ""

}


const customerReducer = (state: CustomerState = initialState, action: CustomerAction): CustomerState => {

    switch (action.type) {
        case EDIT_CUSTOMER:
            return state;
        case LOGIN_CUSTOMER:
            console.log(action.logedCustomer);
            localStorage.setItem("customer-token", action.logedCustomer.token);
            localStorage.setItem("customer-refresh-token", action.logedCustomer.refreshToken);
            state.token = action.logedCustomer.token;
            state.customer = action.logedCustomer.customer;

            console.log(state);

            return state;
        case DELETE_CUSTOMER:
            return state;
        default: return state;
    }

}


export default customerReducer;