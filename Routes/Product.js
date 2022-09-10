const Product = require("../Models/Product");

module.exports = function(app){
    app.get("/product", function(req, res){
        res.render("admin_master", {content: "./product/product.ejs"});
    });

    app.post("/product/AddNew", function(req, res){
        var newProduct = Product({
            name: req.body.name,
            price: req.body.price,
            unit: req.body.unit,
            image: req.body.image,
        });
        newProduct.save(function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/product", function(req, res){
        Product.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, ProductList:data});
            }
        });
    });

    app.get("/productlist", function(req, res){
        Product.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json(data);
            }
        });
    });

    app.post("/product/update", function(req, res){
        Product.findByIdAndUpdate(req.body.idProduct, {
            name: req.body.name,
            price: req.body.price,
            unit: req.body.unit,
            image: req.body.image,
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/product/delete", function(req, res){
        Product.findOneAndDelete({_id:req.body.idProduct}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });
}