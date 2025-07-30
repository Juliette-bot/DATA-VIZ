// import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";
// export { inputRefresh };
// const btnReset = document.getElementById("btnReset");
// const input = document.getElementById("input");
// const divInfo1 = document.getElementById("divInfo1");
// const divInfo2 = document.getElementById("divInfo2");
// const divInfo3 = document.getElementById("divInfo3");
// const dataInfo1 = document.getElementById("dataInfo1");
// const dataInfo2 = document.getElementById("dataInfo2");
// const dataInfo3 = document.getElementById("dataInfo3");
// const titleHoursWatched = document.getElementById("title2");
// const titleFollowers = document.getElementById("title1");
// const titleRank = document.getElementById("title3");
// let firstSearch = true;

// const nameEtoiles = "Etoiles";
// const nameAnyme = "Anyme";
// const nameSqueezie = "Squeezie";
// const nameStreameuse = document.getElementById("nameStreameuse");
// const pInfo1Streameuse = document.getElementById("pInfo1Streameuse");
// const etoiles = document.getElementById("etoiles");
// const pInfo1Etoiles = document.getElementById("pInfo1Etoiles");
// const anyme = document.getElementById("anyme");
// const pInfo1Anyme = document.getElementById("pInfo1Anyme");
// const squeezie = document.getElementById("squeezie");
// const pInfo1Squeezie = document.getElementById("pInfo1Squeezie");

// //----------------------------------APPEL DE L'API WEB ET MISE EN ANIMATION DES DONNEES RECUPERE------------------------------------

// //Notre input keydown qui appel notre api en dynamique selon un nom donné par le/la user
// function inputRefresh() {
//   input.addEventListener("keydown", async (event) => {
//     if (event.key === "Enter" && event.target.value !== "") {
//       //decouper en fonction qu'on appel ici

//       const response = await fetchTwitch(event.target.value);
//       console.log(response.followers_total);

//       if (pInfo1Streameuse.firstChild) {
//         nameStreameuse.innerText = "Maghla :";
//         pInfo1Streameuse.firstChild.innerText = `${response.followers_total}`;
//         addAnimationFollowers(pInfo1Streameuse);
//       } else {
//         nameStreameuse.innerText = "Maghla :";
//         pInfo1Streameuse.innerText = `${response.followers_total}`;
//         addAnimationFollowers(pInfo1Streameuse);
//       }

//       if (dataInfo2.firstChild) {
//         dataInfo2.firstChild.innerText = response.hours_watched;
//         console.log(dataInfo2);
//       } else {
//         const searchHours = document.createElement("p");
//         searchHours.innerText = response.hours_watched;
//         dataInfo2.appendChild(searchHours);
//       }

//       if (dataInfo3.firstChild) {
//         dataInfo3.firstChild.innerText = response.rank;
//         console.log(dataInfo3);
//       } else {
//         const searchRank = document.createElement("p");
//         searchRank.innerText = response.rank;
//         dataInfo3.appendChild(searchRank);
//       }
//       if (firstSearch) {
//         /*etoilesContent()
//                 anyme023Content()
//                 squeezieContent()*/
//         addTitles();

//         contentInfo1(nameEtoiles, pInfo1Etoiles, "etoiles");
//         contentInfo1(nameAnyme, pInfo1Anyme, "anyme023");
//         contentInfo1(nameSqueezie, pInfo1Squeezie, "squeezie");

//         firstSearch = false;
//       }

//       event.target.value = "";
//     }
//   });
// }

// //inputRefresh()

// //Application de notre 1ere animation sur un block de données (FOLLOWERS)
// function addAnimationFollowers(child) {
//   let number = parseInt(child.innerText);

//   animate(0, number, {
//     duration: 2,
//     ease: "circOut",
//     onUpdate: (latest) => (child.innerHTML = Math.round(latest)),
//   });
// }

// //Appel de l'API pour notre input
// async function fetchTwitch(searchStreameuse) {
//   const response = await fetch(
//     `https://twitchtracker.com/api/channels/summary/${searchStreameuse}`
//   );
//   const streaumeuse = await response.json();
//   return streaumeuse;
// }

