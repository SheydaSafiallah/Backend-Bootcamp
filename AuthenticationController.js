 const User = require('userModel');

 exports.signup= async (req, res, next) => {
    const newUser = await User.create(req.body)

    res.statuse(201).json({
        status: 'Success',
        data : {
            user : newUser
        }
    });
};
