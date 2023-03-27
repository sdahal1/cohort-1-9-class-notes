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

// function asyncErrorBoundary(delegate, defaultStatus) {
//     return (req, res, next) => {
//         (async () => {
//             try {
//                 await delegate(req, res, next);
//             } catch (error) {
//                 const { status = defaultStatus, message = error } = error;
//                     next({
//                         status,
//                         message,
//                     });
//             }
//         })();
//     }
// }



module.exports = asyncErrorBoundary;


