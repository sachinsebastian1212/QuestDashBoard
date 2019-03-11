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

    var child_list, parent_list;
    var list_item = [];
    var dropdown;
    var wrapelem;
    var select_options = "<option value='auto'>Auto</option> <option value='duplicate'>Duplicate</option>";
    var addButton = $("<button type='button'>Add</button>");
    var heading = $("<h3>test</h3>");

    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            parent_list = "#objective_" + ids_html.ol_id;

            dropdown = "<label>Select objective</label> <select class='drpobjectives'></select>";

            list_item[0] = $("<li></li>").append(dropdown);

            var btn = $(parent_list).children().last();
            btn.prepend(list_item[0])
            $(parent_list).append(btn);

            data.html_id = "o_" + ids_html.o_id;
            break;
        case "objectivelist":
            ids_html.ol_id++;
            parent_list = "#objectivelist_" + ids_html.q_id;

            dropdown = $("<select class = 'drp_objectivelist'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label>Objective list id </label>");
            addButton.attr('class','btn_new_objective').attr('id','btn_ol_'+ids_html.ol_id).text("new objective");
            addButton = $('<li></li>').append(addButton);
            heading.text("objectives");
            child_list = $("<ol class = 'objective' id = objective_" + ids_html.ol_id + "></ol>").append(heading,addButton);
            list_item[1] = $('<li></li>').append(child_list);
            wrapelem = $('<ol></ol>').append(list_item);
            wrapelem = $('<li></li>').append(wrapelem);

            var btn = $(parent_list).children().last();
            btn.prepend(wrapelem);
            $(parent_list).append(btn);


            data.html_id = "ol_" + ids_html.ol_id;
            break;
        case "quest":
            ids_html.q_id++;
            parent_list = "#quest_" + ids_html.qs_id;


            dropdown = $("<select class = 'drp_quest'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label> quest id </label>");
            list_item[1] = '<li><label>Title           </label><input type="text" name="" id="q_title_' + ids_html.q_id + '"></li>';
            list_item[2] = '<li><label>Description     </label><input type="text" name="" id="q_description_' + ids_html.q_id + '"></li>';
            list_item[3] = '<li><label>Reward          </label><select name="" id="reward"></select></li>';
            list_item[4] = '<li><label>questActionType </label><select name="" id="questActionType"></select></li>';
            list_item[5] = '<li><label>questAction     </label><select name="" id="questAction"></select></li>';
            addButton.attr('class','btnnewol').attr('id','btn_q_'+ids_html.q_id).text("new objective list");
            addButton = $('<li></li>').append(addButton);
            heading.text('objective list');
            child_list = $("<ol class = 'objectivelist' id = objectivelist_" + ids_html.q_id + "></ol>").append(heading,addButton);
            list_item[6] = $('<li></li>').append(child_list);

            wrapelem = $('<ol></ol>').append(list_item);
            wrapelem = $('<li></li>').append(wrapelem);

            var btn = $(parent_list).children().last();
            btn.prepend(wrapelem);
            $(parent_list).append(btn);


            // $(parent_list).append(wrapelem);

            data.html_id = "q_" + ids_html.q_id;
            break;
        case "questset":
            ids_html.qs_id++;


            dropdown = $("<select class = 'drp_questset'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label>quest set id </label>");
            list_item[1] = '<li><label>Reward      </label><select name="" id="reward"></select></li>';
            list_item[2] = '<li><label>difficulty       </label><input type="number" value = "1" name="" id="qs_difficulty_' + ids_html.qs_id + '"></li>';
            addButton.attr('class','btnnewq').attr('id','btn_qs_'+ids_html.qs_id).text("add new quest");
            addButton = $('<li></li>').append(addButton);
            heading.text('quest');
            child_list = $("<ol class = 'quest' id = quest_" + ids_html.qs_id + "></ol>").append(heading,addButton);
            list_item[3] = $('<li></li>').append(child_list);

            parent_list = $("<ol class = 'questset' id = questset_" + ids_html.qs_id + "></ol>");
            parent_list.append(list_item);
            parent_list = $('<li></li>').append(parent_list);
            $(".questSets").append(parent_list);

            data.html_id = "qs_" + ids_html.qs_id;
            break;



        default:
            break;
    }
}


function addDOMElements(params) {

    traverse(data6);
    var addButton= "<li><button type='button' class ='btnnewqs'= >Add</button></li>";

    $(".questSets").append(addButton);
    populateDropDown(objectivesRetrieved, ".drpobjectives", "objective");
}

$(document).ready(function () {
    addDOMElements();

    $("button").click(function () {
        var type = $(this).attr('class');

        var obj = "<li><label>Select objective</label> <select class='drpobjectives'></select></li>"

        switch (type) {
            case 'btn_new_objective':
                
                break;
        
            default:
                break;
        }
    })

});
