class HouseController {
    async store(req,res){
        console.log(req.file)
        return res.json({ok: true});
    }
}

export default new HouseController();