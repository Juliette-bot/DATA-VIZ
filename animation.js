export {
  initChart,
  addStreamerToChart,
  hideannimation2,
  visibilityAnnimation2,
};

function hideannimation2() {
  const divInfo2 = document.getElementById("divInfo2");

  divInfo2.style.display = "none";
}

function visibilityAnnimation2() {
  const divInfo2 = document.getElementById("divInfo2");

  divInfo2.style.display = "flex";
}

let seriesData = [];

let chart;

function initChart() {
  chart = Highcharts.chart("container", {
    chart: {
      backgroundColor: "#14141400",
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      marginTop: -450,
      spacingTop: -500,
      spacingLeft: 20,
    },
    title: {
      text: "",
      align: "center",
      verticalAlign: "middle",
      y: 60,
      style: {
        fontSize: "1.1em",
      },
    },
    tooltip: {
      pointFormat:
        "{point.name}: <b>{point.y}</b> heures<br>{point.percentage:.1f}%",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Heures regardées",
        innerSize: "50%",
        data: seriesData,
      },
    ],
  });
}

const fixedStreamers = ["Etoiles", "Anyme023", "Squeezie"];
const fixedData = []; 
let customData = null; 

async function addStreamerToChart(streamerName, params) {
  const hours = params.hours_watched;

 
  if (fixedStreamers.includes(streamerName)) {
    const index = fixedData.findIndex((item) => item[0] === streamerName);
    if (index !== -1) {
      fixedData[index][1] = hours;
    } else {
      fixedData.push([streamerName, hours]);
    }
  } else {
    
    customData = [streamerName, hours];
  }

  const newSeriesData = [...fixedData];
  if (customData) {
    newSeriesData.push(customData);
  }

  chart.series[0].setData(newSeriesData, true);
}
