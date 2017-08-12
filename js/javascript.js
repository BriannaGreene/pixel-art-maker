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


function colorSelection(clicked) {
  let colorWrapper = document.querySelector('.color-wrapper')
  colorWrapper.addEventListener('click', function() {
    let theID = event.target.getAttribute('id')
    console.log("this is the ID " + theID)

    let pixelWrapper = document.querySelector('.wrapper')
    pixelWrapper.addEventListener('click', function (){
      let thePixel = event.target
      thePixel.id = theID
      // thePixel.classList.toggle(theID)
      console.log(thePixel)
    })
  })
}
