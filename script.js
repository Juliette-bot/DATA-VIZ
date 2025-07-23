import { citaionStreameuses } from './dico.js'

const btnReset = document.getElementById('btnReset')
const input = document.getElementById('input')
const divInfo1 = document.getElementById('divInfo1')
const divInfo2 = document.getElementById('divInfo2')
const divInfo3 = document.getElementById('divInfo3')

setTimeout(() => {

    btnResetAndInput()
    clearCitations()

}
    , 3000)


function hideBtnResteAndInput() {
    const input = document.getElementById('input')
    const btnReset = document.getElementById('btnReset')

    input.style.display = 'none'
    btnReset.style.display = "none"
}

hideBtnResteAndInput()


function citationAleatoirStreameuses() {
    let ciationAleatoire = Math.floor(Math.random() * citaionStreameuses.length)
    let citationAleatoireValue = citaionStreameuses[ciationAleatoire]
    console.log(citationAleatoireValue)

    const h1citationsStreameuse = document.createElement("h1")
    h1citationsStreameuse.innerHTML = citationAleatoireValue.citation
    h1citationsStreameuse.classList.add('citations')

    const pNameStreameuse = document.createElement("p")
    pNameStreameuse.innerHTML = citationAleatoireValue.name
    pNameStreameuse.classList.add('nameStreameuse')

    divLaoding.appendChild(h1citationsStreameuse)
    divLaoding.appendChild(pNameStreameuse)


}
citationAleatoirStreameuses()


function clearCitations() {

    const divLaoding = document.getElementById('divLaoding')

    divLaoding.style.display = "none"
}


function btnResetAndInput() {
    const input = document.getElementById('input')
    const btnReset = document.getElementById('btnReset')

    input.style.display = 'flex'
    btnReset.style.display = "flex"

}


input.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
       

        const response = await fetchTwitch(event.target.value)
        console.log(response.followers_total)
        const pFollowers = document.createElement('p')
        pFollowers.innerText = response.followers_total
        divInfo1.appendChild(pFollowers)
        event.target.value = ''

        etoilesContent()
        anyme023Content()
        squeezieContent()



    }

})

async function fetchTwitch(searchStreameuse) {
    const response = await fetch(`https://twitchtracker.com/api/channels/summary/${searchStreameuse}`)
    const streaumeuse = await response.json()
    return streaumeuse


}


async function etoilesContent() {

    const response = await fetch(`https://twitchtracker.com/api/channels/summary/etoiles`)
    const data = await response.json();

    const pEtoilesFollowers = document.createElement('p')
    pEtoilesFollowers.innerText = data.followers_total
    divInfo1.appendChild(pEtoilesFollowers)
    pEtoilesFollowers.classList.add('etoilesFollowers')


    const pEtoilesHours = document.createElement('p')
    pEtoilesHours.innerText = data.hours_watched
    divInfo2.appendChild(pEtoilesHours)
    pEtoilesHours.classList.add('etoilesHours')

    const pEtoilesRank = document.createElement('p')
    pEtoilesRank.innerText = data.rank
    divInfo3.appendChild(pEtoilesRank)
    pEtoilesRank.classList.add('etoilesRank')


}



async function anyme023Content() {

    const response = await fetch(`https://twitchtracker.com/api/channels/summary/anyme023`)
    const data = await response.json();


    const pAnymeFollowers = document.createElement('p')
    pAnymeFollowers.innerText = data.followers_total
    divInfo1.appendChild(pAnymeFollowers)
    pAnymeFollowers.classList.add('anymeFollowers')


    const pAnymeHours = document.createElement('p')
    pAnymeHours.innerText = data.hours_watched
    divInfo2.appendChild(pAnymeHours)
    pAnymeHours.classList.add('anymeHours')

    const pAnymeRank = document.createElement('p')
    pAnymeRank.innerText = data.rank
    divInfo3.appendChild(pAnymeRank)
    pAnymeRank.classList.add('anymeRank')

}



async function squeezieContent() {
    const response = await fetch(`https://twitchtracker.com/api/channels/summary/squeezie`)
    const data = await response.json()

    const pSqueezieFollowers = document.createElement('p')
    pSqueezieFollowers.innerText = data.followers_total
    divInfo1.appendChild(pSqueezieFollowers)
    pSqueezieFollowers.classList.add('squeezieFollowers')


    const pSqueezieHours = document.createElement('p')
    pSqueezieHours.innerText = data.hours_watched
    divInfo2.appendChild(pSqueezieHours)
    pSqueezieHours.classList.add('squeezieHours')

    const pSqueezieRank = document.createElement('p')
    pSqueezieRank.innerText = data.rank
    divInfo3.appendChild(pSqueezieRank)
    pSqueezieRank.classList.add('squeezieRank')


}



function resetBtn() {
 

btnReset.addEventListener('click',() => {

        divInfo1.innerText = ''
        divInfo2.innerText = ''
        divInfo3.innerText = ''
        

} )
    
}
resetBtn()

