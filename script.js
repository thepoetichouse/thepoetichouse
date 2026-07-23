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
