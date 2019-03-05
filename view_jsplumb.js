var dynamicAnchors = ["Left", "Right"];
var common = {
    cssClass: "myCssClass"
};


jsPlumb.ready(function () {
    jsPlumb.Defaults.Container = $(".right_side");

    $(window).resize(function(){
        jsPlumb.repaintEverything();
    });

});

function connectNodes(connections) {
    for (var index in connections) {
        sourceid = connections[index].src;
        targetid = connections[index].dest;
        console.log(sourceid+"\t"+targetid);
        jsPlumb.connect({
            source: sourceid,
            target: targetid,
            connector: 'Flowchart',
            anchor: dynamicAnchors,
            paintStyle: { strokeWidth: 5, stroke: 'rgb(243,230,18)' },
            endpointStyle: { fill: 'rgb(43,229,0)' },
            overlays: [
                ["Arrow", { foldback: 0.2 }, common],
                ["Label", { cssClass: "labelClass" }]
            ]
        });
    }
}