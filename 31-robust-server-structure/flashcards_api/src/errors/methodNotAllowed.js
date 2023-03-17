// A piece of middleware that goes straight into error handling w/ a 405 status code
const methodNotAllowed = (req, res, next) => {
  next({
    status: 405,
    message: `The ${req.method} method is not allowed for the URL ${req.originalUrl}`
  });
}

module.exports = methodNotAllowed;