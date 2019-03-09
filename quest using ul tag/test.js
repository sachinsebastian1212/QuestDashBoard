var objectivesRetrieved = [{ "desc": "desc1", "val": "val1" }, { "desc": "desc2", "val": "val2" },
{ "desc": "desc3", "val": "val3" }, { "desc": "desc4", "val": "val4" }];

var ids_html = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };



function populateDefaultRoom() {
    var options = ["MSP_WILD", "CP_WILD", "MSP_CP_WILD", "MSP", "CP", "MSP_CP"];
    $.each(options, function (i, p) {
        $('#qsDefaultRoom').append($('<option></option>').val(p).html(p));
    });
}


/**
 * This function inserts data from array of key value pairs to dropdown
 * @param {An array with key value pair} data 
 * @param {select tag id} elemId 
 */
function populateDropDown(data, elemId) {
    elemId = "#" + elemId;

    $.each(data, function (index, value) {
        $(elemId).append($('<option></option>').val( value.val).html( value.desc));
        console.log(value);
    });
}


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
    var formElements;
    var heading = "<h3>test</h3>";

    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            list = "#list4_" + ids_html.qs_id;
            formElements = "Select objective <select id='drpobjectives'></select>";
            list_item = $("<li id = 'o_" + ids_html.o_id + "'></li>").append(formElements);
            $(list).append(list_item);
            $(list).prepend(heading);

            data.html_id = "o_" + ids_html.o_id;
            break;
        case "objectivelist":
            ids_html.ol_id++;
            list = "#list4_" + ids_html.qs_id;
            formElements = "Objective list id <select></select>";
            list_item = "<li id = 'ol_" + ids_html.ol_id + "'></li>";
            $(list).before(list_item);
            $("#list3_" + ids_html.qs_id).prepend(heading);

            data.html_id = "ol_" + ids_html.ol_id;
            break;
        case "quest":
            ids_html.q_id++;
            list = "#list3_" + ids_html.qs_id;
            list_item = "<li id = 'q_" + ids_html.q_id + "'>test</li>";
            $(list).before(list_item);
            $("#list2_" + ids_html.qs_id).prepend(heading);

            data.html_id = "q_" + ids_html.q_id;
            break;
        case "questset":
            ids_html.qs_id++;
            var list_1, list_2, list_3, list_4;

            list_1 = $("<ol class = 'questset' id = list1_" + ids_html.qs_id + "></ol>");
            list_2 = $("<ol class = 'quest' id = list2_" + ids_html.qs_id + "></ol>");
            list_3 = $("<ol class = 'objectivelist' id = list3_" + ids_html.qs_id + "></ol>");
            list_4 = $("<ol class = 'objective' id = list4_" + ids_html.qs_id + "></ol>");

            list_item = "<li id = 'qs_" + ids_html.qs_id + "'>test</li>";

            list_3.append(list_4);
            list_2.append(list_3);
            list_1.append(list_2);

            list_1.prepend(list_item);
            list_1.prepend(heading);

            $(".questSets").append(list_1);

            data.html_id = "qs_" + ids_html.qs_id;
            break;



        default:
            break;
    }
}


function addDOMElements(params) {

    traverse(data2);
    populateDropDown(objectivesRetrieved, "drpobjectives");
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
