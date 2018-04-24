function log (req, res, next, msg) {
    console.log(msg);
    next();
};
module.exports.log = log;