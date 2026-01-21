const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;
    
    const token = authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Authentification requise" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(403).json({ message: "Token invalide ou expiré." });
    }
};

module.exports = authMiddleware;