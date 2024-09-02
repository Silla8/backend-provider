
const errorHandler = (err, req, res, next) => {
    if (err.status === 400 && err.message === 'Invalid JSON format') {
        return res.status(400).json('Invalid JSON format');
    }
    // Handle other errors
    next(err);
};

module.exports = errorHandler;