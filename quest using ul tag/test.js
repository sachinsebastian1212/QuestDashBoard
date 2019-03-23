var objectivesRetrieved = [{ "desc": "desc1", "val": "ob_77" }, { "desc": "desc2", "val": "ob_78" },
{ "desc": "desc3", "val": "ob_79" }, { "desc": "desc4", "val": "ob_80" }];
var rewardsRetrieved = [{ "desc": "reward1", "val": "qr_26" }, { "desc": "reward2", "val": "qr_31" },
{ "desc": "reward3", "val": "qr_32" }, { "desc": "reward4", "val": "qr_33" }];
var questActionTypeRetrived = ["Type1", "Type2", "Type3"];
var questActionRetrived = ["action1", "action2", "action3"];

var ids_html = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };
var select_options = "<option value='auto'>Auto</option> <option value='duplicate'>Duplicate</option>";
var JSON_ids = { o_id: 0, ol_id: 0, q_id: 0, qs_id: 0 };
var inputdata = data4;



/**
 * This function inserts data from array of key value pairs to dropdown
 * @param {An array with key value pair} data 
 * @param {select tag id} elemId 
 */
function populateDropDown(data, element) {
    if (data !== null) {
        if (typeof data[0] === 'object')
            $.each(data, function (index, value) {
                $(element).append($('<option></option>').val(value.val).html(value.desc));
            });
        else
            $.each(data, function (index, value) {
                $(element).append($('<option></option>').val(value).html(value));
            });
    }
}

function traverse(data) {
    var jsonobj = {};

    if (data !== null && data.constructor === Array) {
        $.each(data, function (index, value) {
            createNode(value);
            $.each(value, function (key, val) {
                if (key == "children")
                    traverse(val);
                else
                    jsonobj[key] = val;
            });
        });
    }
}
function createNode(data, elemId) {

    var child_list, parent_list;
    var list_item = [];
    var dropdown;
    var wrapelem;

    var addButton = $("<button type='button' class = 'btn_new' >New</button>");
    var deleteButton = $("<button type='button' class = 'btn_delete' style='margin-left:20px;'>X</button>");
    var heading = $("<h3>test</h3>");
    var questAction = "", questActionType = "";

    switch (data.type) {
        case "objective":
            ids_html.o_id++;
            parent_list = (elemId !== undefined) ? elemId : "#objective_" + ids_html.ol_id;

            dropdown = "<label class = 'objective'>Select objective</label> <select name = 'db_id' class='drp_objectives autonum' id = 'drp_o_" + ids_html.o_id + "'></select>";
            list_item[0] = $("<li></li>").append(dropdown);
            populateDropDown(objectivesRetrieved, list_item[0].find('select'), "objective");
            if (data.db_id != undefined) list_item[0].find('select').val(data.db_id);

            wrapelem = $('<ol class = "objective"></ol>').append(deleteButton, list_item).wrap('<li>').parent();
            $(parent_list).append(wrapelem);
            break;
        case "objectivelist":
            ids_html.ol_id++;
            parent_list = (elemId !== undefined) ? elemId : "#objectivelist_" + ids_html.q_id;

            dropdown = $("<select class = 'drp_objectivelist autonum'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label class = 'objectivelist'>Objective list id </label>");
            addButton.attr('id', 'btn_ol_' + ids_html.ol_id).text("new objective");
            heading.text("objectives");

            list_item[1] = $("<ol class = 'objectives' id = 'objective_" + ids_html.ol_id + "'></ol>").append(heading, addButton).wrap('<li>').parent();
            wrapelem = $('<ol class = "objectivelist"></ol>').append(deleteButton, list_item).wrap('<li>').parent();
            $(parent_list).append(wrapelem);
            break;
        case "quest":
            ids_html.q_id++;
            parent_list = (elemId !== undefined) ? elemId : "#quest_" + ids_html.qs_id;

            dropdown = $("<select class = 'drp_quest autonum'></select>").append(select_options);
            list_item[0] = $("<li></li>").append(dropdown).prepend("<label class ='quest'> quest id </label>");
            list_item[1] = $('<li><label class ="quest">Title           </label><input type="text" name="title" id="q_title_' + ids_html.q_id + '"></li>');
            list_item[2] = $('<li><label class ="quest">Description     </label><input type="text" name="description" id="q_description_' + ids_html.q_id + '"></li>');
            list_item[3] = $('<li><label class ="quest">Reward          </label><select name="reward" class="drp_reward" id="drp_reward_' + ids_html.q_id + '"></select></li>');
            list_item[4] = $('<li><label class ="quest">questActionType </label><select name="questActionType" ></select></li>');
            list_item[5] = $('<li><label class ="quest">questAction     </label><select name="questAction" id="questAction"></select></li>');

            populateDropDown(rewardsRetrieved, list_item[3].find('select'));
            populateDropDown(questActionTypeRetrived, list_item[4].find('select'));
            populateDropDown(questActionRetrived, list_item[5].find('select'));

            if (data.title != undefined) list_item[1].find('input').val(data.title);
            if (data.description != undefined) list_item[2].find('input').val(data.description);
            if (data.reward != undefined) list_item[3].find('select').val(data.reward);
            if (data.questActionType != undefined) list_item[4].find('select').val(data.questActionType);
            if (data.questAction != undefined) list_item[5].find('select').val(data.questAction);

            addButton.attr('id', 'btn_q_' + ids_html.q_id).text("new objective list");
            heading.text('objective list');

            list_item[6] = $("<ol class = 'objectivelists' id = objectivelist_" + ids_html.q_id + "></ol>").append(heading, addButton).wrap('<li>').parent();
            wrapelem = $('<ol class = "quest"></ol>').append(deleteButton, list_item).wrap('<li>').parent();
            $(parent_list).append(wrapelem);
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

            addButton.attr('id', 'btn_qs_' + ids_html.qs_id).text("add new quest");
            heading.text('quest');

            list_item[3] = $("<ol class = 'quests' id = quest_" + ids_html.qs_id + "></ol>").append(heading, addButton).wrap('<li>').parent();
            wrapelem = $("<ol class = 'questset'></ol>").append(deleteButton, list_item).wrap('<li>').parent();
            $(".questSets").append(wrapelem);

            break;
        default:
            break;
    }
}


