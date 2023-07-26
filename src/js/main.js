/*  menu bar */

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

/* event menu */

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}
/* scroll  p/ remover */

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
/* slide bar */

let slides = document.querySelectorAll('.slider-container')
let index = 0;
// next
function next(){
  slides[index].classList.remove('active')
  index = (index + 1) % slides.length;
  slides[index].classList.add('active')
}
// prev
function prev(){
  slides[index].classList.remove('active')
  index = (index - 1 + slides.length) %  slides.length;
  slides[index].classList.add('active')
}

/*  Destaques  img - 1 */
document.querySelectorAll('.feature-image-1').forEach(image_1 => {
    image_1.addEventListener('click',() => {
      let src = image_1.getAttribute('src');
      
      document.querySelector('.big-image').src = src;
    })
});
/*  destaque image 2 */
document.querySelectorAll('.feature-image-2').forEach(image_2 => {
    image_2.addEventListener('click',() => {
      let src = image_2.getAttribute('src');
    3
      document.querySelector('.big-image').src = src;
    })
});
/* destaque image 3 */
document.querySelectorAll('.feature-image-3').forEach(image_3 => {
    image_3.addEventListener('click',() => {
      let src = image_3.getAttribute('src');
      document.querySelector('.big-image').src = src;
    })
});
