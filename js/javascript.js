console.log("javascript is ready")
// JQUERY FUNCTION TO CREATE PIXEL DIVS
// $(document).ready(function(){
//   createGrid(1174)
// })
//
// function createGrid(number) {
//  for (var i = 0; i <= number; i++) {
//   $('.wrapper').append('<div class="pixel"></div>')
//  }
//
//  $('.pixel').click(function(){
//    console.log("click function is hooked up!")
//  })
// }
//
// $('.pixel').hover(function(){
//   $(this).css
// })


// JAVASCRIPT VERSION TO CREATE PIXEL DIVS
function createGrid(number) {
  let wrapper = document.querySelector('.wrapper')

  for (var i = 0; i <= number; i++) {
    let div = document.createElement('div')
    div.className = 'pixel'
    wrapper.append(div)
  }
}

// FUNCTION TO GRAB BACKGROUND COLOR ON CLICK
// SET BACKGROUND COLOR TO CLICKED PIXEL
function clickEvent() {
  let colorDiv = document.getElementById('one')
}

// EVENT LISTENER?
document.addEventListener("click", function() {
  //list functions here?
})


// -this (element of html doc)
// -element being clicked or whatever (event.target)
