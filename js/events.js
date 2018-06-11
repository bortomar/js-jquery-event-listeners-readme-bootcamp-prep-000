//define functions here
function getIt() {
  $('p').on('click', function() {
    //$(this).css('background-color', 'yellow');
    alert('Hey!');
  });
};

$(document).ready(function(){

// call functions here
getIt();
});
