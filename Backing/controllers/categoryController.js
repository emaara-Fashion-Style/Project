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
      images: images
    },
   });
   res.json({
    status:"Successfuly",
    message: "saved Category",
    NewCategory
   });

 } catch (error) {
      res.json({
        status:"Erorr"
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



















module.exports= {
 CreateCategory,
 GetallCategory
}