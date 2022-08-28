const Order = require("../Models/Order");

module.exports = function(app){
    app.get("/order", function(req, res){
        res.render("admin_master", {content: "./order/order.ejs"});
    });

    app.post("/order/AddNew", function(req, res){
        var newOrder = Order({
            Code: req.body.Code,
            CustomerID: req.body.CustomerID,
            Orderdate: Date.now()
        });
        newOrder.save(function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/order", function(req, res){
        Order.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, orderList:data});
            }
        });
    });

    app.post("/order/update", function(req, res){
        Order.findByIdAndUpdate(req.body.idOrder, {
            Code: req.body.Code,
            CustomerID: req.body.CustomerID,
            Orderdate: Date.now()
        }, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });

    app.post("/order/delete", function(req, res){
        Order.findOneAndDelete({_id:req.body.idOrder}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });
}