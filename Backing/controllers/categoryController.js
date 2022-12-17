const {PrismaClient} =require("@prisma/client")
const prisma =new PrismaClient();


//==========================>>Create Category ======>>

const CreateCategory = async(req,res,next)=>{
 try {
    const {type , images}= req.body;

    if(!type  ||! images){
      res.json({
        status:"Erorr",
        message:"Please provider Data"
      })
      return;
    }
   const NewCategory = await prisma.Category.create ({
    data:{
      type :type,
      img: images
    },
   });
   res.json({
    status:"Successfuly",
    message:"saved Category",
    NewCategory
   });

 } catch (error) {
      res.json({
        status:error
      })
 }
};






//=========================================>>  Geting Category 

const GetallCategory = async (req,res) => {
  try {
    const Category = await prisma.Category.findMany();
    res.json({
    Category
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Data is not Found"
    });
  }
};




//================================================>>Update

const Updatecategory = async (req, res, next) => {
  try {
    const { type, images } = req.body;
    const { Cat_ID } = req.params
    if (!type || !images) {
      res.json({
        status: "Erorr",
        message: "please checking Data "
      })
      return;
    }
    const FINDCategory = await prisma.Category.findFirst({
      where: {
        Cat_ID: + Cat_ID,
      }
    });
    if (!FINDCategory) {
      res.json({
        status: "Erorr",
        message: "User Is not Found In Database"
      })
      return
    }
    const Updatecate = await prisma.Category.update({
      where: {
        Cat_ID: parseInt(Cat_ID)
      },
      data: {
          type:type,
          img:images
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




// =================================>>Delete Category

const DeleteCategory = async (req, res,) => {
  const { Cat_ID } = req.params;

  const Cat = await prisma.Category.delete({
    where: {
      Cat_ID: parseInt(Cat_ID)
    },
  });
  res.json({
    status: "Success",
    message: "Users Delete SuccessFull!",
    Cat
  })
}








module.exports= {
 CreateCategory,
 GetallCategory,
 Updatecategory,
 DeleteCategory
}