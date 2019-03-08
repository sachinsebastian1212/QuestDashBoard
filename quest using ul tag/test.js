var ids_html = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };



function populateDefaultRoom() {
    var options = ["MSP_WILD", "CP_WILD", "MSP_CP_WILD", "MSP", "CP", "MSP_CP"];
    $.each(options, function (i, p) {
        $('#qsDefaultRoom').append($('<option></option>').val(p).html(p));
    });
}

function setDefaultChallangeTitle() {
    document.getElementById("qTitle").value = "Challage " + (q + 1);
}




// function populateObjectivesIds() {
//     var oIds = {"key1":"val1","key2":"val2"};

//     $.each(oIds, function(k, v) {
//         $('#oList').append($('<option></option>').val(k).html(v));
//     });
//     $('#oList').last().attr("selected","selected");
// }

function traverse(data) {
    if (data !== null && data.constructor === Array) {
        for (var index in data) {

            for (var keys in data[index]) {
                if (keys == "children")
                    traverse(data[index][keys]);
                else if (keys == "data") {
                    createNode(data[index][keys]);
                }
            }
        }
    }
}
function createNode(data) {

    var list;
    var list_item;

    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            list = "#list4" + ids_html.qs_id;
            list_item = "<li id = 'o_'" + ids_html.o_id + "></li>";
            $(list).append(list_item);

            data.html_id = "o_" + ids_html.o_id;
            break;
        case "objectiveList":
            ids_html.ol_id++;
            list = "#list3" + ids_html.qs_id;
            list_item = "<li id = 'ol_'" + ids_html.ol_id + "></li>";
            $(list).before(list_item);

            data.html_id = "ol_" + ids_html.ol_id;
            break;
        case "quest":
            ids_html.q_id++;
            list = "#list3" + ids_html.qs_id;
            list_item = "<li id = 'q_'" + ids_html.q_id + "></li>";
            $(list).before(list_item);

            data.html_id = "q_" + ids_html.q_id;
            break;
        case "questSet":
            ids_html.qs_id++;
            var list_1, list_2, list_3, list_4;

            list_1 = $("<ol class = 'questset' id = list1_" + ids_html.qs_id + "></ol>");
            list_2 = $("<ol class = 'quest' id = list2_" + ids_html.qs_id + "></ol>");
            list_3 = $("<ol class = 'objectivelist' id = list3_" + ids_html.qs_id + "></ol>");
            list_4 = $("<ol class = 'objective' id = list4_" + ids_html.qs_id + "></ol>");

            list_item = "<li id = 'qs_'" + ids_html.qs_id + "></li>";

            list_3.append(list_4);
            list_2.append(list_3);
            list_1.append(list_2);

            list_1.prepend(list_item);

            $(".questSets").append(list_1);

            data.html_id = "qs_" + ids_html.qs_id;
            break;



        default:
            break;
    }
}


function addDOMElements(params) {
    var data;
    var heading;

    // data = '<li>QuestSet Id<input type="text" name="qs" id="qsId" readonly></li>';
    // heading = "<h3>test</h3>";
    // $(".questset").prepend(data).prepend(heading);

    // data = '<li>Title <input type="text" name="" id="qTitle" ></li>';
    // $(".quest").prepend(data).prepend(heading);

    // data = '<li>ObjectiveListId<select name="" id="olList" ><option value="">Select Quest</option> </select></li>';
    // $(".objectivelist").prepend(data).prepend(heading);

    // data = '<li>Select Objective<select name="" id="oList" ><option value="">Select Quest</option> </select></li>';
    // $(".objective").prepend(data).prepend(heading);

    traverse(data2);

}

$(document).ready(function () {
    addDOMElements();
    // populateDefaultRoom();


    // $('#oList').change(function () {
    //     $('#newQuestbtn,#newObjectiveListbtn,#newObjectivebtn').css("visibility", "visible");

    // })

    $('#newObjectivebtn').click(function (e) {
        // $('#newObjectivebtn').before().html('<li>Select Objective<select name="" id="oList" ><option value="">Select Quest</option> </select></li>');
        var val = $('#oList').last().val();

        // $('#oList').before().html('Test<input type ="text">');
        $('#oList').before().html("test");
        // $('#oList').after().html('<li>Select Objective<select name="" id="oList" ><option value="">Select Quest</option> </select></li>');

        e.preventDefault();
    })



    // $('#qList').change(function () {
    //     $('<input/>').attr({ type: 'text', id: 'test', name: 'test'}).appendTo('form');
    // });

});
