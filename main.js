const btnLuck = document.querySelector("#btnLuck")
const btnReset = document.querySelector("#btnReset")
const screenOne = document.querySelector(".screenOne")
const screenTwo =  document.querySelector(".screenTwo")
const pCard = document.querySelector(".card")
let luckyPhrases = [
    "O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
    "A perseverança é a mãe da boa sorte.",
    "Sorte é estar pronto quando a oportunidade vem.",
    "A sorte favorece a mente bem preparada.",
    "Quanto mais eu treino, mais sorte eu tenho.",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "Amizade e Amor são coisas que se unem num piscar de olhos.",
    "Surpreender e ser surpreendido é o segredo do amor.",
    "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
    "Acredite em milagres, mas não dependa deles.",
    "Motivação não é sinónimo de transformação, mas um passo em sua direção.",
    "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
]




btnLuck.addEventListener('click', function() {
    const randomNumber = Math.round(Math.random() * 10)
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
    pCard.querySelector("p").innerText = luckyPhrases[randomNumber]

})

btnReset.addEventListener('click', function() {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
})


