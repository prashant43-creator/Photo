let slides = 
document.querySelectorAll(".slide");
let currentslide = 0 ;

document.getElementById("next").addEventListener("click",()=>{
  slides[currentslide].style.display = "none";
  currentslide = (currentslide + 1)% slides.length;
  slides[currentslide].style.display = "block"
} )

document.getElementById("prev").addEventListener("click",()=>{
  slides[currentslide].style.display = "none";
  currentslide = (currentslide - 1 + slides.length)% slides.length;
  slides[currentslide].style.display = "block"
} )

