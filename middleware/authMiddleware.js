const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try{
            token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        }
        catch(err){
            return res.status(401).json({
                error: "You are not authorized to access this resource"
            });
        }

    } 
    else {
        return res.status(401).json({ msg: "Not authorized" });
    }

} );