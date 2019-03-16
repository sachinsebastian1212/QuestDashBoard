var objectivesRetrieved = [{ "desc": "desc1", "val": "val1" }, { "desc": "desc2", "val": "val2" },
{ "desc": "desc3", "val": "val3" }, { "desc": "desc4", "val": "val4" }];
var rewardsRetrieved = [{ "desc": "reward1", "val": "r_1" }, { "desc": "reward2", "val": "r_2" },
{ "desc": "reward3", "val": "r_3" }, { "desc": "reward4", "val": "r_4" }];
var questActionTypeRetrived = ["Type1", "Type2", "Type3"];
var questActionRetrived = ["action1", "action2", "action3"];

var ids_html = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };
var select_options = "<option value='auto'>Auto</option> <option value='duplicate'>Duplicate</option>";
var JSON_ids = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };


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
            });
            break;
        case "reward":
            $.each(data, function (index, value) {
                $(elemSelctor).append($('<option></option>').val(value.val).html(value.desc));
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
function createNode(data, elemId) {

    var child_list, parent_list;
    var list_item = [];
    var dropdown;
    var wrapelem;

    var addButton = $("<button type='button'>Add</button>");
    var deleteButton = $("<button type='button' class = 'btn_delete' style='margin-left:20px;'>X</button>");
    var heading = $("<h3>test</h3>");
    var questAction = "", questActionType = "";

    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            if (elemId !== undefined)
                parent_list = elemId;
            else
                parent_list = "#objective_" + ids_html.ol_id;

            dropdown = "<label class = 'objective'>Select objective</label> <select name = 'db_id' class='drp_objectives autonum' id = 'drp_o_" + ids_html.o_id + "'></select>";
            list_item[0] = $("<li></li>").append(dropdown);
            populateDropDown(objectivesRetrieved, list_item[0].find('select'), "objective");
            if (data.db_id != undefined) list_item[0].find('select').val(data.db_id);
            wrapelem = $('<ol class = "objective"></ol>').append(deleteButton,list_item);
            wrapelem = $('<li></li>').append(wrapelem);

            var btn = $(parent_list).children().last();
            btn.before(wrapelem);
            $(parent_list).append(btn);

            data.html_id = "o_" + ids_html.o_id;
            break;
        case "objectivelist":
            ids_html.ol_id++;
            if (elemId !== undefined)
                parent_list = elemId;
            else
                parent_list = "#objectivelist_" + ids_html.q_id;

            dropdown = $("<select class = 'drp_objectivelist autonum'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label class = 'objectivelist'>Objective list id </label>");
            addButton.attr('class', 'btn_new_objective').attr('id', 'btn_ol_' + ids_html.ol_id).text("new objective");
            addButton = $('<li></li>').append(addButton);
            heading.text("objectives");
            child_list = $("<ol class = 'objectives' id = 'objective_" + ids_html.ol_id + "'></ol>").append(heading, addButton);
            list_item[1] = $('<li></li>').append(child_list);
            wrapelem = $('<ol class = "objectivelist"></ol>').append(deleteButton,list_item);
            wrapelem = $('<li></li>').append(wrapelem);

            var btn = $(parent_list).children().last();
            btn.before(wrapelem);
            $(parent_list).append(btn);


            data.html_id = "ol_" + ids_html.ol_id;
            break;
        case "quest":
            ids_html.q_id++;
            parent_list = "#quest_" + ids_html.qs_id;


            dropdown = $("<select class = 'drp_quest autonum'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label class ='quest'> quest id </label>");
            list_item[1] = $('<li><label class ="quest">Title           </label><input type="text" name="title" id="q_title_' + ids_html.q_id + '"></li>');
            list_item[2] = $('<li><label class ="quest">Description     </label><input type="text" name="description" id="q_description_' + ids_html.q_id + '"></li>');
            list_item[3] = $('<li><label class ="quest">Reward          </label><select name="reward" class="drp_reward" id="drp_reward_' + ids_html.q_id + '"></select></li>');
            populateDropDown(rewardsRetrieved, list_item[3].find('select'), "reward");
            $.each(questActionTypeRetrived, function (i, v) {
                questActionType += "<option value = " + v + ">" + v + "</option>";
            });
            list_item[4] = $('<li><label class ="quest">questActionType </label><select name="questActionType" id="questActionType">' + questActionType + '</select></li>');
            $.each(questActionRetrived, function (i, v) {
                questAction += "<option value = " + v + ">" + v + "</option>";
            });

            list_item[5] = $('<li><label class ="quest">questAction     </label><select name="questAction" id="questAction">' + questAction + '</select></li>');

            if (data.title != undefined) list_item[1].find('input').val(data.title);
            if (data.description != undefined) list_item[2].find('input').val(data.description);
            if (data.reward != undefined) list_item[3].find('select').val(data.reward);
            if (data.questActionType != undefined) list_item[4].find('select').val(data.questActionType);
            if (data.questAction != undefined) list_item[5].find('select').val(data.questAction);



            addButton.attr('class', 'btn_new_objectivelist').attr('id', 'btn_q_' + ids_html.q_id).text("new objective list");
            addButton = $('<li></li>').append(addButton);
            heading.text('objective list');
            child_list = $("<ol class = 'objectivelists' id = objectivelist_" + ids_html.q_id + "></ol>").append(heading, addButton);
            list_item[6] = $('<li></li>').append(child_list);

            wrapelem = $('<ol class = "quest"></ol>').append(deleteButton,list_item);
            wrapelem = $('<li></li>').append(wrapelem);

            var btn = $(parent_list).children().last();
            btn.before(wrapelem);
            $(parent_list).append(btn);


            // $(parent_list).append(wrapelem);

            data.html_id = "q_" + ids_html.q_id;
            break;
        case "questset":
            ids_html.qs_id++;


            dropdown = $("<select class = 'drp_questset autonum'></select>").append($(select_options).first());
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label class ='questset'>quest set id </label>");
            list_item[1] = $('<li><label class ="questset">Reward      </label><select name="rewardId" class="drp_reward" id="drp_reward_' + ids_html.qs_id + '"></select></li>');
            list_item[2] = $('<li><label class ="questset">difficulty       </label><input type="number" value = "1" name="difficulty" id="qs_difficulty_' + ids_html.qs_id + '"></li>');
            populateDropDown(rewardsRetrieved, list_item[1].find('select'), "reward");
            if (data.rewardId != undefined) list_item[1].find('select').val(data.rewardId);
            if (data.difficulty != undefined) list_item[2].find('input').val(data.difficulty);

            addButton.attr('class', 'btn_new_quest').attr('id', 'btn_qs_' + ids_html.qs_id).text("add new quest");
            addButton = $('<li></li>').append(addButton);
            heading.text('quest');
            child_list = $("<ol class = 'quests' id = quest_" + ids_html.qs_id + "></ol>").append(heading, addButton);
            list_item[3] = $('<li></li>').append(child_list);

            parent_list = $("<ol class = 'questset' id = questset_" + ids_html.qs_id + "></ol>");
            parent_list.append(deleteButton,list_item);
            parent_list = $('<li></li>').append(parent_list);
            if ($(".questSets").children().length)
                $(".questSets").children().last().before(parent_list);
            else
                $(".questSets").append(parent_list);

            data.html_id = "qs_" + ids_html.qs_id;
            break;



        default:
            break;
    }
}


function addDOMElements(params) {

    traverse(gdata2);
    var addButton = "<li><button type='button' class ='btn_new_questset'= >new quest set</button></li>";
    $(".questSets").prepend("<h3>questset</h3>");
    $(".questSets").append(addButton);
}

function createJSON($list, level, jsonarray) {
    var data, val, key, jsonobj, ids_quest, type;
    if ($list.length > 0) {
        type = $list.attr('class');

        if (type == 'questset' || type == 'quest' || type == 'objectivelist' || type == 'objective') {
            jsonobj = {}
            jsonarray.push(jsonobj);
            jsonobj.data = {};
            jsonobj.children = [];
            data = jsonobj.data;

        }

        switch (type) {
            case "questset":
                JSON_ids.qs_id++;
                data['type'] = "questset";
                ids_quest = "qs_" + JSON_ids.qs_id;
                break;
            case "quest":
                JSON_ids.q_id++;
                data['type'] = "quest";
                ids_quest = "q_" + JSON_ids.q_id;
                break;
            case "objectivelist":
                JSON_ids.ol_id++;
                data['type'] = "objectivelist";
                ids_quest = "ol_" + JSON_ids.ol_id;
                break;
            case "objective":
                JSON_ids.o_id++;
                jsonobj.children = undefined;
                data['type'] = "objective";
                ids_quest = "o_" + JSON_ids.o_id;
                break;


            default:
                break;
        }
        $list.children('li').each(function () {
            if ($(this).children('label').length > 0) {

                if ($(this).children().is('select')) {
                    val = $(this).children('select').find('option:selected').val();
                    key = $(this).children('select').attr('name');
                    var class1 = $(this).children('select').attr('class');
                    if (class1 != undefined)
                        if (class1.split(' ')[1] == 'autonum')
                            data['id'] = ids_quest;
                }
                else {
                    val = $(this).children().eq(1).val();
                    key = $(this).children().eq(1).attr('name');
                }

                data[key] = val;

            }
            else if ($(this).children('ol')) {
                if (jsonobj === undefined)
                    createJSON($(this).children('ol'), level + 1, jsonarray);
                else
                    createJSON($(this).children('ol'), level + 1, jsonobj.children);
            }
        });
    }
}

$(document).ready(function () {
    addDOMElements();

    $(document).on('click', 'button', function () {
        var type = $(this).attr('class');
        var elemId;

        switch (type) {
            case 'btn_new_objective':
                elemId = $(this).closest('ol');
                // $(this).before(obj);
                createNode({ "type": "objective" }, elemId);
                break;
            case 'btn_new_objectivelist':
                // $(this).before(objList);
                elemId = $(this).closest('ol');
                createNode({ "type": "objectivelist" }, elemId);
                createNode({ "type": "objective" });
                break;
            case 'btn_new_quest':
                elemId = $(this).closest('ol');
                createNode({ "type": "quest" }, elemId);
                createNode({ "type": "objectivelist" });
                createNode({ "type": "objective" });
                break;
            case 'btn_new_questset':
                createNode({ "type": "questset" });
                createNode({ "type": "quest" });
                createNode({ "type": "objectivelist" });
                createNode({ "type": "objective" });
                break;
            case 'btn_delete':
                var length = $(this).closest('li').closest('ol').children('li').children('ol').length;
                if (length > 1) {
                    var status = confirm("Do you want to delete");
                    if(status)
                        $(this).closest('li').remove();
                }
                else{
                    alert('You cant delete when only one');
                }
                break;
            default:
                break;
        }
    })

    $("#btnsavedata").click(function () {
        var $list = $("#questSets");
        var lvl = 0;
        var createJSON_data = [];
        createJSON($list, lvl, createJSON_data);
        console.log(JSON.stringify(createJSON_data));
    })

    $(document).on('change', '.autonum', function () {
        var container = $(this).closest('ol');
        var options = "<option value='dup1'>dup1</option>";
        var dropdown = "<select>"+options+"</select>";

        if ($(this).val() == 'auto') {
            container.removeClass('focus');
            $(this).next().remove();
            // container.animate({width :"-=100px",height :"-=100px"},2000);
        }

        else if ($(this).val() == 'duplicate') {
            container.addClass("focus");
            $(this).after(dropdown);
            // container.animate({width :"+=100px",height :"+=100px"},2000);
        }


    })

});
