let nickname = prompt("Digite o nome do Heroi");
let experiencia = prompt("Informe a experiencia do Heroi")
let nivel;

if (experiencia <= 1000){
    nivel = "Ferro";
} else if(experiencia >= 1001 && experiencia <= 2000){
    nivel = "Broze";
} else if(experiencia >= 2001 && experiencia <= 5000){
    nivel = "Prata";
} else if(experiencia >= 5001 && experiencia <= 7000){
    nivel = "Ouro";
} else if(experiencia >= 7001 && experiencia <= 8000){
    nivel = "Platina";
} else if(experiencia >= 8001 && experiencia <= 9000){
    nivel = "Ascendente";
} else if(experiencia >= 9001 && experiencia <= 10000){
    nivel = "Imortal";
} else if(experiencia > 10.001){
    nivel = "Radiante";
}
const nomeDoHeroi = "O Herói de nome ";
const nivelDoHeroi = " está no nível de ";
console.log(nomeDoHeroi + nickname + nivelDoHeroi + nivel);