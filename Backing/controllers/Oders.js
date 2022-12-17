const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const Createorders = async (req, res, next) => {
    try {
        const { D_price, It_price, tot_price } = req.body;
        if (!D_price || !It_price || !tot_price) {
            res.json({
                status: "Error",
                message: "Please Checking Information"
            });
            return;
        };
        const Neworder = await prisma.Order.create({
            data: {
                delivery_price: D_price,
                items_price: It_price,
                totalPrice: tot_price
            },
        });
        res.json({
            status: "create",
            message: "Successfuly saved Recode",
            Neworder
        })
    } catch (error) {
        res.json({
            status: "Error",
            message: "Something is wrong"
        })
    }
}


//============================================>>Geting Orders

const Getorders = async(req,res,next)=>{
    try {
        const Oders = await prisma.Order.findMany()
        res.json({
            Oders
        })
    } catch (error) {
        res.json({
            status:"Error",
            message:"Oder is not Found Database"
        })
    }
}







//======================================================>>update orde

const UpadteOrders = async (req, res, next) => {
    try {
        const { D_price, It_price, tot_price } = req.body;
        if (!D_price || !It_price || ! !tot_price) {
            res.json({
                status: "Error",
                message: "Fadlan Dhamaystir Xogta"
            });
            return;
        };
        const Findorde = await prisma.order.findFirst({
            where: {
                order_Id: + order_Id
            },
        });
        if (!Findorde) {
            res.json({
                status: "Error",
                message: "Orde is Not Found In Database"
            });
            return;
        }
        const Upadteorder = await prisma.order.update({
            date: {

                delivery_price: D_price,
                items_price: It_price,
                totalPrice: tot_price
            },
        });
        res.json({
            status:"Update",
            message:"successfuly update",
            Upadteorder
        })
    } catch (error) {
      res.json({
        status:"Error",
        message:"Somethign is worng"
      })
    }
}


module.exports = {
    Createorders,
    UpadteOrders,
    Getorders
}