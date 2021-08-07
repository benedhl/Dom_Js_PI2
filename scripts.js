//like e deslike
function clickHeart() {
    let imagemInicial = document.getElementById("toggleHeart").src;
    let srcTeste = imagemInicial.includes('icones/coracao.png');
    let novaImagem = {
        'true': 'icones/coracao_red.png',
        'false': 'icones/coracao.png'
    }[srcTeste];
    console.log("clicou")
    return novaImagem;

}
toggleHeart.addEventListener("click", function() {
    document.getElementById("toggleHeart").src = clickHeart();
})

//duplo clique na foto 
post.addEventListener("dblclick", function() {
    document.getElementById("toggleHeart").src = clickHeart();
    console.log("post")
})

//Mostrar area de comentarios
commentBtn.addEventListener("click", function() {
    console.log("click comment")

    document.getElementById("form").style.visibility = "visible";

})

//Botão comentários
btnComentar.addEventListener("click", function() {
    let comentario = document.querySelector("#txtComentario");
    let valorComentario = txtComentario.value

    console.log(valorComentario)

    if (valorComentario == '') {
        alert("Digite um comentário!");
        return;
    }

    areaComentarios.innerHTML += `
    <div id="comment" class="comentario">
    <span>Luiz</span>
    <p>${valorComentario}</p>
    </div>
    `;
    txtComentario.value = ""

    document.getElementById("form").style.visibility = "hidden";
})