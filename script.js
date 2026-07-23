/*====================================
THE POETIC HOUSE v3.0
====================================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/*========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*========================
HEADER SHADOW
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


/*========================
SCROLL REVEAL
=========================*/

const cards = document.querySelectorAll(

    ".author-card,.book-card,.poem-card,.story-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = ".8s";

    observer.observe(card);

});


/*========================
BACK TO TOP
=========================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#556B2F;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.25);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/*========================
SEARCH BUTTON
=========================*/

const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        alert("Search feature coming soon.");

    });

}


/*========================
BUTTON RIPPLE
=========================*/

document.querySelectorAll("button,.primary-btn,.secondary-btn")

.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


/*========================
ACTIVE MENU
=========================*/

const menu = document.querySelectorAll("nav a");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(x => x.classList.remove("active"));

        item.classList.add("active");

    });

});


/*========================
WELCOME MESSAGE
=========================*/

console.log("Welcome to The Poetic House");


/*========================
END
=========================*/
/*========================
MOBILE MENU
=========================*/

const toggle=document.getElementById("menuToggle");

const mobile=document.getElementById("mobileMenu");

if(toggle){

toggle.addEventListener("click",()=>{

mobile.classList.toggle("active");

});

}

document.querySelectorAll(".mobile-menu a")

.forEach(link=>{

link.onclick=()=>{

mobile.classList.remove("active");

};

});
/*=========================
PREMIUM LOADER
==========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},1800);

});
/*=========================
CUSTOM CURSOR
==========================*/

const cursor=document.querySelector(".cursor");

const blur=document.querySelector(".cursor-blur");

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX+"px";
blur.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.author-card,.book-card,.poem-card,.story-card")

.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(2)";

blur.style.transform="translate(-50%,-50%) scale(2.8)";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

blur.style.transform="translate(-50%,-50%) scale(1)";

});

});
