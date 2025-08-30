let index = 0;
let element = document.getElementById('name');
let text1 = element.dataset.name;
let i = 0;
id1= setInterval(() => {
    element.textContent += text1[i];
    i++;
    if (i > text1.length) {
        element.textContent ="";
        i=0;     
    }
    
}, 200);


let images = ["img/final2.png","img/final3.png","img/book.png" ,"img/landing.png","img/menu.png" ,"img/new.png" ,"img/work1.png","img/work2.png" ,"img/final1.png"];


function showImage() {
  document.getElementById("slide").src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}
 // JavaScript للتحكم في قائمة الهاتف
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
        
        // إغلاق القائمة عند النقر على أي عنصر
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));




