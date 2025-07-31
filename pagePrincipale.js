import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";
import { initChart, addStreamerToChart } from "./animation.js";
export { addTextAccueil };

const btnReset = document.getElementById("btnReset");
const input = document.getElementById("input");
let firstSearch = true;

function addTextAccueil() {
  const textAcceuil = document.getElementById("textAcceuil");
  textAcceuil.innerHTML =
`Tu t'es déjà demandé quelle place occupent les <span class="highlight">femmes</span> sur <span class="highlight">Twitch</span> ? Spoiler : elles sont là, elles déchirent, mais on ne les voit pas assez. 
    Ici, tu peux comparer les données de streameuses à celles des plus gros streameur·euses francophones — pour mettre en lumière leur taf et leur impact. 
    Besoin d'inspi ? Va jeter un œil à 
    <span class="highlight">Maghla</span>, 
    <span class="highlight">Deujna</span>, 
    <span class="highlight">Jeeltv</span>, 
    <span class="highlight">LittleBigWhale</span>, 
    <span class="highlight">Gom4rt</span>, 
    <span class="highlight">SerialSapphic</span>, 
    <span class="highlight">Clara__cmoi</span>, 
    <span class="highlight">Helydia</span>… et bien d'autres ! 🎮 
    Parce que le stream mérite aussi plus d'égalité. Et plus de <span class="highlight">femmes</span> visibles à l'écran.`;}

//Notre input keydown qui appel notre api en dynamique selon un nom donné par le/la user
input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && event.target.value !== "") {
    const response = await fetchTwitch(event.target.value);
    const profileImageUrl = await fetchTwitchProfileImage(event.target.value);
const imgProfile = document.getElementById("profileImage");
if (imgProfile) {
  imgProfile.src = profileImageUrl;
  imgProfile.style.visibility = "visible";
   imgProfile.style.opacity = "1"; 
}

    initChart();
    await addStreamerToChart(event.target.value, response);
     const blocks = [
       document.getElementById("divInfo1"),
       document.getElementById("divInfo2"),
       document.getElementById("divInfo3"),
     
     ];
     blocks.forEach((block, index) => {
      setTimeout(() => {
         block.classList.add("animate");
       }, index * 1500);
     
     });

    const nameStreameuse = document.getElementById("nameStreameuse");
    const pInfo1Streameuse = document.getElementById("pInfo1Streameuse");
    const nameStreameuse3 = document.getElementById("nameStreameuse3");
    const pInfo1Streameuse3 = document.getElementById("pInfo1Streameuse3");

    if (pInfo1Streameuse) {
      nameStreameuse.innerText = event.target.value;
      pInfo1Streameuse.innerText = `${response.followers_total}`;
      addAnimationFollowers(pInfo1Streameuse);
    } else {
      nameStreameuse.innerText = event.target.value;
      pInfo1Streameuse.innerText = `${response.followers_total}`;
      addAnimationFollowers(pInfo1Streameuse);
    }

    if (pInfo1Streameuse3) {
      nameStreameuse3.innerText = event.target.value;
      pInfo1Streameuse3.innerText = `${response.rank}`;
    } else {
      nameStreameuse3.innerText = event.target.value;
      pInfo1Streameuse3.innerText = `${response.rank}`;
    }

    if (firstSearch) {
      addTitles();
      addStats();
      const pTextAcceuil = document.getElementById('textAcceuil')
      pTextAcceuil.style.visibility = "hidden"
      const nameEtoiles = "etoiles";
      const nameAnyme = "anyme023";
      const nameSqueezie = "squeezie";

      const etoiles = document.getElementById("etoiles");
      const pInfo1Etoiles = document.getElementById("pInfo1Etoiles");
      const anyme = document.getElementById("anyme");
      const pInfo1Anyme = document.getElementById("pInfo1Anyme");
      const squeezie = document.getElementById("squeezie");
      const pInfo1Squeezie = document.getElementById("pInfo1Squeezie");

      const etoiles3 = document.getElementById("etoiles3");
      const pInfo1Etoiles3 = document.getElementById("pInfo1Etoiles3");
      const anyme3 = document.getElementById("anyme3");
      const pInfo1Anyme3 = document.getElementById("pInfo1Anyme3");
      const squeezie3 = document.getElementById("squeezie3");
      const pInfo1Squeezie3 = document.getElementById("pInfo1Squeezie3");

      let mavar = await contentInfo(
        etoiles,
        pInfo1Etoiles,
        nameEtoiles,
        etoiles3,
        pInfo1Etoiles3
      );
      let mavaar = await contentInfo(
        anyme,
        pInfo1Anyme,
        nameAnyme,
        anyme3,
        pInfo1Anyme3
      );
      let mavaaar = await contentInfo(
        squeezie,
        pInfo1Squeezie,
        nameSqueezie,
        squeezie3,
        pInfo1Squeezie3
      );

      addStreamerToChart("Etoiles", mavar);
      addStreamerToChart("Squeezie", mavaaar);
      addStreamerToChart("Anyme023", mavaar);

      firstSearch = false;
    }

    event.target.value = "";
  }
});
// }

