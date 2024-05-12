/**
 * Retrieves the login status from local storage.
 * @type {string}
 */
let isLogin = localStorage.getItem('token');

/**
 * An array of paths that are accessible when the user is logged in.
 * @type {string[]}
 */
let onLoginAccess = ['/index.html','/'];
/**
 * An array of paths that are accessible when the user is logged out.
 * @type {string[]}
 */
let onLogoutAccess = ['/login.html', '/register.html'];

/**
 * Checks if the user is logged in.
 * user only has access to the paths in the onLoginAccess array.
 * If the user is not logged in, they will be redirected to the login page.
 * if user hit route not available redirect to login page
 */
if (isLogin) {
    if (onLoginAccess.indexOf(window.location.pathname) === -1) {
        window.location.href = '/index.html';
    }
} else {
    if (onLogoutAccess.indexOf(window.location.pathname) === -1) {
        window.location.href = '/login.html';
    }
}
