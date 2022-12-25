import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Registering a new User
export const registerUser = async (req, res) => {

  const salt = await bcrypt.genSalt(10);//taux de hachage
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);

  const { username } = req.body

  try {
    const oldUser = await UserModel.findOne({ username });
    //verifier si username (email) n'est pas deja pris
    if (oldUser) return res.status(400).json({ message: "<INFO> nom utilisateur existe" })
    
    const user = await newUser.save();
    const token = jwt.sign({
      username: user.username,
      id: user._id
    }, process.env.JWT_KEY, { expiresIn: '1h' })
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// login User

export const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await UserModel.findOne({ username: username })


    if (user) {
      const validity = await bcrypt.compare(password, user.password)


      if (!validity) {
        res.status(400).json("mot de passe incorrect")
      } else {
        const token = jwt.sign({
          username: user.username,
          id: user._id
        }, process.env.JWT_KEY, { expiresIn: '1h' })
        res.status(200).json({ user, token });
      }//end else validity
    }//end if user
    else {
      res.status(404).json("<404> Utilisateur inexistant")
    }//end else user
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


