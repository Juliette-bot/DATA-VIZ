export {hideBtnResteAndInput, citationAleatoirStreameuses, btnResetAndInput, clearCitations } 
import { citaionStreameuses } from './dico.js'


//Fonction qui nous sert a cacher le btnrest et l'input avant de le faire réaparétre apres 
//l'afficage de nos citations
function hideBtnResteAndInput() {

    const input = document.getElementById('input')
    const btnReset = document.getElementById('btnReset')

    input.style.display = 'none'
    btnReset.style.display = "none"
}




//Ici on gener des citation de manière aléatoire, recuperé dans un dico dur
function citationAleatoirStreameuses() {
    let ciationAleatoire = Math.floor(Math.random() * citaionStreameuses.length)
    let citationAleatoireValue = citaionStreameuses[ciationAleatoire]
    console.log(citationAleatoireValue)

    const h1citationsStreameuse = document.createElement("h1")
    h1citationsStreameuse.innerHTML = citationAleatoireValue.citation
    h1citationsStreameuse.classList.add('citations','ml12')

    const pNameStreameuse = document.createElement("p")
    pNameStreameuse.innerHTML = citationAleatoireValue.name
    pNameStreameuse.classList.add('nameStreameuse','ml12')

    divLaoding.appendChild(h1citationsStreameuse)
    divLaoding.appendChild(pNameStreameuse)

    lancerAnimation()
}


function lancerAnimation() {
 const citationContent = document.querySelectorAll(".ml12");

    citationContent.forEach(element => {
        element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({ loop: true })
    .add({
      targets: ".ml12 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 800 + 30 * i
    })
    .add({
      targets: ".ml12 .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
      });
})}


//Ici on cache la div laoding
function clearCitations() {

    const divLaoding = document.getElementById('divLaoding')
    divLaoding.style.display = "none"
}

//Ici on rend visible le btn reset et l'input
function btnResetAndInput() {
    const input = document.getElementById('input')
    const btnReset = document.getElementById('btnReset')

    input.style.display = 'flex'
    btnReset.style.display = "flex"

}

