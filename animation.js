export { initChart, addStreamerToChart, hideannimation2, visibilityAnnimation2 }
import { resetBtn } from "./pagePrincipale.js";
const anymeInfo2 = document.getElementById('pInfo1Anyme2');
const squeezieInfo2 = document.getElementById('pInfo1Squeezie2');
const etoilesInfo2 = document.getElementById('pInfo1Etoiles2');
const info2Streameuse = document.getElementById('pInfo1Streameuse2');
function hideannimation2() {

    const divInfo2 = document.getElementById('divInfo2')

    divInfo2.style.display = 'none'
}


function visibilityAnnimation2() {

    const divInfo2 = document.getElementById('divInfo2')

    divInfo2.style.display = 'flex'
}


let seriesData = [
    //[anymeInfo2.dataset.name, parseInt(anymeInfo2.dataset.hours_watched)],
   //[squeezieInfo2.dataset.name, parseInt(squeezieInfo2.dataset.hours_watched)],
   // [etoilesInfo2.dataset.name, parseInt(etoilesInfo2.dataset.hours_watched)],
   // [info2Streameuse.dataset.name, parseInt(info2Streameuse.dataset.hours_watched)]
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

async function addStreamerToChart(streamerName, params) {

    //const response = await fetch(`https://twitchtracker.com/api/channels/summary/${streamerName}`);
    //const data = await response.json();
    
    const hours = params.hours_watched;
    seriesData.push([streamerName, hours]);
    chart.series[0].setData(seriesData, true);
console.log(chart.series)


}










