export function login(token) {
    localStorage.setItem("access_token", token);
    window.dispatchEvent(new Event("authChange"));
}

export function logout() {
    localStorage.removeItem("access_token");
    window.dispatchEvent(new Event("authChange"));
}