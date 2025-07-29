import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm"
import { initChart, addStreamerToChart } from "./animation.js"
export { inputRefresh, resetBtn }

const btnReset = document.getElementById('btnReset')
const input = document.getElementById('input')
const titleHoursWatched = document.getElementById('title2');
const titleFollowers = document.getElementById('title1');
const titleRank = document.getElementById('title3');
let firstSearch = true



//Notre input keydown qui appel notre api en dynamique selon un nom donné par le/la user
function inputRefresh() {

    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            const response = await fetchTwitch(event.target.value)



            const nameStreameuse = document.getElementById('nameStreameuse')
            const pInfo1Streameuse = document.getElementById('pInfo1Streameuse')
            const nameStreameuse2 = document.getElementById('nameStreameuse2')
            const pInfo1Streameuse2 = document.getElementById('pInfo1Streameuse2')
            const nameStreameuse3 = document.getElementById('nameStreameuse3')
            const pInfo1Streameuse3 = document.getElementById('pInfo1Streameuse3')


            if (pInfo1Streameuse) {
                nameStreameuse.innerText = event.target.value
                pInfo1Streameuse.innerText = `${response.followers_total}`;
                addAnimationFollowers(pInfo1Streameuse)


            } else {
                nameStreameuse.innerText = event.target.value
                pInfo1Streameuse.innerText = `${response.followers_total}`
                addAnimationFollowers(pInfo1Streameuse)


            } if (pInfo1Streameuse2) {
                //nameStreameuse2.innerHTML = event.target.value
                //pInfo1Streameuse2.firstChild.innerHTML = `${response.hours_watched}`
                const streamerName = event.target.value
                // await addStreamerToChart(streamerName)
                // await addStreamerToChart(nameStreameuse2)


            } else {
                const streamerName = event.target.value
                // await addStreamerToChart(streamerName)
                //nameStreameuse2.innerText = event.target.value
                //pInfo1Streameuse2.innerText = `${response.hours_watched}`
                // await addStreamerToChart(nameStreameuse2)



            } if (pInfo1Streameuse3) {
                nameStreameuse3.innerText = event.target.value
                pInfo1Streameuse3.innerText = `${response.rank}`


            } else {
                nameStreameuse3.innerText = event.target.value
                pInfo1Streameuse3.innerText = `${response.rank}`


            } if (firstSearch) {
                addTitles()
                const nameEtoiles = "etoiles"
                const nameAnyme = "anyme023"
                const nameSqueezie = "squeezie"

                const etoiles = document.getElementById('etoiles')
                const pInfo1Etoiles = document.getElementById('pInfo1Etoiles')
                const anyme = document.getElementById('anyme')
                const pInfo1Anyme = document.getElementById('pInfo1Anyme')
                const squeezie = document.getElementById('squeezie')
                const pInfo1Squeezie = document.getElementById('pInfo1Squeezie')


                const etoiles3 = document.getElementById('etoiles3')
                const pInfo1Etoiles3 = document.getElementById('pInfo1Etoiles3')
                const anyme3 = document.getElementById('anyme3')
                const pInfo1Anyme3 = document.getElementById('pInfo1Anyme3')
                const squeezie3 = document.getElementById('squeezie3')
                const pInfo1Squeezie3 = document.getElementById('pInfo1Squeezie3')

                let mavar = contentInfo(etoiles, pInfo1Etoiles, nameEtoiles, etoiles3, pInfo1Etoiles3)
                contentInfo(anyme, pInfo1Anyme, nameAnyme, anyme3, pInfo1Anyme3)
                contentInfo(squeezie, pInfo1Squeezie, nameSqueezie, squeezie3, pInfo1Squeezie3)

                addStreamerToChart('Etoiles', mavar, console.log(mavar))
                addStreamerToChart('Squeezie')
                addStreamerToChart('Anyme023')
                initChart()



                console.log("coucou")


                firstSearch = false

            }

            event.target.value = ''

        }
    })
}



//Application de notre 1ere animation sur un block de données (FOLLOWERS)
function addAnimationFollowers(child) {

    let number = parseInt(child.innerText)

    animate(0, number, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => (child.innerHTML = Math.round(latest)),
    })

}




//Ajout de titre au dessus de nos données dans chaque block ("block")
function addTitles() {
    const divInfo1 = document.getElementById('divInfo1')
    const divInfo2 = document.getElementById('divInfo2')
    const divInfo3 = document.getElementById('divInfo3')

    if (titleFollowers !== '') {
        const titleFollowers = document.getElementById('title1');
        titleFollowers.innerText = 'Followers';
        titleFollowers.classList.add('title');
        divInfo1.prepend(titleFollowers)
    }
    if (titleHoursWatched !== '') {
        const titleHoursWatched = document.getElementById('title2');
        titleHoursWatched.innerText = 'Heures streamées regardées :';
        titleHoursWatched.classList.add('title');
        divInfo2.prepend(titleHoursWatched)
    }
    if (titleRank !== '') {
        const titleRank = document.getElementById('title3');
        titleRank.innerText = 'Rank Mondial :';
        titleRank.classList.add('title');
        divInfo3.prepend(titleRank)
    }

}

//Appel de l'API pour notre input
async function fetchTwitch(searchStreameuse) {
    const response = await fetch(`https://twitchtracker.com/api/channels/summary/${searchStreameuse}`)
    const streaumeuse = await response.json()
    return streaumeuse


}

async function contentInfo(nameElement, pElement, streamerName, nameElement3, pElement3) {
    const response = await fetch(`https://twitchtracker.com/api/channels/summary/${streamerName}`)
    const data = await response.json()

    nameElement.innerText = streamerName
    pElement.innerHTML = `${data.followers_total}`
    addAnimationFollowers(pElement)

    //nameElement2.innerText = streamerName
    //pElement2.innerHTML = `${data.hours_watched}`

    nameElement3.innerText = streamerName
    pElement3.innerText = `${data.rank}`

    return data

}

//Ajout d'un evenement sur notre btn reset, il vas nous permettre de vider toute nos data
// et titre pour repartir sur un page "neuve"
function resetBtn() {

    btnReset.addEventListener('click', () => {


        nameStreameuse.innerText = ''
        pInfo1Streameuse.innerText = ''
        etoiles.innerText = ''
        pInfo1Etoiles.innerText = ''
        anyme.innerText = ''
        pInfo1Anyme.innerText = ''
        squeezie.innerText = ''
        pInfo1Squeezie.innerText = ''

        /*nameStreameuse2.innerText = ''
        pInfo1Streameuse2.innerText = ''
        etoiles2.innerText = ''
        pInfo1Etoiles2.innerText = ''
        anyme2.innerText = ''
        pInfo1Anyme2.innerText = ''
        squeezie2.innerText = ''
        pInfo1Squeezie2.innerText = ''*/

        nameStreameuse3.innerText = ''
        pInfo1Streameuse3.innerText = ''
        etoiles3.innerText = ''
        pInfo1Etoiles3.innerText = ''
        anyme3.innerText = ''
        pInfo1Anyme3.innerText = ''
        squeezie3.innerText = ''
        pInfo1Squeezie3.innerText = ''


        //divInfo2.innerText = ''
        //dataInfo3.innerText = ''
        titleFollowers.innerText = ''
        titleHoursWatched.innerText = ''
        titleRank.innerText = ''

        firstSearch = true
        inputRefresh()
    })

}

resetBtn()
