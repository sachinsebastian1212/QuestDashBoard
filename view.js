var ids_html = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };
var connections = [];

$(function () {
        traverse(data2);


    var h = 90, s = 100, l = 40;
    var h_draggable = {};

    $(".draggable").draggable({
        helper: "clone",
        create: function (event, ui) {
            var hsl = "hsl(" + h + "," + s + "%," + l + "%)";
            $(this).css("background-color", hsl);
        }
    });

    $(".droppable").droppable({
        activeClass: "drag-active",
        hoverClass: "drag-hover",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped");

            var id = ui.draggable.attr('id');
            if (id in h_draggable) {
                hue = h_draggable[id];
            }
            else {
                hue = h;
            }
            if (hue > 15) {
                hue -= 25;
                h_draggable[id] = hue;
            }
            var hsl = "hsl(" + hue + "," + s + "%," + l + "%)";
            ui.draggable.css("background-color", hsl);
            $(this).text(ui.draggable.find("p").text());

            console.log(hsl);
        }
    });

    jsPlumb.ready(function () {
        connectNodes(connections);
    });

    // $(".objectives").click(function () {
    //     alert("The paragraph was clicked.");
    //     traverse(data2);
    //     connectNodes(connections);
    // });

});

function traverse(jsonObj, parent_id) {
    var child_id;
    if (jsonObj !== null && jsonObj.constructor === Array) {
        // document.write("<ul>");
        for (var index in jsonObj) {

            for (var keys in jsonObj[index]) {
                if (keys == "children")
                    traverse(jsonObj[index][keys], child_id);
                else if (keys == "data") {
                    createNode(jsonObj[index][keys]);
                    child_id = jsonObj[index][keys].html_id;
                    if (parent_id !== undefined)
                        connections.push({ "src": child_id, "dest": parent_id });
                }


            }
            // document.write("<br>");
        }
        // document.write("</ul>");

    }
}

function createNode(data) {


    var j = 0;
    var sel;
    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            sel = ".div1" + ids_html.qs_id;
            $(sel).append("<div id=o_" + ids_html.o_id + " class ='droppable' >o_" + ids_html.o_id + "</div>")
            data.html_id = "o_" + ids_html.o_id;
            break;
        case "objectiveList":
            ids_html.ol_id++;
            sel = ".div2" + ids_html.qs_id;
            $(sel).append("<div id=ol_" + ids_html.ol_id + ">ol_" + ids_html.ol_id + "</div>")
            data.html_id = "ol_" + ids_html.ol_id;
            break;
        case "quest":
            ids_html.q_id++;
            sel = ".div3" + ids_html.qs_id;
            $(sel).append("<div id=q_" + ids_html.q_id + ">q_" + ids_html.q_id + "</div>")
            data.html_id = "q_" + ids_html.q_id;
            break;
        case "questSet":
            ids_html.qs_id++;
            var div1 = "<div class ='div1" + ids_html.qs_id + "'></div>";
            var div2 = "<div class ='div2" + ids_html.qs_id + "'></div>";
            var div3 = "<div class ='div3" + ids_html.qs_id + "'></div>";
            var div4 = $("<div class ='div4" + ids_html.qs_id + "'></div>");

            var div0 = $("<div class='questset'></div>");

            var div5 = "<div id=qs_" + ids_html.qs_id + ">qs_" + ids_html.qs_id + "</div>";
            div4.append(div5);
            div0.append(div1, div2, div3, div4);

            $(".right_side").append(div0);

            data.html_id = "qs_" + ids_html.qs_id;
            break;



        default:
            break;
    }
}
