/**
 * List of routes that are public
 * Public routes are routes that do not require authentication
 * @type {string[]} - Array of strings
 */
export const publicRoutes: string[] = ["/"];

/**
 * List of routes that are for authentication
 * These routes will redirect to app dashboard if user is authenticated
 * @type {string[]} - Array of strings
 */

export const authRoutes: string[] = ["/login", "/register"];

/**
 * Routes that are for authentication api
 * @type {string} - String
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * Default redirect url after login
 * @type {string} - String
 */
export const DEFAULT_LOGIN_REDIRECT_URL = "/app";
