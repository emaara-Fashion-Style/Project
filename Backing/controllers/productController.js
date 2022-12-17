const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




//==========================Createproduct start============================>


const Createproducts = async (req, res) => {
  try {
    const { Name, Price, Disc, Dis, Img, Qtity } = req.body;


    if (!Name || !Price || !Disc || !Dis || !Img || !Qtity) {
      res.json({
        status: "Something is worng",
        message: "please Checking Data"
      });
      return;

    }

    const Newuser = await prisma.Products.create({
      data: {
        Pro_name: Name,
        Pro_price: Price,
        Pro_desc: Disc,
        Pro_dic: Dis,
        Pro_iamse: Img,
        Pro_qtity: Qtity
      },
    });
    res.json({
      status: "Success",
      message: "Sucessfully save",
      Newuser
    })

  } catch (error) {
    error
    res.json({
      status: "Error",
      message: "something is wrong"
    })
  }


};




const GetProduct = async (req, res) => {
  try {
    const product = await prisma.Products.findMany();
    res.json({
      product
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Data is not Found"
    });
  }
};




//================================================>>Update

const Updateproduct = async (req, res, next) => {
  try {
    const { Name, Price, Disc, Img, Dis, Qtity } = req.body;
    const { pro_id } = req.params
    if (!Name || !Price || !Disc || !Img || !Dis || !Qtity) {
      res.json({
        status: "Erorr",
        message: "please checking Data "
      })
      return;
    }
    const FindProduct = await prisma.Products.findFirst({
      where: {
        pro_id: + pro_id,
      }
    });
    if (!FindProduct) {
      res.json({
        status: "Erorr",
        message: "User Is not Found In Database"
      })
      return
    }
    const Updatecate = await prisma.Products.update({
      where: {
        pro_id: parseInt(pro_id)
      },
      data: {
        Pro_name: Name,
        Pro_price: Price,
        Pro_desc: Disc,
        Pro_iamse: Img,
        Pro_dic: Dis,
        Pro_qtity: Qtity
      },
    });
    res.status(200).json({
      status: "Sucess",
      message: "Update Sucessfully",
      Updatecate
    })
  } catch (error) {
    res.json({
      error
    });
  }
};


//======================================================>>Getoneproduct

const getonepro = async (req, res) => {
  try {
    const { pro_id } = req.params;
    const product = await prisma.products.findFirst({
      where: {
        pro_id: +pro_id,
      },
    });
    if (!product) {
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



//===================================================>>deleteproduct
const Deleteproduct = async (req, res,) => {
  const { pro_id } = req.params;

  const PRODUCTS = await prisma.products.delete({
    where: {
      pro_id: parseInt(pro_id)
    },
  });
  res.json({
    status: "Success",
    message: "Users Delete SuccessFull!",
    PRODUCTS
  })
}














//=========================================================Exports=======================================================================>

module.exports = {
  Createproducts,
  Updateproduct,
  GetProduct,
  getonepro,
  Deleteproduct
}