// //Ajout de titre au dessus de nos données dans chaque block ("block")
// function addTitles() {
//   if (document.getElementById("title1") !== "") {
//     const titleFollowers = document.getElementById("title1");
//     titleFollowers.innerText = "Followers";
//     titleFollowers.classList.add("title");
//     divInfo1.prepend(titleFollowers);
//   }
//   if (document.getElementById("title2") !== "") {
//     const titleHoursWatched = document.getElementById("title2");
//     titleHoursWatched.innerText = "Heures streamées regardées :";
//     titleHoursWatched.classList.add("title");
//     divInfo2.prepend(titleHoursWatched);
//   }
//   if (document.getElementById("title3") !== "") {
//     const titleRank = document.getElementById("title3");
//     titleRank.innerText = "Rank Mondial :";
//     titleRank.classList.add("title");
//     divInfo3.prepend(titleRank);
//   }
// }

// //Appel du 1er streameur via notre api (toujours le meme ici)
// async function etoilesContent() {
//   const response = await fetch(
//     `https://twitchtracker.com/api/channels/summary/etoiles`
//   );
//   const data = await response.json();

//   etoiles.innerText = "Etoiles :";
//   pInfo1Etoiles.innerText = `${data.followers_total}`;
//   addAnimationFollowers(pInfo1Etoiles);

//   const pEtoilesHours = document.createElement("p");
//   pEtoilesHours.innerText = ` ${data.hours_watched}`;
//   dataInfo2.appendChild(pEtoilesHours);
//   pEtoilesHours.classList.add("etoilesHours");

//   const pEtoilesRank = document.createElement("p");
//   pEtoilesRank.innerText = ` ${data.rank}`;
//   dataInfo3.appendChild(pEtoilesRank);
//   pEtoilesRank.classList.add("etoilesRank");
// }

// async function contentInfo1(nameElement, pElement, streamerName) {
//   const response = await fetch(
//     `https://twitchtracker.com/api/channels/summary/${streamerName}`
//   );
//   const data = await response.json();

//   nameElement.innerText = streamerName;
//   pElement.innerHTML = `${data.followers_total}`;
// }

// // Appels pour chaque streamer

// //Appel du 2eme streameur via notre api (toujours le meme ici)
// async function anyme023Content() {
//   const response = await fetch(
//     `https://twitchtracker.com/api/channels/summary/anyme023`
//   );
//   const data = await response.json();

//   anyme.innerText = "Anyme :";
//   pInfo1Anyme.innerText = `${data.followers_total}`;
//   addAnimationFollowers(pInfo1Anyme);

//   const pAnymeHours = document.createElement("p");
//   pAnymeHours.innerText = data.hours_watched;
//   dataInfo2.appendChild(pAnymeHours);
//   pAnymeHours.classList.add("anymeHours");

//   const pAnymeRank = document.createElement("p");
//   pAnymeRank.innerText = data.rank;
//   dataInfo3.appendChild(pAnymeRank);
//   pAnymeRank.classList.add("anymeRank");
// }

// //Appel du 3eme streameur via notre api (toujours le meme ici)
// async function squeezieContent() {
//   const response = await fetch(
//     `https://twitchtracker.com/api/channels/summary/squeezie`
//   );
//   const data = await response.json();

//   squeezie.innerText = "Squeezie :";
//   pInfo1Squeezie.innerText = `${data.followers_total}`;
//   addAnimationFollowers(pInfo1Squeezie);

//   const pSqueezieHours = document.createElement("p");
//   pSqueezieHours.innerText = data.hours_watched;
//   dataInfo2.appendChild(pSqueezieHours);
//   pSqueezieHours.classList.add("squeezieHours");

//   const pSqueezieRank = document.createElement("p");
//   pSqueezieRank.innerText = data.rank;
//   dataInfo3.appendChild(pSqueezieRank);
//   pSqueezieRank.classList.add("squeezieRank");
// }

// //Ajout d'un evenement sur notre btn reset, il vas nous permettre de vider toute nos data
// // et titre pour repartir sur un page "neuve"
// function resetBtn() {
//   btnReset.addEventListener("click", () => {
//     nameStreameuse.innerText = "";
//     pInfo1Streameuse.innerText = "";
//     etoiles.innerText = "";
//     pInfo1Etoiles.innerText = "";
//     anyme.innerText = "";
//     pInfo1Anyme.innerText = "";
//     squeezie.innerText = "";
//     pInfo1Squeezie.innerText = "";

//     dataInfo2.innerText = "";
//     dataInfo3.innerText = "";
//     titleFollowers.innerText = "";
//     titleHoursWatched.innerText = "";
//     titleRank.innerText = "";

//     firstSearch = true;
//     inputRefresh();
//   });
// }

// resetBtn();
