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
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Pasted',
                type: 'image',
                rect: ['-252px', '-206px','1083px','1031px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px'],
                transform: [[],[],[],['0.48635','0.48635']]
            },
            {
                id: 'dia2',
                type: 'rect',
                rect: ['421', '1630','auto','auto','auto', 'auto']
            },
            {
                id: 'dia3',
                type: 'rect',
                rect: ['591', '1630','auto','auto','auto', 'auto']
            },
            {
                id: 'dia4',
                type: 'rect',
                rect: ['762', '1630','auto','auto','auto', 'auto']
            },
            {
                id: 'dia5',
                type: 'rect',
                rect: ['927', '1630','auto','auto','auto', 'auto']
            },
            {
                id: 'dia6',
                type: 'rect',
                rect: ['1099', '1631','auto','auto','auto', 'auto']
            },
            {
                id: 'dia7',
                type: 'rect',
                rect: ['1267', '1631','auto','auto','auto', 'auto']
            },
            {
                id: 'dia8',
                type: 'rect',
                rect: ['1437', '1631','auto','auto','auto', 'auto']
            },
            {
                id: 'dia9',
                type: 'rect',
                rect: ['1608', '1631','auto','auto','auto', 'auto']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['33px', '34px','auto','auto','auto', 'auto'],
                text: "Quantity",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(246,246,246,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['565px', '527px','auto','auto','auto', 'auto'],
                text: "Year",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(223,223,223,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'dia3',
                symbolName: 'dia3',
                autoPlay: {

                }
            },
            {
                id: 'dia8',
                symbolName: 'dia8',
                autoPlay: {

                }
            },
            {
                id: 'dia7',
                symbolName: 'dia7',
                autoPlay: {

                }
            },
            {
                id: 'dia2',
                symbolName: 'dia2',
                autoPlay: {

                }
            },
            {
                id: 'dia9',
                symbolName: 'dia9',
                autoPlay: {

                }
            },
            {
                id: 'dia6',
                symbolName: 'dia6',
                autoPlay: {

                }
            },
            {
                id: 'dia5',
                symbolName: 'dia5',
                autoPlay: {

                }
            },
            {
                id: 'dia4',
                symbolName: 'dia4',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_dia3}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '81px']
            ],
            "${_Text3}": [
                ["style", "top", '527px'],
                ["style", "left", '565px'],
                ["color", "color", 'rgba(223,223,223,1.00)']
            ],
            "${_dia4}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '142px']
            ],
            "${_dia9}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '446px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(246,246,246,1.00)'],
                ["style", "top", '34px'],
                ["style", "left", '33px'],
                ["style", "font-size", '12px']
            ],
            "${_dia2}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '20px']
            ],
            "${_dia5}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '203px']
            ],
            "${_Pasted}": [
                ["style", "top", '-206px'],
                ["style", "height", '1031px'],
                ["transform", "scaleY", '0.48635'],
                ["transform", "scaleX", '0.48635'],
                ["style", "left", '-252px'],
                ["style", "width", '1083px']
            ],
            "${_dia7}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '324px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(12,12,12,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '620px'],
                ["style", "width", '620px']
            ],
            "${_dia6}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '263px']
            ],
            "${_dia8}": [
                ["style", "top", '501px'],
                ["transform", "scaleY", '0.35389'],
                ["transform", "scaleX", '0.35389'],
                ["style", "left", '385px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1595,
            autoPlay: true,
            timeline: [
                { id: "eid118", tween: [ "transform", "${_dia2}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_dia6}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_dia9}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "transform", "${_dia8}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "transform", "${_dia2}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "transform", "${_dia4}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "transform", "${_dia9}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "transform", "${_dia5}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "transform", "${_dia7}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "transform", "${_dia3}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "transform", "${_dia4}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "transform", "${_dia3}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "transform", "${_dia5}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_dia7}", "left", '324px', { fromValue: '324px'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_dia5}", "left", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_dia8}", "left", '385px', { fromValue: '385px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_dia8}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_dia6}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
                { id: "eid121", tween: [ "transform", "${_dia6}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_dia7}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_dia4}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_dia9}", "left", '446px', { fromValue: '446px'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "transform", "${_dia8}", "scaleY", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "transform", "${_dia6}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_dia4}", "left", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_dia3}", "left", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_dia2}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "transform", "${_dia9}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "transform", "${_dia7}", "scaleX", '0.35389', { fromValue: '0.35389'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_dia2}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_dia3}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_dia5}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0 }            ]
        }
    }
},
"dia1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '149px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "go1": 1000,
                "stop": 1500
            },
            timeline: [
            ]
        }
    }
},
"dia2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "height", '39px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "button": 0,
                "go": 1000
            },
            timeline: [
                { id: "eid10", tween: [ "style", "${_Rectangle2}", "height", '699px', { fromValue: '39px'}], position: 1000, duration: 500 },
                { id: "eid11", tween: [ "style", "${_Rectangle2}", "top", '-660px', { fromValue: '0px'}], position: 1000, duration: 500 }            ]
        }
    }
},
"dia3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ],
            "${_Rectangle3}": [
                ["style", "height", '39px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "button2": 0,
                "go2": 1000
            },
            timeline: [
                { id: "eid16", tween: [ "style", "${_Rectangle3}", "top", '-462px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid15", tween: [ "style", "${_Rectangle3}", "height", '501px', { fromValue: '39px'}], position: 1000, duration: 500 }            ]
        }
    }
},
"dia4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "button3": 0,
                "go3": 1000
            },
            timeline: [
                { id: "eid19", tween: [ "style", "${_Rectangle4}", "height", '378px', { fromValue: '39px'}], position: 1000, duration: 500 },
                { id: "eid20", tween: [ "style", "${_Rectangle4}", "top", '-339px', { fromValue: '0px'}], position: 1000, duration: 500 }            ]
        }
    }
},
"dia5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle4Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ],
            "${_Rectangle4Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "button4": 0,
                "go4": 1000
            },
            timeline: [
                { id: "eid24", tween: [ "style", "${_Rectangle4Copy}", "top", '-561px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid23", tween: [ "style", "${_Rectangle4Copy}", "height", '600px', { fromValue: '39px'}], position: 1000, duration: 500 }            ]
        }
    }
},
"dia6": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "button6": 0,
                "go6": 1000
            },
            timeline: [
                { id: "eid28", tween: [ "style", "${_Rectangle5}", "top", '-567px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid27", tween: [ "style", "${_Rectangle5}", "height", '606px', { fromValue: '39px'}], position: 1000, duration: 500 }            ]
        }
    }
},
"dia7": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1563,
            autoPlay: true,
            labels: {
                "button7": 0,
                "go7": 1000
            },
            timeline: [
                { id: "eid32", tween: [ "style", "${_Rectangle5Copy}", "top", '-852px', { fromValue: '0px'}], position: 1000, duration: 563 },
                { id: "eid31", tween: [ "style", "${_Rectangle5Copy}", "height", '891px', { fromValue: '39px'}], position: 1000, duration: 563 }            ]
        }
    }
},
"dia8": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1415,
            autoPlay: true,
            labels: {
                "button8": 0,
                "go8": 1000
            },
            timeline: [
                { id: "eid36", tween: [ "style", "${_Rectangle5Copy2}", "top", '-148px', { fromValue: '0px'}], position: 1000, duration: 415 },
                { id: "eid35", tween: [ "style", "${_Rectangle5Copy2}", "height", '187px', { fromValue: '39px'}], position: 1000, duration: 415 }            ]
        }
    }
},
"dia9": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '148px', '39px', 'auto', 'auto'],
                    id: 'Rectangle5Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(194,176,176,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1595,
            autoPlay: true,
            labels: {
                "button8": 0,
                "go8": 1000
            },
            timeline: [
                { id: "eid39", tween: [ "style", "${_Rectangle5Copy3}", "height", '883px', { fromValue: '39px'}], position: 1000, duration: 595 },
                { id: "eid40", tween: [ "style", "${_Rectangle5Copy3}", "top", '-844px', { fromValue: '0px'}], position: 1000, duration: 595 }            ]
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
})(jQuery, AdobeEdge, "EDGE-6782986");
