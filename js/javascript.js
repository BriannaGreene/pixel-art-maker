// wrtie a function to create divs to fill the space
console.log("jquery is ready")

$(document).ready(function(){
  createGrid(1174)
})

function createGrid(number) {
 for (var i = 0; i <= number; i++) {
  $('.wrapper').append('<div class="pixel"></div>')
 }
 // $('.pixel').height($('.wrapper').height()/number)
 // $('.pixel').width($('.pixel').width()/number)
 $('.pixel').click(function(){
   console.log("click function is hooked up!")
 })
}

$('.pixel').hover(function(){
  $(this).css
})
