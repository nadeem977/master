const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.TOKEN_ID, (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};
const TokenAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && (req.user.id === req.body.id || req.user.isAdmin)) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};
const TokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};
module.exports = { TokenAndAdmin, TokenAuthorization };
