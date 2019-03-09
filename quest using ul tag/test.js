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
function populateDropDown(data, elemSelctor, type) {

    switch (type) {
        case "objective":
            $.each(data, function (index, value) {
                $(elemSelctor).append($('<option></option>').val(value.val).html(value.desc));
                console.log(value);
            });
            break;

        default:
            break;
    }

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

    var child_list,parent_list;
    var list_item;
    var formElements;
    var select_options = "";
    var heading = "<h3>test</h3>";

    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            parent_list = "#objective_" + ids_html.ol_id;
            
            formElements = "Select objective <select class='drpobjectives'></select>";
            list_item = $("<li id = 'o_" + ids_html.o_id + "'></li>").append(formElements);
            $(parent_list).append(list_item);

            data.html_id = "o_" + ids_html.o_id;
            break;
        case "objectivelist":
            ids_html.ol_id++;
            parent_list = "#objectivelist_" + ids_html.q_id;
            // formElements = $("<select class = 'drp_objectivelist'></select>")
            // for (let i = 1; i < ids_html.ol_id; i++) {
            //     select_options = + "<option value='ol_'" + i + ">ol_" + i + "</option>";
            // }
            // select_options += "<option selected='selected' value='ol_"+ids_html.ol_id+"'>ol_"+ids_html.ol_id+"</option>";
            // formElements.append(select_options);
            // list_item = $("<li id = 'ol_" + ids_html.ol_id + "'></li>").append(formElements).prepend("Objective list id ");

            list_item ="<li id = 'ol_" + ids_html.ol_id + "'>test</li>";
            child_list = $("<ol class = 'objective' id = objective_" + ids_html.ol_id + "></ol>").append(heading);
            $(parent_list).append(list_item,child_list);
            

            data.html_id = "ol_" + ids_html.ol_id;
            break;
        case "quest":
            ids_html.q_id++;
            parent_list = "#quest_" + ids_html.qs_id;
            list_item = "<li id = 'q_" + ids_html.q_id + "'>test</li>";
            child_list = $("<ol class = 'objectivelist' id = objectivelist_" + ids_html.q_id + "></ol>").append(heading);
            
            $(parent_list).append(list_item,child_list);
            data.html_id = "q_" + ids_html.q_id;
            break;
        case "questset":
            ids_html.qs_id++;
            

            
            list_item = "<li id = 'qs_" + ids_html.qs_id + "'>test</li>";
            child_list = $("<ol class = 'quest' id = quest_" + ids_html.qs_id + "></ol>").append(heading);

            
            $(".questSets").append(heading,list_item,child_list);

            data.html_id = "qs_" + ids_html.qs_id;
            break;



        default:
            break;
    }
}


function addDOMElements(params) {

    traverse(data4);
    populateDropDown(objectivesRetrieved, ".drpobjectives", "objective");
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
