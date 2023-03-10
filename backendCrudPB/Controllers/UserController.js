import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";


//get user
export const getUser = async (req,res)=>{
    const id = req.params.id;

    //verifier l'existance user
    try {
        const user = await UserModel.findById(id)

        if(user){

            const {password, ...otherDetails} = user._doc;
            res.status(200).json(otherDetails)
        }else{
            res.status(404).json("<404> utilisateurs inexistant")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}
//get all users 
export const getAllUsers = async(req,res)=>{
  try {
      const users = await UserModel.find()
      res.status(200).json(users)
  } catch (error) {
      res.status(500).json(error)
      
  }

}


// update a user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;
  
    if (id === currentUserId || currentUserAdminStatus) {
      try {
        if (password) {
          const  salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(password, salt);
        }
  
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
  
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("<INFO> Access Denied! ");
    }
  };
  
  // Delete user
  export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId, currentUserAdminStatus } = req.body;
  
    if (currentUserId === id || currentUserAdminStatus) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("<INFO> User deleted successfully");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("<INFO> Access Denied! ");
    }
  };




  //get all user