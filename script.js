/* ======================================
   THE POETIC HOUSE v2.0
====================================== */

console.log("The Poetic House Loaded Successfully");

/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});

/* ==========================
   Search Button
========================== */

const searchButton=document.querySelector(".search-box button");

const searchInput=document.querySelector(".search-box input");

if(searchButton){

searchButton.addEventListener("click",()=>{

const value=searchInput.value.trim();

if(value===""){

alert("कृपया कुछ खोजें।");

return;

}

alert("आपने खोजा : "+value);

});

}
/* ==========================
   Dark Mode
========================== */

const darkButton=document.createElement("button");

darkButton.innerHTML="🌙";

darkButton.className="dark-mode-btn";

document.body.appendChild(darkButton);

darkButton.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

/* ==========================
   Fade Animation
========================== */

const cards=document.querySelectorAll(

".author-card,.book-card,.poem-card,.story-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .8s ease";

observer.observe(card);

});
/* ==========================
   Back To Top Button
========================== */

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
   Reading Progress Bar
========================== */

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.prepend(progress);

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progressWidth=

(window.pageYOffset/totalHeight)*100;

progress.style.width=progressWidth+"%";

});
