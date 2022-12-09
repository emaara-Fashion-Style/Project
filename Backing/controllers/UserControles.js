const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

//Token Generator
const generatetToken = (user) => {
    return Jwt.sign({ user }, process.env.JWT_SEC, {
        expiresIn: "4day"
    })
}

//=========================================================Registertion start=================================================


const Registertion = async (req, res) => {
    const {fname, lname, email, password, phone, address } = req.body;

    //==============================ChekUsers start==================================================>

    if (!fname || !lname || !email || !password || !phone || !address) {
        res.json({
            status: "Something is worng",
            message: "please Checking Data"
        });
        return;
    }
    const Newuser = await prisma.users.create({
        data: {
            firstname: fname,
            lastname: lname,
            U_email: email,
            U_password: password,
            U_phone: phone,
            U_Address: address
        },
    });
   res.json({
    status:"Success",
    message:"Sucessfully save",
    Newuser
   })
    // const token = generatetToken(Newuser.userID)
    // res.json({
    //     user: { ...Newuser },
    //     token,
    //     status: "Success",
    // });

};









//=========================================================Loging=========================================================================>


const Login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({
            status: "Error",
            message: "email or password nor mistake"
        })
        return;
    }

    const UserExisting = await prisma.users.findFirst({
        where: {
            U_email: email
        },
    });

    if (!UserExisting) {
        res.json({
            status: "Error",
            message: "credentails"
        });
        return;
    }

    const dehshepassword = bcrypt.compareSync(password, UserExisting.U_password);
    if (dehshepassword) {
        const token = generatetToken(UserExisting.userID);
        res.json({
            status: "SuccessFully",
            message: "You  Are Login",
            token,
            user: UserExisting,
        });
    } else {
        res.json({
            status: "Error",
            message: "Something is wrong"
        })
    }
}









//========================================================update ==========================================================================>
const Updateusers = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, phone, Address } = req.body;
        const { Userid } = req.params;

        if (firstname, lastname, email, password, phone, Address) {
            res.json({
                status: "Errorr",
                message: "Fadlan iska sax",
            })
            return;
        }
        const findUsers = await prisma.users.findFirst({
            where: {
                userID: parseInt(Userid)
            },
        });
        if (!findUsers) {
            res.json({
                status: "Erorr",
                message: "User Is Not Found Database"
            });
            return;
        }

        const updateUsers = await prisma.users.update({
            where: {
                userID: parseInt(Userid),
            },
            data: {
                firstname: firstname,
                lastname: lastname,
                U_email: email,
                U_password: password,
                U_phone: phone,
                U_Address: Address
            },
        });
        res.status({
            status: "Success",
            message: "User Update Successfully",
            updateUsers
        })
    } catch (error) {
        res.json({
            Error
        })
    }
}











//=========================================================Get one user =================================================================>

const GetOneuser = async (req, res) => {
    try {
        const { userID } = req.params;
        const user = await prisma.users.findFirst({
            where: {
                userID: +userID,
            },
        });
        if (!user) {
            res.json({
                status: "Erorr",
                message: "user is not fount in Database Now"
            });
        } else {
            res.json({
                status: "Success",
                user
            })
        }
    } catch (error) {
        res.json({
            Error
        });
    };
}








//=========================================================Delete Users===================================================================>
const DeleteUser = async (req, res,) => {
    const { UserID } = req.params;

    const USRER = await prisma.users.delete({
        where: {
            UserID: parseInt(UserID)
        },
    });
    res.json({
        status: "Success",
        message: "Users Delete SuccessFull!",
        USRER
    })
}







//=========================================================Geting Data====================================================================>
const Getallusers = async (req, res) => {
    try {
        const USERS = await prisma.users.findMany();
        res.json({
            USERS
        });
    } catch (error) {
        res.json({
            status: "Error",
            message: "Data is not Found"
        });
    }
};







//=========================================================Exports=======================================================================>

module.exports = {
    Registertion,
    Login,
    Updateusers,
    Getallusers,
    GetOneuser,
    DeleteUser
}