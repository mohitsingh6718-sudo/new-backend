class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };

// 200 OK
// 201 Created
// 400 Bad Request
// 401 Unauthorized
// 403 Forbidden
// 404 Not Found
// 500 Internal Server Error

// errors = [
//    "Email invalid",
//    "Password short",
//    "Username already exists"
// ]

//stack
// Error kaha hua
// kis file me hua
// kis line pe hua
// kis function ke andar hua

// captureStackTrace kya karta hai
// Ye JavaScript se bolta hai:
// "Is error ki history bhi save kar do."
// Fir jab error print karoge, to sirf message nahi, poora rasta bhi dikhega.

// function A() {
//     console.log("A");
//     B();
// }
// function B() {
//     console.log("B");
//     C();
// }
// function C() {
//     console.log("C");
// }
// A();

// function login() {
//     register();
// }
// function register() {
//     saveUser();
// }
// function saveUser() {
//     throw new Error("Database Error");
// }
// login();
