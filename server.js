const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(request, response)=>{

  response.render('home.hbs',{

    userName:'Raj',
    regYear: new Date().getFullYear()
  });
  // response.send('Hello There !!');
});

app.get('/html',(request, response)=>{

  response.send('<h1> Hello HTML </h1>');
});

app.get('/json',(request, response)=>{

  response.send({

    name:'raj',
    city:[
      'Bilaspur',
      'Indore'
    ]
  });
});


app.listen(9999,()=>{
  console.log('Server is Up & Running!!');
});
