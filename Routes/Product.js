const Product = require("../Models/Product");

module.exports = function(app){
    app.get("/product", function(req, res){
        res.render("admin_master", {content: "./product/product.ejs"});
    });

    app.post("/product/AddNew", function(req, res){
        var newProduct = Product({
            Name: req.body.Name,
            Code: req.body.Code,
            Image: req.body.Image,
            ExportPrice: req.body.ExportPrice,
            ImportPrice: req.body.ImportPrice,
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

    app.post("/product1", function(req, res){
        Product.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, ProductList:data});
            }
        });
    });

    app.post("/product/update", function(req, res){
        Product.findByIdAndUpdate(req.body.idProduct, {
            Name: req.body.Name,
            Code: req.body.Code,
            Image: req.body.Image,
            ExportPrice: req.body.ExportPrice,
            ImportPrice: req.body.ImportPrice,
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