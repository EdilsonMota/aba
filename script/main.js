
//Adicionar espaço entre hamburguer menu e o topo automaticamente
// const height = document.getElementById("top_nav").getComputedStyle();
// const menu = div.querySelector("#menu");
// const menuPositino = window.getComputedStyle(div)["height"];

// function enviarEmail(){
//     const textoEmail = getElementById();
//     var mailSplitted = ['mailto', 'to:mye', 'mail@', 'addre', 'ss.fr'];
//     var destinatario = "mail@example.org";
//     var assunto = "?subject=Atendimento";
//     var cc = "";
//     var bcc = "edilson.mota3@hotmail.com";
//     var corpo = "";
//     window.location.href = "mailto:mail@example.org?";
// }


// Animação para trocar texto

const textos = [
{id: 0, principal: "Estrela do basquete renova contrato.", descritivo: "Mega estrela estende contrato por 5 anos."}
,{id: 1, principal: "Recorde histórico: 70 pontos em jogo.", descritivo: "Jogador faz história com incríveis 70 pontos."}, 
{id: 2, principal: "Final emocionante define campeão.", descritivo: "Duelo intenso termina com novo campeão."}];

document.getElementById("quote_area_texto_principal").innerText = textos[0].principal;
document.getElementById("quote_area_texto_descritivo").innerText = textos[0].descritivo;

let pointer = 0;

function mudar_texto(index){
    let texto_principal = document.getElementById("quote_area_texto_principal");
    let texto_descritivo = document.getElementById("quote_area_texto_descritivo");
    texto_principal.innerText = textos[index].principal;
    texto_descritivo.innerText = textos[index].descritivo;
}

let intervalID = setInterval(mudar_texto_sozinho, 5000);

function mudar_texto_sozinho() {
    pointer++;
    if(pointer > textos.length)
        pointer = 0;
    mudar_texto(pointer);
    mudar_indicar_texto(pointer);
}

function mudar_indicar_texto(index){
    const allTextProgresso = document.getElementsByClassName("texto_progresso");
    for (let i = 0; i < allTextProgresso.length; i++) {
        allTextProgresso[i].classList.remove("texto_progresso_selecionado");
    }
    allTextProgresso[index].classList.add("texto_progresso_selecionado");
}

function texto_progresso_toggle(event){
    const allTextProgresso = document.getElementsByClassName("texto_progresso");
    const source = event.target;

    for (let i = 0; i < allTextProgresso.length; i++) {
        allTextProgresso[i].classList.remove("texto_progresso_selecionado");
    }
    source.classList.add("texto_progresso_selecionado");
    
    if(source.id === "texto_progresso_1"){
        mudar_texto(0);
    }
    else if(source.id === "texto_progresso_2"){
        mudar_texto(1);
    }
    else if(source.id === "texto_progresso_3"){
        mudar_texto(2);
    }
    clearInterval(intervalID);
    intervalID = setInterval(mudar_texto_sozinho, 5000);
}

const allTextProgresso = document.getElementsByClassName("texto_progresso");
for (let i = 0; i < allTextProgresso.length; i++) {
    allTextProgresso[i].addEventListener('click', texto_progresso_toggle);
}