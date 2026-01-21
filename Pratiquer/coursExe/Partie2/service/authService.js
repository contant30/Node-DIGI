const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (userData) => {

    const {email, password} = userData;
    const hashedPassword = await bcrypt.hash(password, 8);
    return await User.create({email, password: hashedPassword})
};

const login = async (email, password) => {
    const user = await User.findOne({where: {email}});
    if (!user) {
        throw new Error("Utilisateur non trouvé");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Mot de passe incorrect");
    }

    const token = jwt.sign(
        {userId: user.id, email: user.email},
        process.env.SECRET_KEY,
        {expiresIn: "1h"}
    );

    return {user, token};
};



module.exports = {
    register,
    login,
};