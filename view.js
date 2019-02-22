
$(function () {
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
});