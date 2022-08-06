let parallax_q=document.querySelector('.parallax')
console.log(parallax_q)

window.addEventListener("scroll", function(){
    let offset =this.window.pageYOffset;
    parallax_q.style.backgroundPositionY=offset*0.8+'px';
    // console.log(offset)
})