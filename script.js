let menuLi =document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY +97 < section[len].offsetTop){

    }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky menu

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist")

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("active");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("active");
}


// download resume

var downloadButton = document.getElementById("download-cv");

  downloadButton.addEventListener("click", function(event) {
    event.preventDefault();
    var fileName = "Ritya_Kumari_Resume.pdf";
    var downloadLink = document.createElement("a");
    downloadLink.href = "Ritya_Kumari_Resume.pdf";
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  })