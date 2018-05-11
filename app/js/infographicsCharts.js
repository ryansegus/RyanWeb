/* GLOBALS CHART CONFIGURATION
   ----------------------------- */

// import * as Chart from "chart";

Chart.defaults.global.layout.padding = 0;
Chart.defaults.global.legend.position = 'bottom';

/* ARCS CHART CONFIGURATION
   ----------------------------- */
Chart.defaults.global.elements.arc.backgroundColor = 'rgb(29, 29, 29)';
Chart.defaults.global.elements.arc.hoverBorderColor = 'rgb(255, 255, 255)';

/* DOUGHNUT CHART CONFIGURATION
   ----------------------------- */
Chart.defaults.doughnut.cutoutPercentage = 60;
Chart.defaults.global.tooltips.bodyfontFamily = 'Encode Sans Condensed';

ChartsObj = {
    langObj: {
        bgColor: ["#8dc63f", "#1d1d1d"],
        language: [
            {
                labelIt: "Spagnolo",
                shortName: "Es",
                value: 90
            },
            {
                labelIt: "Inglese",
                shortName: "En",
                value: 80
            },
            {
                labelIt: "Italiano",
                shortName: "It",
                value: 60
            }
        ]
    },
    softwaresObj: [
        {
            labelIt: "Mac",
            shortName: "Mac",
            value: 100,
            bgColor: "#a2a2a2",
            icon: "apple",
            iconSVG: MY_OBJECT.SVGICONS.MAC
        },
        {
            labelIt: "Windows",
            shortName: "Win",
            value: 100,
            bgColor: "#b4009e",
            icon: "windows",
            iconSVG: MY_OBJECT.SVGICONS.WINDOWS
        },
        {
            labelIt: "Brackets",
            shortName: "Br",
            value: 95,
            bgColor: "#28aae1",
            icon: "brackets",
            iconSVG: MY_OBJECT.SVGICONS.BRACKETS
        },
        {
            labelIt: "PhotoShop",
            shortName: "Ps",
            value: 95,
            bgColor: "#00a4e4",
            icon: "photoshop",
            iconSVG: MY_OBJECT.SVGICONS.PHOTOSHOP
        },
        {
            labelIt: "Illustrator",
            shortName: "Ai",
            value: 95,
            bgColor: "#ff8018",
            icon: "illustrator",
            iconSVG: MY_OBJECT.SVGICONS.ILLUSTRATOR
        },
        {
            labelIt: "HTML",
            shortName: "HTML",
            value: 90,
            bgColor: "#F16529",
            icon: "html",
            iconSVG: MY_OBJECT.SVGICONS.HTML
        },
        {
            labelIt: "Sass",
            shortName: "scss",
            value: 90,
            bgColor: "#c69",
            icon: "sass",
            iconSVG: MY_OBJECT.SVGICONS.SASS
        },
        {
            labelIt: "CSS",
            shortName: "css",
            value: 85,
            bgColor: "#005387",
            icon: "css",
            iconSVG: MY_OBJECT.SVGICONS.CSS
        },
        {
            labelIt: "PHP",
            shortName: "php",
            value: 80,
            bgColor: "#6481B9",
            icon: "php",
            iconSVG: MY_OBJECT.SVGICONS.PHP
        },
        {
            labelIt: "JQuery",
            shortName: "JQuery",
            value: 75,
            bgColor: "#0769AD",
            icon: "jquery",
            iconSVG: MY_OBJECT.SVGICONS.JQUERY
        },
        {
            labelIt: "InDesign",
            shortName: "In",
            value: 70,
            bgColor: "#ff4289",
            icon: "indesign",
            iconSVG: MY_OBJECT.SVGICONS.INDESIGN
        },
        {
            labelIt: "PostgreSQL",
            shortName: "PostgreSQL",
            value: 65,
            bgColor: "#008BB9",
            icon: "postgresql",
            iconSVG: MY_OBJECT.SVGICONS.POSTGRESQL
        },
        {
            labelIt: "MySQL",
            shortName: "MySQL",
            value: 65,
            bgColor: "#00759f",
            icon: "mysql",
            iconSVG: MY_OBJECT.SVGICONS.MYSQL
        },
        {
            labelIt: "JavaScript",
            shortName: "JS",
            value: 45,
            bgColor: "#E9B231",
            icon: "javascript",
            iconSVG: MY_OBJECT.SVGICONS.JAVASCRIPT
        }
    ],
    bindAll: function(){
        // noinspection Annotator
        ChartsObj.createLanguageCharts(ChartsObj.langObj.language);
        ChartsObj.createSoftwaresCharts(ChartsObj.softwaresObj);
    },
    createLanguageCharts: function (Obj) {
        let objArr = [];
        let objArrLength = Object.keys(Obj).length;

        for (let i = 0; i < objArrLength; i++) {
            objArr.push({
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            data: [Obj[i].value, 100 - Obj[i].value],
                            backgroundColor: ChartsObj.langObj.bgColor,
                            hoverBorderColor: ChartsObj.langObj.bgColor
                        }
                    ],
                    labels: [Obj[i].shortName, MY_OBJECT.WORDS.LEARNING]
                },
                options: {
                    legend: {
                        display: false,
                    },
                    legendCallback: function (labels) {
                        let text = [];

                        if (labels) {
                            text.push(labels[0]);
                        }

                        return text;

                    },
                    tooltips: {
                        enabled: true,
                        bodyfontFamily: 'Encode Sans Condensed',
                        callbacks: {
                            label: function (tooltipItems, data) {
                                let label = [],
                                    l = data.datasets.length;
                                for (let i = 0; i < l; i += 1) {
                                    label[i] = data.datasets[i].data[tooltipItems.index] + '%';
                                }
                                return label;
                            }
                        }
                    },
                    responsive: true,
                }
            });
        }

        /* CREATE DIVS & CANVAS WITH OBJ */
        let ctx = [];
        let Container = getElementById("languages");

        for (let i = 0; i < objArrLength; i++) {
            let divCol = document.createElement("div");
            divCol.setAttribute("class", "chartHolder");
            let canvasContainer = document.createElement("div");
            let legendContainer = document.createElement("div");
            legendContainer.setAttribute("class", "langLegend");
            legendContainer.textContent = Obj[i].shortName;
            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "langChart" + Obj[i].shortName);
            canvas.setAttribute("width", '100');
            canvas.setAttribute("height", '100');

            Container.appendChild(divCol);

            divCol.appendChild(canvasContainer);
            divCol.appendChild(legendContainer);
            canvasContainer.appendChild(canvas);
        }

        /* DRAW LANGUAGE CHARTS & LEGENDS WITH OBJ */
        let newObjArrLength = Object.keys(objArr).length;
        for (let i = 0; i < newObjArrLength; i++) {

            let shortName = Obj[i].shortName;
            let holderName = "langChart" + shortName;

            // legend = document.getElementById("legend" + shortName);

            ctx = document.getElementById(holderName).getContext("2d");

            shortName = new Chart(ctx, objArr[i]);
            // legend.innerHTML = shortName.generateLegend();

        }
    },
    createSoftwaresCharts: function (Obj) {

        let softwaresObj = [];
        let softwaresObjLength = Object.keys(Obj).length;

        for (let i = 0; i < softwaresObjLength; i++) {
            softwaresObj.push({
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            data: [Obj[i].value, 100 - Obj[i].value],
                            backgroundColor: [Obj[i].bgColor, "#FFFFFF"],
                            hoverBorderColor: ["#FFFFFF", "#FFFFFF"],

                            borderWidth: 2,
                            hoverBorderWidth: 2

                        }
                    ],
                    labels: [Obj[i].labelIt, MY_OBJECT.WORDS.LEARNING]
                },
                options: {
                    legend: {
                        display: false
                    },
                    legendCallback: function (labels) {
                        let text = [];

                        if (labels) {
                            text.push(labels[0]);
                        }

                        return text;

                    },
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            label: function (tooltipItems, data) {
                                let label = [],
                                    l = data.datasets.length;
                                for (let i = 0; i < l; i += 1) {
                                    label[i] = data.datasets[i].data[tooltipItems.index] + '%';
                                }
                                return label;
                            }
                        }
                    },
                    responsive: true,
                    cutoutPercentage: 75
                }
            });
        }

        /* CREATE SOFTWARES DIVS & CANVAS WITH OBJ softwaresObj */
        let ctx = [];
        let whatiuse = getElementById("whatiuse");

        for (let i = 0; i < softwaresObjLength; i++) {
            // let icon = softwares[i].icon;
            let divCol = document.createElement("div");
            divCol.setAttribute("class", "chartHolder")
            let canvasContainer = document.createElement("div");

            // CREATE IMG WITH ICON SVG
            /*img = document.createElement("img");
            img.setAttribute("class", "langLegend");
            img.setAttribute("src", "img/icon/" + icon + ".svg"); //softwares[i].icon);
            img.setAttribute("alt", icon);*/

            // CREATE ICON SVG INLINE
            let svg = document.createElement("div");
            svg.setAttribute("class", "langLegend");
            svg.style.backgroundColor = softwares[i].bgColor;
            svg.innerHTML = softwares[i].iconSVG;

            let canvas = document.createElement("canvas");
            canvas.setAttribute("id", "softwareChart" + softwares[i].shortName);
            canvas.setAttribute("width", '100');
            canvas.setAttribute("height", '100');

            whatiuse.appendChild(divCol);

            divCol.appendChild(canvasContainer);
            divCol.appendChild(svg);
            canvasContainer.appendChild(canvas);
        }
        //    console.log(softwaresObj)

        /* DRAW CHARTS & LEGENDS WITH OBJ */
        newObjArrLength = Object.keys(softwaresObj).length;
        for (let i = 0; i < newObjArrLength; i++) {

            shortName = softwares[i].shortName;
            holderName = "softwareChart" + shortName;

            ctx = document.getElementById(holderName).getContext("2d");

            shortName = new Chart(ctx, softwaresObj[i]);
            //        legend.innerHTML = shortName.generateLegend();

        }
    }
};

    /* WHEN DOCUMENT RDY
       ----------------------------- */
window.addEventListener("load", function () {
    ChartsObj.bindAll();
});