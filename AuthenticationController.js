 const User = require('./../Backend Bootcamp/userModel');
 const catchAsync = require('./../utils/catchAsync')
 exports.signup= catchAsync( async (req, res, next) => {
    const newUser = await User.create(req.body)

    res.statuse(201).json({
        status: 'Success',
        data : {
            user : newUser
        }
    });
});
