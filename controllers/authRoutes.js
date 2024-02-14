import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const userLogin = async (req,res) => {
    console.log(req.body)
    const {email,password} = req.body;
    const user = await User.findOne({email: email});

    if(!user){
        console.log("User not found")
        return res.status(400).send('User does not exists.');
    }

    console.log("User found",user)
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)

    if(!passwordMatch){
        console.log(" does not match", passwordMatch)
        return res.status(400).send('Password does not match.');
    }
    console.log("Password matched")
    const token = jwt.sign({email, firstname:user.firstname, lastname: user.lastname}, process.env.SECRET_KEY)
    return res.status(200).json({token})
}

export const userRegister = async (req,res) => {
    
    try {
    
        // Check if user already exists
        const userExist = await User.find({email: req.body.email})
        // if (userExist) {
        //     console.log("I am checking user existence")
        //   return res.status(400).send('User already exists.');
        // }
        
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);


        let newUser = new User({
            firstname : req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
            mobile : req.body.mobile
        })
        newUser.save()
        //users.push(user);
    
        return res.status(201).send('User registered successfully.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error.');
      }
}

export const tokenVerify = async (req,res) => {
    const {token} = req.body;
    //console.log("Req Body ",token)
    try{
        const decoded = jwt.verify(token , process.env.SECRET_KEY)
        console.log(decoded)
        return res.send(decoded)
    }
    catch(error){
        return res.send({msg:"Invalid token"})
    }

}