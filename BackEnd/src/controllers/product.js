const {Router} = require('express');
const {poductupload} = require('');
const productrouter= Router();

productrouter.get("/",(req ,res)=>{
    res.send("Product router");
})

productrouter.post("/upload",poductupload.single('product_image'), async (req, res) => {
    const{name, description,catagory,tags,price,stock,email}=req.body;
    try {
        const seller = await productModel,findOne({email: email});
        if (!seller) {
            return res.status(404).json({message: 'Seller not found'});
        }
        
        if(Image,length == 0) {
            return res.status(400).json({message: 'Image is required'});
        }
        const newproduct = await productModel.create({
            name: name,
            description: description,
            catagory: catagory,
            tags: tags,
            price: price,
            stock: stock,
            image: image,
        })
        res.status(201).json({message: 'Product created successfully',product : newproduct});
        }
        catch(error){
            console.log(error);
        }
    })