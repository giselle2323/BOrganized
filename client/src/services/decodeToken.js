import jwt from "jsonwebtoken";
function isAuthenticated() {
    const token = localStorage.getItem('data');
    // const refreshToken = localStorage.getItem('refreshToken');
    try {
        const { exp } = jwt.decode(token);
        // const { exp } = decode(refreshToken);
        if (Date.now() >= exp * 1000) {
            return false;
        }
    } catch (err) {
        return false;
    }
    return true;
}
export default isAuthenticated;