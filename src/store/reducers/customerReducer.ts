
import { Reducer } from "redux"

import { CustomerState, CustomerAction, REGISTER_CUSTOMER, EDIT_CUSTOMER } from "../types";
const initialState: CustomerState = {
    customer: {
        token: "",
        dni: "",
        email: "",
        lastname: "",
        name: "",
        id: NaN
    }
}


const customerReducer = (state = initialState, action: CustomerAction): CustomerState => {

    switch (action.type) {

        default: return state;
    }
}


export default customerReducer;