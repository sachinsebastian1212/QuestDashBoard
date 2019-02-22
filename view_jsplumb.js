jsPlumb.ready(function () {

    var common = {
        cssClass: "myCssClass"
    };

    var dynamicAnchors = ["Left", "Right"];

    jsPlumb.connect({
        source: 'o_3',
        target: 'ol_1',
        connector: 'Flowchart',
        anchor: dynamicAnchors,
        paintStyle: { strokeWidth: 5, stroke: 'rgb(243,230,18)' },
        endpointStyle: { fill: 'rgb(43,229,0)' },
        overlays: [
            ["Arrow", { foldback: 0.2 }, common],
            ["Label", { cssClass: "labelClass" }]
        ]
    });

    jsPlumb.connect({
        source: 'o_1',
        target: 'ol_1',
        connector: 'Flowchart',
        anchor: dynamicAnchors,
        paintStyle: { strokeWidth: 5, stroke: 'rgb(243,230,18)' },
        endpointStyle: { fill: 'rgb(43,229,0)' },
        overlays: [
            ["Arrow", { foldback: 0.2 }, common],
            ["Label", { cssClass: "labelClass" }]
        ]
    });

    
});