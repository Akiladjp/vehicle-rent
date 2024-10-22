import userModels from "../models/userModels.js";


export const createUser = async(req, res) => {
    try {
        const newUser = new userModels(req.body);
        const { email } = newUser;

        const userExist = await userModels.findOne({ email });

        if(userExist) {
            return res.status(500).json("Your email is already registered");
        }
        const saveData = await newUser.save();
        res.status(200).json(saveData);

    } catch (error) {
        res.status(400).json({Message : "Error in create user section"})
    }
}

