const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

<<<<<<< HEAD



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
=======
// GET ALL products


const CreateProduct = async (req, res) => {
  try {
      const { Name, Price, Desc, img } = req.body;


      if (!Name || !Price || !Desc || !img ) {
          res.json({
              status: "Something is worng",
              message: "please Checking Data"
          });
          return;

      }
    
      const NewProduct = await prisma.Product.create({
          data: {
            name:Name,
            price:Price,
            description:Desc,
            image:img
          },
      });
      res.json({
          status: "Success",
          message: "Sucessfully save",
          NewProduct
      })
   
  } catch (error) {
    console.log(error)
      res.json({
          status:"Erorr",
          message:"Wax ayaa Jira"
      })
  }


};










// UPDATE product


const updateProduct = async (req, res) => {
  try {
    const {  name, description, image, price} = req.body;

    const { pro_id } = req.params;

    if (!name || !description || !image || !price) {
      res.json({
        status: 'Error',
        message: 'Please provide data',
      });

      return;
    }

    // Find the product/item
    const findProduct = await prisma.Product.findFirst({
      where: {
        pro_id: parseInt(pro_id),
      },
    });

    if (!findProduct) {
      res.json({
        status: 'Error',
        message: 'Product is not in the db',
      });

      return;
    }

    const updateProduct = await prisma.Product.update({
      where: {
        pro_id: parseInt(pro_id),
      },
      data: {
        name,
        description,
        image,
        price,
      },
    });

    res.status(200).json({
      status: 'success',
      message: 'Item updated successfully',
      updateProduct,
    });
  } catch (error) {
    res.json({
      error,
>>>>>>> 4b78a59c3bf0974445ddc8f108620f1344bb9ee0
    });
  }
};

<<<<<<< HEAD

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
=======
// GET ONE Produvt or Item


const getOneProduct = async (req, res) => {
  try {
    const { pro_id } = req.params;

    const Product = await prisma.Product.findFirst({
      where: {
        pro_id: +pro_id,
      },
      include: {
        Customer: true,
      },
    });

    if (!Product) {
      res.json({
        status: 'Error',
        message: 'The Item you are looking for is not in the database',
      });
    } else {
      res.json({
        status: 'success',
        Product,
      });
    }
  } catch (error) {
    res.json({
      error,
    });
  }
};

// DELETE PRODUCT OR ITEM
>>>>>>> 4b78a59c3bf0974445ddc8f108620f1344bb9ee0


const deleteProduct = async (req, res) => {
  const { pro_id } = req.params;

  const Product = await prisma.Product.delete({
    where: {
      pro_id: parseInt(pro_id),
    },
  });

<<<<<<< HEAD










//=========================================================Exports=======================================================================>

module.exports = {
  Createproducts,
  Updateproduct,
  GetProduct,
  getonepro,
  Deleteproduct
}
=======
  res.json({
    status: 'success',
    message: 'Item  deleted successfully!',
    // pateintId,
    Product,
  });
};

// DELETE ALL Items

const deleteAllItems = async (req, res) => {
  try {
    const deletedItems = await prisma.Product.deleteMany();

    res.json({
      status: 'Success',
      message: 'All Item were deleted',
      deletedItems,
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  // getAllProducts,
  CreateProduct,
  updateProduct,
  getOneProduct,
  deleteProduct,
  deleteAllItems,
};
>>>>>>> 4b78a59c3bf0974445ddc8f108620f1344bb9ee0
