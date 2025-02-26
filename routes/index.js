var express = require('express');
var router = express.Router(); 
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res) { 
  fs.readdir("./uploads",{withFileTypes:true} , function(err,val){
  res.render('index',{val});
})
});


router.get('/back', function(req, res) {
  res.redirect("back")
});

router.get('/opened/:filename', function(req, res) {
  fs.readdir(`./uploads`, {withFileTypes: true}, function(err, val){
    fs.readFile(`./uploads/${req.params.filename}`, "utf8", function(err, filedata){
      res.render("opened", {val, filename: req.params.filename, filedata});
    })
  })
});

router.post('/update/:filename', function(req, res) {
  fs.writeFile(`./uploads/${req.params.filename}`, req.body.data, function(err){
    res.redirect("back");
  })
});


router.get("/createfile", function(req,res){
  fs.writeFile(`./uploads/${req.query.filename}`, "", function(err){
    if(err) console.log(err)
    else res.redirect("back");
  })
})

router.get("/createfolder", function(req,res){
  fs.mkdir(`./uploads/${req.query.foldername}`, function(err){
    if(err) console.log(err)
    else res.redirect("back");
  })
})


router.get("/delete/:type/:filename", function(req, res){
  if(req.params.type === "folder"){
    fs.rmdir(`./uploads/${req.params.filename}`, function(err){
      if(err) console.log(err)
      else res.redirect("back")
    })
  } else {
    fs.unlink(`./uploads/${req.params.filename}`, function(err){
      if(err) console.log(err)
      else res.redirect("back")
    })
  }
})



module.exports = router;
