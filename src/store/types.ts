export const GET_EVENTS = "GET_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";


export const LOGIN_CUSTOMER = "LOGIN_CUSTOMER";
export const REFRESH_CUSTOMER = "REFRESH_CUSTOMER"; // TODO


export const GET_CUSTOMER = "GET_CUSTOMER"; // TODO
export const REGISTER_CUSTOMER = "REGISTER_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER"; // TODO


export const CREATE_RESERVATION = "CREATE_RESERVATION";
export const DELETE_RESERVATION = "DELETE_RESERVATION";
export const GET_RESERVATIONS = "GET_RESERVATIONS";


export const SET_ALERT = "SET_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";





// Clientes

export type tologinCustomer = {
    email: string;
    password: string;
}


export type customer = {
    id?: number;
    name: string;
    lastname: string;
    dni: string;
    email: string;
}

export type authCustomer =
    customer & {
        token: string;
    }

export type toRegisterCustomer =
    customer & {
        password: string;
    }


interface RegisterCustomerAction {
    type: typeof REGISTER_CUSTOMER;
    toRegisterCustomer: toRegisterCustomer;
}

interface LoginCustomerAction {
    type: typeof LOGIN_CUSTOMER;
    tologinCustomer: tologinCustomer;
}

interface EditCustomerAction {
    type: typeof EDIT_CUSTOMER;
    toUEditCustomer: toRegisterCustomer;
}

export type CustomerAction = RegisterCustomerAction | LoginCustomerAction | EditCustomerAction;

export interface CustomerState {
    customer: authCustomer;
}

// Eventos

export enum Eventtype {
    FUTBOL = 1,
    BALONCESTO = 2,
    VOLEIBOL = 3,
    ATLETISMO = 4
}

export type event = {
    id?: number;
    name: string;
    limit: number;
    start: Date;
    Finish: Date;
    eventType: Eventtype;
    freeSpaces?: number;
}

export interface EventState {
    events: event[];
}

interface CreateEventAction {
    type: typeof CREATE_EVENT;
    event: event;
}
interface DeleteEventAction {
    type: typeof DELETE_EVENT;
}
interface EditEventAction {
    type: typeof EDIT_EVENT;
    event: event;
}
interface GetEventsAction {
    type: typeof GET_EVENTS;
    events: event[];
}

export type EventAction = CreateEventAction | DeleteEventAction | GetEventsAction | EditEventAction;

// Reservaciones

export type reservation = {
    id: number;
    quantity: number;
    boughtTime: Date;
    customerId: number;
    eventid: number;
    reservationEvent?: event;
    reservationCustomer?: customer
}


export interface ReservationState {
    reservations: reservation[];
}

interface GetReservationsAction {
    type: typeof GET_RESERVATIONS;
    reservations: reservation[];
}
interface DeleteReservationAction {
    type: typeof DELETE_RESERVATION;
}
interface CreateReservationAction {
    type: typeof CREATE_RESERVATION;
    reservation: reservation;
}


export type ReservationAction = GetReservationsAction | DeleteReservationAction | CreateReservationAction;



// Alertas
export interface AlertState {
    message: string;
    color: string;
    visible: boolean;
}

interface CloseAlertAction {
    type: typeof CLOSE_ALERT;
}

interface SetAlertAction {
    type: typeof SET_ALERT;
    payload: string;
    color: string;
}

export type AlertAction = SetAlertAction | CloseAlertAction;