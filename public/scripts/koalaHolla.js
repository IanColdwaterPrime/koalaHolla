console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    var nameIn = $('#nameIn').val();
    var ageIn = $('#ageIn').val();
    var sexIn = $('#sexIn').val();
    var readyForTransferIn = $('#readyForTransferIn').val();
    var notesIn = $('#notesIn').val();
    // NOT WORKING YET :(
    // using a test object
    var newKoala = {
      name: 'nameIn',
      age: 'ageIn',
      sex: 'sexIn',
      readyForTransfer: 'readyForTransferIn',
      notes: 'notesIn',
    };
    // call saveKoala with the new obejct
    saveKoala( newKoala );

    var saveKoala = function( newKoala ){
      console.log( 'in saveKoala', newKoala );
      // ajax call to server to get koalas
      $.ajax({
        url: '/addKoala',
        type: 'post',
        data: newKoala,
        success: function( data ){
          console.log( 'got some koalas: ', data );
        } // end success
      }); //end ajax
    }

  }); //end addButton on click
}); // end doc ready

var getKoalas = function(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    url: '/getKoalas',
    type: 'GET',
    success: function( data ){
      console.log( 'got some koalas: ', data );
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas
