import { citaionStreameuses } from './dico.js'

const btnReset = document.getElementById('btnReset')
const input = document.getElementById('input')
const divInfo1 = document.getElementById('divInfo1')
const divInfo2 = document.getElementById('divInfo2')
const divInfo3 = document.getElementById('divInfo3')
const dataInfo1 = document.getElementById('dataInfo1')
const dataInfo2 = document.getElementById('dataInfo2')
const dataInfo3 = document.getElementById('dataInfo3')
 const titleHoursWatched = document.getElementById('title2');
  const titleFollowers = document.getElementById('title1');
   const titleRank = document.getElementById('title3');
let firstSearch = true




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


/*document.querySelector('.sticks').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    //document.querySelector('.input').value = '';
    document.querySelector('.input-container').blur();
});*/


function inputRefresh () {
input.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      

        const response = await fetchTwitch(event.target.value)
        console.log(response.followers_total)

        if (dataInfo1.firstChild) {
    dataInfo1.firstChild.innerText = `${response.followers_total}`;
        } else{
            const pFollowers = document.createElement('p')
        pFollowers.innerText = `${response.followers_total}`
        dataInfo1.appendChild(pFollowers)
        }
        if (dataInfo2.firstChild) {
    dataInfo2.firstChild.innerText = response.hours_watched;
        } else {
              const searchHours = document.createElement('p')
        searchHours.innerText = response.hours_watched
        dataInfo2.appendChild(searchHours)
        }
        if (dataInfo3.firstChild) {
    dataInfo3.firstChild.innerText = response.rank;
        } else {
        
        const searchRank = document.createElement('p')
        searchRank.innerText = response.rank
        dataInfo3.appendChild(searchRank)
        }
        if (firstSearch ) {

        etoilesContent()
        anyme023Content()
        squeezieContent()
        addTitles()
        
            firstSearch = false 

        }

        event.target.value = ''


    }

})
} inputRefresh()

async function fetchTwitch(searchStreameuse) {
    const response = await fetch(`https://twitchtracker.com/api/channels/summary/${searchStreameuse}`)
    const streaumeuse = await response.json()
    return streaumeuse


}

function addTitles() {
    if (document.getElementById('title1') !== '') {
        const titleFollowers = document.getElementById('title1');
        titleFollowers.innerText = 'Followers';
        titleFollowers.classList.add('title');
        divInfo1.prepend(titleFollowers)
    }
    if (document.getElementById('title2') !== '') {
        const titleHoursWatched = document.getElementById('title2');
        titleHoursWatched.innerText = 'Heures streamées regardées :';
        titleHoursWatched.classList.add('title');
        divInfo2.prepend(titleHoursWatched)
    }
    if (document.getElementById('title3') !== '') {
        const titleRank = document.getElementById('title3');
        titleRank.innerText = 'Rank Mondial :';
        titleRank.classList.add('title');
        divInfo3.prepend(titleRank)
    }
    
}

async function etoilesContent() {

    const response = await fetch(`https://twitchtracker.com/api/channels/summary/etoiles`)
    const data = await response.json();

    const pEtoilesFollowers = document.createElement('p')
    pEtoilesFollowers.innerText =`${data.followers_total}`
    dataInfo1.appendChild(pEtoilesFollowers)
    pEtoilesFollowers.classList.add('etoilesFollowers')


    const pEtoilesHours = document.createElement('p')
    pEtoilesHours.innerText = ` ${data.hours_watched}`
    dataInfo2.appendChild(pEtoilesHours)
    pEtoilesHours.classList.add('etoilesHours')

    const pEtoilesRank = document.createElement('p')
    pEtoilesRank.innerText = ` ${data.rank}`
    dataInfo3.appendChild(pEtoilesRank)
    pEtoilesRank.classList.add('etoilesRank')


}



async function anyme023Content() {

    const response = await fetch(`https://twitchtracker.com/api/channels/summary/anyme023`)
    const data = await response.json();


    const pAnymeFollowers = document.createElement('p')
    pAnymeFollowers.innerText = data.followers_total
    dataInfo1.appendChild(pAnymeFollowers)
    pAnymeFollowers.classList.add('anymeFollowers')


    const pAnymeHours = document.createElement('p')
    pAnymeHours.innerText = data.hours_watched
    dataInfo2.appendChild(pAnymeHours)
    pAnymeHours.classList.add('anymeHours')

    const pAnymeRank = document.createElement('p')
    pAnymeRank.innerText = data.rank
    dataInfo3.appendChild(pAnymeRank)
    pAnymeRank.classList.add('anymeRank')

}



async function squeezieContent() {
    const response = await fetch(`https://twitchtracker.com/api/channels/summary/squeezie`)
    const data = await response.json()

    const pSqueezieFollowers = document.createElement('p')
    pSqueezieFollowers.innerText = data.followers_total
    dataInfo1.appendChild(pSqueezieFollowers)
    pSqueezieFollowers.classList.add('squeezieFollowers')


    const pSqueezieHours = document.createElement('p')
    pSqueezieHours.innerText = data.hours_watched
    dataInfo2.appendChild(pSqueezieHours)
    pSqueezieHours.classList.add('squeezieHours')

    const pSqueezieRank = document.createElement('p')
    pSqueezieRank.innerText = data.rank
    dataInfo3.appendChild(pSqueezieRank)
    pSqueezieRank.classList.add('squeezieRank')


}



function resetBtn() {
 

btnReset.addEventListener('click',() => {

        dataInfo1.innerText = ''
        dataInfo2.innerText = ''
        dataInfo3.innerText = ''
        titleFollowers.innerText = ''
        titleHoursWatched.innerText = ''
        titleRank.innerText = ''
        
        firstSearch = true
inputRefresh()
} )
    
}
resetBtn()

function refreshInput(click) {
    btnReset.addEventListener('click', () => {
if (click) {
    fetchTwitch()
}
    })
    
}