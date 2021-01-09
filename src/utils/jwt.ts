
import jwt_decode from "jwt-decode";

export const isJwtExpired = (token: string) => {
    if (!token) return true;
    let isJwtExpired = false;
    let decoded: any = jwt_decode(token);
    let exp = decoded.exp;
    const currentTime = new Date().getTime() / 1000;
    if (currentTime > exp) isJwtExpired = true;
    return isJwtExpired;
}

