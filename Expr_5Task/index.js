const express = require('express');
const app = express();


const users=[
    {id:1,name:"Coule",age:38,role:"HR"},
    {id:2,name:"Teresa",age:19,role:"PR-Manager"},
    {id:3,name:"Nick",age:25,role:"Web-Developer"}
  ]

  app.get('/users', function (req, res) {
    res.json(users);
   });
   app.listen(5500, () =>
     console.log(`App listening at port 5500`)
   );