export { initChart, addStreamerToChart, hideannimation2, visibilityAnnimation2 }

function hideannimation2() {

    const divInfo2 = document.getElementById('divInfo2')

    divInfo2.style.display = 'none'
}


function visibilityAnnimation2() {

    const divInfo2 = document.getElementById('divInfo2')

    divInfo2.style.display = 'flex'
}


let seriesData = [
]

let chart

function initChart() {
    chart = Highcharts.chart('container', {
        chart: {
           backgroundColor: "#14141400",
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Heures<br>regardées',
            align: 'center',
            verticalAlign: 'middle',
            y: 60,
            style: {
                fontSize: '1.1em'
            }
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.y}</b> heures<br>{point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Heures regardées',
            innerSize: '50%',
            data: seriesData
        }]
    });
}

const fixedStreamers = ['Etoiles', 'Anyme023', 'Squeezie'];
const fixedData = []; // contiendra les données fixes une fois au démarrage
let customData = null; // contiendra les données de la streameuse personnalisée

async function addStreamerToChart(streamerName, params) {
    const hours = params.hours_watched;

    // Si c'est un nom fixe (Etoiles, Anyme, Squeezie), on l'ajoute aux données fixes
    if (fixedStreamers.includes(streamerName)) {
        const index = fixedData.findIndex(item => item[0] === streamerName);
        if (index !== -1) {
            fixedData[index][1] = hours;
        } else {
            fixedData.push([streamerName, hours]);
        }
    } else {
        // Sinon, on considère que c'est une streameuse personnalisée → on remplace
        customData = [streamerName, hours];
    }

    // Construit la série complète à chaque fois : données fixes + la donnée custom (s’il y en a une)
    const newSeriesData = [...fixedData];
    if (customData) {
        newSeriesData.push(customData);
    }

    chart.series[0].setData(newSeriesData, true);
}












