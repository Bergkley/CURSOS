import User from "../models/User";

class SessionController{
     async store(req, res){
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.status(201).json(user);
    }
}

export default new SessionController();