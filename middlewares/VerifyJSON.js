
const verifyJSON= (req, res, buf, encoding) => {
    try {
        JSON.parse(buf.toString(encoding));
    } catch (err) {
        // throw an error that can be caught by the error-handling middleware
        err.status = 400;
        err.message = 'Invalid JSON format';
        throw err;
    }
};


module.exports= verifyJSON;