function addDOMElements(params) {

    traverse(inputdata);
    var addButton = "<button type='button' class ='btn_new'= >new quest set</button>";
    $(".questSets").prepend("<h3>questset</h3>");
    $(".questSets").prepend(addButton);
}

function createJSON($list, level, jsonarray) {
    var val, key, jsonobj, ids_quest, type;
    if ($list.length > 0) {
        type = $list.attr('class');

        if (type == 'questset' || type == 'quest' || type == 'objectivelist' || type == 'objective') {
            jsonobj = {}
            jsonarray.push(jsonobj);

        }

        switch (type) {
            case "questset":
                JSON_ids.qs_id++;
                jsonobj['type'] = "questset";
                ids_quest = "qs_" + JSON_ids.qs_id;
                break;
            case "quest":
                JSON_ids.q_id++;
                jsonobj['type'] = "quest";
                ids_quest = "q_" + JSON_ids.q_id;
                break;
            case "objectivelist":
                JSON_ids.ol_id++;
                jsonobj['type'] = "objectivelist";
                ids_quest = "ol_" + JSON_ids.ol_id;
                break;
            case "objective":
                JSON_ids.o_id++;
                jsonobj['type'] = "objective";
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
                            jsonobj['id'] = ids_quest;
                }
                else {
                    val = $(this).children().eq(1).val();
                    key = $(this).children().eq(1).attr('name');
                }

                jsonobj[key] = val;

            }
            else if ($(this).children('ol')) {
                if (jsonobj === undefined)
                    createJSON($(this).children('ol'), level + 1, jsonarray);
                else {
                    jsonobj.children = [];
                    createJSON($(this).children('ol'), level + 1, jsonobj.children);
                }
            }
        });
    }
}

$(document).ready(function () {
    addDOMElements();

    $(document).on('click', 'button', function () {
        var btn_type = $(this).attr('class');
        var elem = $(this).closest('ol');


        if (btn_type == "btn_new") {
            var type = $(this).closest('ol').attr('class');
            switch (type) {
                case "objectives":
                    createNode({ "type": "objective" }, elem);
                    break;
                case "objectivelists":
                    createNode({ "type": "objectivelist" }, elem);
                    createNode({ "type": "objective" });
                    break;
                case "quests":
                    createNode({ "type": "quest" }, elem);
                    createNode({ "type": "objectivelist" });
                    createNode({ "type": "objective" });
                    break;
                case "questSets":
                    createNode({ "type": "questset" });
                    createNode({ "type": "quest" });
                    createNode({ "type": "objectivelist" });
                    createNode({ "type": "objective" });
                    break;
                default:
                    break;
            }
        }
        else if (btn_type == "btn_delete") {
            var length = $(this).closest('li').closest('ol').children('li').children('ol').length;
            if (length > 1) {
                var status = confirm("Do you want to delete");
                if (status)
                    $(this).closest('li').remove();
            }
            else {
                alert('You cant delete when only one');
            }
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
        var dropdown = "<select>" + options + "</select>";

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
