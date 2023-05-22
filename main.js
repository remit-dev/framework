                    
    /*  Preload GIF  */
 let loader = document.querySelector('.preloader');   
window.addEventListener("load", function (){
  loader.style.display = "none"
});
/*  Preload End  */



let parent = document.querySelectorAll('.parent');
let logo2 = document.querySelectorAll('.parent .t')
let container2 = document.querySelectorAll('.parent .sub');
let logo = document.querySelectorAll('.r');
let arrow = document.querySelectorAll('.align .r');
let container1 = document.querySelectorAll('li.align>ul');

/*  Menu Toggle  */
document.querySelector('.menu>i').addEventListener("click", function(){
  document.querySelector('nav').classList.toggle('menu-hide')
});


/*  Menu Toggle end  */


arrow.forEach((e,j) => e.addEventListener("click", () => {
  container1[j].classList.toggle('active');
  logo[j].classList.toggle('active');

   container1.forEach(function(c, k) {
      if (k !== j) {
        c.classList.remove('active');
      }
    });

    container2.forEach(function(m, l){
      if(l !==j){
        m.classList.remove('active')
      }
    });
    logo.forEach(function(c, k) {
      if (k !== j) {
        c.classList.remove('active');
        
      }
      else{
        logo2.forEach(function(r, t){
      if(t !== parent){
        r.classList.remove('active');
      }
      
    });
      }
    });
    
  parent.forEach((e,j) => {
  e.addEventListener("mouseover", () => {
    container2[j].classList.add('active');
    logo2[j].classList.add('active');
    container2.forEach(function(r, t){
      if(t !== j){
 
        r.classList.remove('active');
    
     
      };
    });
    logo2.forEach(function(r, t){
      if(t !== j){
        r.classList.remove('active');
      }
    });
    
    
    
  });
});
}));
    
    
    



