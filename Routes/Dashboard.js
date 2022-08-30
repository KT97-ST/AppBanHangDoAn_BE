module.exports = function(app){
    app.get("/", function(req, res){
        res.render("admin_master", {content: "./dashboard/dashboard.ejs"});
    });
}