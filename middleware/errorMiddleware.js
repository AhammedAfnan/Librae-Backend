module.exports = function errorHandler(err, req, res, next) {
    if(err){
        console.error(err);  // Logs the error stack trace to the console
        res.status(500).json({ message: err.message || 'Internal server error' });  // Sends a response with the error message
    }
};