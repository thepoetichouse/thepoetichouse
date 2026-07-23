/*====================================
THE POETIC HOUSE v4.0
====================================*/

/* PAGE LOADED */
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    },1800);

    setTimeout(function(){

        loader.remove();

    },2600);

});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href === "#") return;

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* HEADER SHADOW */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* SCROLL REVEAL */

const cards = document.querySelectorAll(

".author-card,.book-card,.poem-card,.story-card"

);

if(cards.length){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

observer.observe(card);

});

}


/* BACK TO TOP */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

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
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.25);
z-index:999;
transition:.3s;

`;

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>500

?

"block"

:

"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* BUTTON HOVER */

document

.querySelectorAll("button,.primary-btn,.secondary-btn")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


/* ACTIVE MENU */

const menu=document.querySelectorAll("nav a");

menu.forEach(item=>{

item.onclick=()=>{

menu.forEach(x=>x.classList.remove("active"));

item.classList.add("active");

};

});

console.log("Welcome to The Poetic House");
/*=========================
MOBILE MENU
=========================*/

const toggle = document.getElementById("menuToggle");
const mobile = document.getElementById("mobileMenu");

if (toggle && mobile) {

    toggle.addEventListener("click", () => {
        mobile.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {
            mobile.classList.remove("active");
        });

    });

}


/*=========================
LIVE SEARCH
=========================*/

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        document.querySelectorAll(".author-card,.book-card")

        .forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =

            text.includes(value)

            ? ""

            : "none";

        });

    });

}


/*=========================
3D CARD EFFECT
=========================*/

document.querySelectorAll(".author-card,.book-card")

.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;

        const rotateX = (rect.height / 2 - y) / 18;

        card.style.transform =

        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

        "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});


/*=========================
SEARCH BUTTON
=========================*/

const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        const box = document.getElementById("searchInput");

        if (box) {

            box.focus();

        }

    });

}

console.log("The Poetic House v4 Loaded");
