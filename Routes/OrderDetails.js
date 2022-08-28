const OrderDetails = require("../Models/OrderDetails");

module.exports = function(app){
    app.get("/orderdetails", function(req, res){
        res.render("admin_master", {content: "./orderdetails/orderdetails.ejs"});
    });

    app.post("/orderdetails/AddNew", function(req, res){
        var newOrderDetails = OrderDetails({
            Code: req.body.Code,
            OrderID: req.body.OrderID,
            ProductID: req.body.ProductID,
            Quantity: req.body.Quantity,
            Orderdate: Date.now()
        });
        newOrderDetails.save(function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/orderdetails", function(req, res){
        OrderDetails.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, orderDetailsList:data});
            }
        });
    });

    app.post("/orderdetails/update", function(req, res){
        OrderDetails.findByIdAndUpdate(req.body.idOrderDetails, {
            Code: req.body.Code,
            OrderID: req.body.OrderID,
            ProductID: req.body.ProductID,
            Quantity: req.body.Quantity,
            Orderdate: Date.now()
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/orderDetails/delete", function(req, res){
        OrderDetails.findOneAndDelete({_id:req.body.idOrderDetails}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });
}