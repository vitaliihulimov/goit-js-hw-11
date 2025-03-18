import{a as y,S as d,i as s}from"./assets/vendor-DXaqCXe3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const f="49410735-a7c42e02d1ae980291a09914d",m="https://pixabay.com/api/";async function g(o){try{return(await y.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch(e){console.error("Ошибка:",e)}}const c=document.querySelector(".gallery");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){return o.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
            </a>
            <div class="info">
                <p><b>Likes:</b> ${e.likes}</p>
                <p><b>Views:</b> ${e.views}</p>
                <p><b>Comments:</b> ${e.comments}</p>
                <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </li>
    `).join("")}function L(o){if(!o||o.length===0){s.warning({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=b(o),h.refresh()}function w(){c.innerHTML=""}const u=document.querySelector(".form"),p=document.querySelector("#search-input"),a=document.querySelector("#loader"),q=document.querySelector(".gallery");(!u||!p||!a||!q)&&console.error("Error");a.style.display="none";u.addEventListener("submit",async o=>{o.preventDefault();const e=p.value.trim();if(!e){s.error({title:"error",message:"Enter a search query",position:"topRight"});return}w(),a.style.display="block";try{const n=await g(e);if(!n||n.length===0){s.warning({title:"No Results",message:"No images found",position:"topRight"});return}L(n)}catch{s.error({title:"Error",message:"Failed to fetch images. Try again.",position:"topRight"})}finally{a.style.display="none"}});
//# sourceMappingURL=index.js.map
