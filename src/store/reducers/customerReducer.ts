import { CustomerState, CustomerAction, EDIT_CUSTOMER, LOGIN_CUSTOMER, DELETE_CUSTOMER, LOGOUT_CUSTOMER } from "../types";
import { isJwtExpired } from "../../utils"



const initialState: CustomerState = {
    customer: {
        dni: "",
        email: "",
        lastname: "",
        name: "",
        id: 0
    }, token: localStorage.getItem("customer-token") || "",
}


const customerReducer = (state: CustomerState = initialState, action: CustomerAction): CustomerState => {

    switch (action.type) {
        case LOGIN_CUSTOMER:
            localStorage.setItem("customer-token", action.logedCustomer.token);
            localStorage.setItem("customer-refresh-token", action.logedCustomer.refreshToken);

            state.token = action.logedCustomer.token;
            state.customer = action.logedCustomer.customer;

            return state;
        case EDIT_CUSTOMER:
            state.customer = action.toEditCustomer
            return state;
        case DELETE_CUSTOMER:
            localStorage.removeItem("customer-token");
            localStorage.removeItem("customer-refresh-token");
            state.token = "";
            state.customer = {
                dni: "",
                email: "",
                lastname: "",
                name: "",
                id: NaN
            }
            return state;
        case LOGOUT_CUSTOMER:
            localStorage.removeItem("customer-token");
            localStorage.removeItem("customer-refresh-token");
            state.token = "";
            state.customer = {
                dni: "",
                email: "",
                lastname: "",
                name: "",
                id: NaN
            }
            return state;
        default: return state;
    }

}




export const isLogged = (token: string): boolean => {
    return !isJwtExpired(token)
}



export default customerReducer;