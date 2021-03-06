var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( {extended: false } );
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/koallaholla';
var port = process.env.PORT || 8989;
// static folderkg

app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( 'index.html' );
});

// get koalas
app.get( '/getKoalas', function( req, res ){
  console.log( 'getKoalas route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from getKoalas route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});

// add koala
app.post( '/addKoala', urlencodedParser, function( req, res ){
  console.log( 'addKoala route hit' );
  //assemble object to send
  var objectToSend={
    response: req.body
  }; //end objectToSend
  var name = req.body.name;
  var age = req.body.age;
  var sex = req.body.sex;
  var readyForTransfer = req.body.readyForTransfer;
  var notes = req.body.notes;
    console.log(req.body);
pg.connect(connectionString, function(err, client, done) {
  if(err) {
    console.log(err);
    console.log('Connection failure');
  }
  else {
console.log('db connected');

  // //query call to db
 client.query('INSERT INTO koalas(name, sex, age, ready_for_transfer, notes) VALUES ($1, $2, $3, $4, $5)', [name, sex, age, readyForTransfer, notes]);

   res.send({success:true});
  } // end of else
 }); // end of pg connect

});  //send info back to client

// add koala
app.post( '/editKoala', urlencodedParser, function( req, res ){
  console.log( 'editKoala route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from editKoala route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});
