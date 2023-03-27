function asyncErrorBoundary(delegate, defaultStatus) {
    return (request, response, next) => {
        (async () => {
            try {
                await delegate(request, response, next);
            } catch (error) {
                const { status = defaultStatus, message = error } = error;
                next({
                    status,
                    message,
                });
            }
        })();
    };
}

// The function returns an anonymous arrow function with the following three parameters: request, response, and next.

// The returned arrow function immediately invokes another anonymous function (IIFE) that starts with the try block.

// Within the try block, the delegate function is awaited and passed the request, response, and next parameters. This delegate function performs the main logic of the middleware.

// If there is an error during the execution of the delegate function, the catch block will be executed.

// In the catch block, the error object is destructured to extract its status and message properties. If the error object does not have a status property, the defaultStatus argument is used instead. If the error object does not have a message property, the error object itself is used.

// The extracted status and message are passed as an object with those properties to the next middleware.

// This allows the error to be handled by the next middleware in the chain, allowing for error handling to be centralized and separated from the main logic.



function asyncErrorBoundary(delegate, defaultStatus) { //delegate is our controller function
    return (request, response, next) => {
        Promise.resolve()
            .then(() => delegate(request, response, next))
            .catch((error = {}) => {
                const { status = defaultStatus, message = error } = error;
                next({
                    status,
                    message,
                });
            });
    };
}

module.exports = asyncErrorBoundary;


