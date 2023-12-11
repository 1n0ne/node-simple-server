const getAllProducts = async (req, res ) => {
    try {
        const products = [
            {title: 'prod1', price : 500}
        ];
        return res.send(products);
    }catch(error){
        return res.status(error).send({message:"errrorrrrr"})
    }
}