//Application de notre 1ere animation sur un block de données (FOLLOWERS)
function addAnimationFollowers(child) {
  let number = parseInt(child.innerText);

  animate(0, number, {
    duration: 6,
    ease: "circOut",
    onUpdate: (latest) => (child.innerHTML = Math.round(latest)),
  });
}

function addTitles() {
  const section1 = {
    id: "divInfo1",
    titleId: "title1",
    description: "Followers",
  };
  const section2 = {
    id: "divInfo2",
    titleId: "title2",
    description: "Heures streamées regardées :",
  };
  const section3 = {
    id: "divInfo3",
    titleId: "title3",
    description: "Rank mondial :",
  };

  const sections = [section1, section2, section3];

  for (let section of sections) {
    const divInfo = document.getElementById(section.id);
    const divTitle = document.getElementById(section.titleId);
    divTitle.innerText = section.description;
    divTitle.classList.add("title");
    divInfo.prepend(divTitle);
  }
}

function addStats() {
  const section1 = {
    statsId: "articleFollowers",
    description:
      `Une étude mentionnée par <strong>StreamScheme</strong> indique que, parmi les <span class="highlight">2 500</span> meilleurs streamers, les hommes ont en moyenne <span class="highlight">20</span> viewers supplémentaires sur 60 jours, alors que les femmes en gagnent seulement <span class="highlight">2</span>. Cela représente donc une croissance <span class="highlight">10 fois</span> plus rapide pour les hommes vs les femmes sur cette métrique.`,
  };
  const section2 = {
    statsId: "articleHeureStream",
    description:
      `Selon <strong>Stream Hatchet</strong>, en août 2017, seulement <span class="highlight">3,2%</span> des heures vues dans le top 500 des chaînes Twitch étaient générées par des créatrices femmes.`,
  };
  const section3 = {
    statsId: "articleRank",
    description:
      `Selon <strong>Dexerto</strong> et <strong>Stream Hatchet</strong>, <span class="highlight">99 des 100</span> streamers les plus regardés sur Twitch, YouTube, Facebook Gaming étaient des hommes. Il n'y avait qu'une seule femme dans ces 100 streamers, <span class="highlight">Amouranth</span>, classée <span class="highlight">56ᵉ</span>. 🎯 Cela signifie que seulement <span class="highlight">1%</span> des top 100 streamers étaient des femmes.`,
  };

  const sections = [section1, section2, section3];

  for (let section of sections) {
    const statsId = document.getElementById(section.statsId);
    statsId.innerHTML = section.description;
    statsId.classList.add("stats");
  }
}

//Appel de l'API pour notre input
async function fetchTwitch(searchStreameuse) {
  const response = await fetch(
    `https://twitchtracker.com/api/channels/summary/${searchStreameuse}`
  );
  const streaumeuse = await response.json();
  return streaumeuse;
}

