import { CustomerState, CustomerAction, EDIT_CUSTOMER } from "../types";

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


const customerReducer = (state: CustomerState = initialState, action: CustomerAction): CustomerState => {

    switch (action.type) {
        case EDIT_CUSTOMER:
            return state;
        default: return state;
    }
}


export default customerReducer;