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

// JS function to add color on click
function colorSelection(clicked) {
  let colorWrapper = document.querySelector('.color-wrapper')
  colorWrapper.addEventListener('click', function() {
    let theID = event.target.getAttribute('id')

    let pixelWrapper = document.querySelector('.wrapper')
    pixelWrapper.addEventListener('click', function() {
      let thePixel = event.target
      thePixel.id = theID


    })
  })
}


let mouseState = false

//event list on canvas for mouse down, set to true
// event listener on canvas for mouse up, set to false
// event list for mouseover, if mousestate is true then paint.
