var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser= require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( {extended: false } );
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/koalaholla';
var port = process.env.PORT || 8989;
// static folder
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

pg.connect(connectionString, function(err, client, done) {
  if(err) {
    console.log(err);
    alert('Connection failure');
  }
  else {
console.log('db connected');
  var resultsArray = [];

  }
});

  //send info back to client
  res.send( objectToSend );
});

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
