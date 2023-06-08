const express = require("express");
const app = express();
var PORT = 3000;
  
app.get("/user", function(req, res){
  
    var name = req.query.name
    var age = req.query.age
      
    console.log("Name : ", name)
    console.log("Age : ", age)

    res.json(req.query)
})
    
app.get('/:id', (req, res) => {
    res.json(req.params)
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
 
app.post('/signup', function (req, res) {
    const data = req.body;
 
    console.log("Name: ", data.name);
    console.log("Age: ", data.age);
    console.log("Gender: ", data.gender);
 
    res.json(data);
});

app.listen(PORT, function(error){
    if(error) throw error;
    console.log("Server created Successfully on PORT", PORT);
});