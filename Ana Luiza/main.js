const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[1].onclik = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[1].class.List.add("ativo");
        }
    
        botoes[1] .classList.add("ativo"); 
    }
    console.log();
}
<script src="main.js"></script>
const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for(let i=0; i <  botoes.length; i++){
    console.log(i);
}
botoes[i].onclick = function(){
    
    botoes[i].classList.add("ativo");
}
for(let j=0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}