async function contentInfo(
  nameElement,
  pElement,
  streamerName,
  nameElement3,
  pElement3
) {
  const response = await fetch(
    `https://twitchtracker.com/api/channels/summary/${streamerName}`
  );
  const data = await response.json();

  nameElement.innerText = streamerName;
  pElement.innerHTML = `${data.followers_total}`;
  addAnimationFollowers(pElement);

  nameElement3.innerText = streamerName;
  pElement3.innerText = `${data.rank}`;

  return data;
}

async function fetchTwitchProfileImage(username) {
  const clientId = "ngp43pbq35tc45t46v974xa9x0ij0z";
  const token = "howe2jz6qvm4jkwws3begqi8sow67n";

  const response = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
    headers: {
      "Client-ID": clientId,
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await response.json();

  return data.data[0].profile_image_url;
}
//Ajout d'un evenement sur notre btn reset, il vas nous permettre de vider toute nos data
// et titre pour repartir sur un page "neuve"
// function resetBtn() {
btnReset.addEventListener("click", () => {
  resetDivInfos1();
  resetDivInfos2();
  resetDivInfos3();
 
  const imgProfile = document.getElementById("profileImage");
if (imgProfile) {
  imgProfile.style.opacity = "0";
  imgProfile.style.visibility = "hidden";
}

  firstSearch = true;
  const div1 = document.getElementById("divInfo1");
const div2 = document.getElementById("divInfo2");
const div3 = document.getElementById("divInfo3");
    div1.classList.remove('animate');
  div2.classList.remove('animate');
  div3.classList.remove('animate');
  
});

// Créer le listener une fois
// faire une fonction pour reset sans recréer le listener

function resetDivInfos1() {
  divInfo1.innerHTML = "";

  divInfo1.innerHTML = `
    <div id="title1"></div>
    <div id="dataInfo1">
      <p id="nameStreameuse" class="name"></p>
      <p id="pInfo1Streameuse" class="pInfo1"></p>
      <p id="etoiles" class="name"></p>
      <p id="pInfo1Etoiles" class="pInfo1"></p>
      <p id="anyme" class="name"></p>
      <p id="pInfo1Anyme" class="pInfo1"></p>
      <p id="squeezie" class="name"></p>
      <p id="pInfo1Squeezie" class="pInfo1"></p>
      <p id="articleFollowers"></p>
    </div>
  `;
}
function resetDivInfos2() {
  divInfo2.innerHTML = "";

  divInfo2.innerHTML = `
    <div id="title2"></div>
    <p id="articleHeureStream"></p>
    <figure class="highcharts-figure">
      <div id="container">
        <div id="dataInfo2">
          <p id="nameStreameuse2" class="name"></p>
          <p id="pInfo1Streameuse2" class="pInfo1"></p>
          <p id="etoiles2" class="name"></p>
          <p id="pInfo1Etoiles2" class="pInfo1"></p>
          <p id="anyme2" class="name"></p>
          <p id="pInfo1Anyme2" class="pInfo1"></p>
          <p id="squeezie2" class="name"></p>
          <p id="pInfo1Squeezie2" class="pInfo1"></p>
        </div>
      </div>
    </figure>
  `;
}

function resetDivInfos3() {
  divInfo3.innerHTML = "";

  divInfo3.innerHTML = `
    <div id="title3"></div>
    <div id="dataInfo3">
      <p id="nameStreameuse3" class="name"></p>
      <p id="pInfo1Streameuse3" class="pInfo1"></p>
      <p id="etoiles3" class="name"></p>
      <p id="pInfo1Etoiles3" class="pInfo1"></p>
      <p id="anyme3" class="name"></p>
      <p id="pInfo1Anyme3" class="pInfo1"></p>
      <p id="squeezie3" class="name"></p>
      <p id="pInfo1Squeezie3" class="pInfo1"></p>
      <p id="articleRank"></p>

    </div>
  `;
}
