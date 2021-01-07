const addFirtZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString()
}

export const dateFormater = (theDate: Date): string => {
    let mes = theDate.getMonth() + 1;
    let dia = theDate.getDate();
    let hora = `${theDate.getUTCHours()}:${addFirtZero(theDate.getMinutes())} h`
    return `${addFirtZero(dia)}/${addFirtZero(mes)}/${theDate.getFullYear()} - ${hora}`;
}
