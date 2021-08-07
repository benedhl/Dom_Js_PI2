function clickHeart() {
    let initialImg = document.getElementById("toggleHeart").src;
    let srcTest = initialImg.includes('icones/coracao.png');
    let newImg = {
        'true': 'icones/coracao_red.png',
        'false': 'icones/coracao.png'
    }[srcTest];
    console.log("clicou")
    return newImg;

}
toggleHeart.addEventListener("click", function() {
    document.getElementById("toggleHeart").src = clickHeart();
})

post.addEventListener("dblclick", function() {
    document.getElementById("toggleHeart").src = clickHeart();
    console.log("post")
})

commentBtn.addEventListener("click", function() {
    console.log("click comment")
        /*   var x = document.getElementById("form");
           if (x.style.display === "none") {
               x.style.display = "block";
           } else {
               x.style.display = "none";
           } */
    document.getElementById("#formulario").style.visibility = "visible";

})