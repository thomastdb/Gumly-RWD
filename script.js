
window.addEventListener('DOMContentLoaded', () => {
    const productContainers = document.querySelectorAll('.product-container');
    const nxtBtn = document.querySelectorAll('.nxt-btn');
    const preBtn = document.querySelectorAll('.pre-btn');
  
    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });
  
      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
  
      item.addEventListener('scroll', () => {
        let scrollLeft = item.scrollLeft;
        let maxScrollLeft = item.scrollWidth - item.clientWidth;
  
        if (scrollLeft === 0) {
          preBtn[i].style.display = 'none';
        } else {
          preBtn[i].style.display = 'block';
        }
  
        if (scrollLeft >= maxScrollLeft) {
          nxtBtn[i].style.display = 'none';
        } else {
          nxtBtn[i].style.display = 'block';
        }
      });
  
      preBtn[i].style.display = 'none';
    });
  });

 
const header = document.getElementById('header');

 
function checkScroll() {
  if (window.scrollY > 50) {   
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}


window.addEventListener('scroll', checkScroll);
