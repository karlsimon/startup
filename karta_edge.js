/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'karta',
                type: 'image',
                rect: ['520px', '35px','474px','467px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"karta.svg",'0px','0px'],
                transform: [[],[],[],['2.6','2.6']]
            },
            {
                id: 'Pasted5',
                type: 'image',
                rect: ['365px', '211px','838px','862px','auto', 'auto'],
                opacity: 0.28962953629032,
                fill: ["rgba(0,0,0,0)",im+"Pasted5.svg",'0px','0px'],
                filter: [0, 0, 1, 0.6, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(12,12,12,1.00)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1330px'],
                ["style", "width", '1500px']
            ],
            "${_Pasted5}": [
                ["style", "top", '211px'],
                ["style", "width", '838px'],
                ["style", "height", '862px'],
                ["style", "opacity", '0.300000'],
                ["style", "left", '365px'],
                ["subproperty", "filter.saturate", '0.6']
            ],
            "${_karta}": [
                ["style", "top", '421px'],
                ["transform", "scaleY", '2.6'],
                ["transform", "scaleX", '2.6'],
                ["style", "opacity", '1'],
                ["style", "left", '520px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            labels: {
                "loop": 500
            },
            timeline: [
                { id: "eid28", tween: [ "style", "${_karta}", "top", '40px', { fromValue: '421px'}], position: 3250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_karta}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Pasted5}", "opacity", '1', { fromValue: '0.300000'}], position: 500, duration: 1250 },
                { id: "eid68", tween: [ "style", "${_Pasted5}", "opacity", '0.3', { fromValue: '1'}], position: 1750, duration: 1462 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-21272681");
