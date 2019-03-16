

var gamedata = {};
var inpdata = [{ "data": { "type": "questset", "id": "qs_1", "undefined": "auto", "rewardId": "qr_31", "difficulty": "6" }, "children": [{ "data": { "type": "quest", "id": "q_1", "undefined": "auto", "title": "title1", "description": "desc 1", "reward": "qr_32", "questActionType": "Type2", "questAction": "action2" }, "children": [{ "data": { "type": "objectivelist", "id": "ol_1", "undefined": "auto" }, "children": [{ "data": { "type": "objective", "id": "o_1", "db_id": "ob_77" } }, { "data": { "type": "objective", "id": "o_2", "db_id": "ob_79" } }, { "data": { "type": "objective", "id": "o_3", "db_id": "ob_80" } }] }] }] }];
var Objectives = [{ "id": "ob_77", "conditions": ["C_53", "C_79", "C_80"], "description": "Play 20 games of Multi-Strike Poker Deuces Wild", "count": "20", "streek": "0" }, { "id": "ob_78", "conditions": ["C_17", "C_81", "C_53"], "description": "Win 10 times at 4x level in Multi-Strike Poker", "count": "10", "streek": "0" }, { "id": "ob_79", "conditions": ["C_17", "C_115", "C_53"], "description": "Win 20 Hands in Multi-Strike Poker Double Double Bonus Poker", "count": "20", "streek": "0" }, { "id": "ob_80", "conditions": ["C_53", "C_109"], "description": "Play 50 games of Jokers WILD", "count": "50", "streek": "0" }, { "id": "ob_128", "conditions": ["C_53", "C_88", "C_94", "C_90"], "description": "Get 3 of a Kind(Natural) on deal 10 times", "count": "10", "streek": "0" }];
var Conditions = [{ "id": "C_17", "type": "PR", "condition": "E", "values": ["pr_00"] }, { "id": "C_53", "type": "PS", "condition": "E", "values": ["ps_01"] }, { "id": "C_65", "type": "PS", "condition": "E", "values": ["ps_02"] }, { "id": "C_79", "type": "PM", "condition": "E", "values": ["MSP_DW"] }, { "id": "C_80", "type": "PL", "condition": "E", "values": ["pl_00"] }, { "id": "C_81", "type": "PL", "condition": "E", "values": ["pl_02"] }, { "id": "C_83", "type": "PR", "condition": "E", "values": ["pr_02"] }, { "id": "C_86", "type": "PH", "condition": "E", "values": ["ph_01"] }, { "id": "C_87", "type": "PH", "condition": "E", "values": ["ph_02"] }, { "id": "C_88", "type": "PH", "condition": "E", "values": ["ph_03"] }, { "id": "C_90", "type": "PCS", "condition": "NC", "values": ["pc_13"] }, { "id": "C_91", "type": "PH", "condition": "E", "values": ["ph_05"] }, { "id": "C_94", "type": "PCS", "condition": "NC", "values": ["pc_14"] }, { "id": "C_103", "type": "PCS", "condition": "E", "values": ["pcs_01"] }, { "id": "C_109", "type": "PM", "condition": "E", "values": ["CP_JW"] }, { "id": "C_110", "type": "PL", "condition": "E", "values": ["pl_03"] }, { "id": "C_111", "type": "PM", "condition": "E", "values": ["MSP_JOB"] }, { "id": "C_115", "type": "PM", "condition": "E", "values": ["MSP_DDBP"] }, { "id": "C_120", "type": "PM", "condition": "E", "values": ["MSP_BPD"] }, { "id": "C_138", "type": "PCS", "condition": "E", "values": ["pc_05,pc_05,pc_05"] }];
var QuestRewards = [{ "id": "qr_26", "type": "Reward 1", "reward": "1000" }, { "id": "qr_31", "type": "Reward 2", "reward": "2000" }, { "id": "qr_32", "type": "Reward 3", "reward": "4000" }, { "id": "qr_33", "type": "Reward 4", "reward": "8000" }];
gamedata.Conditions = [];
gamedata.Objectives = [];
gamedata.ObjectiveLists = [];
gamedata.Quests = [];
gamedata.QuestSets = [];
gamedata.QuestRewards = [];



function traverseinpdata(data) {
    if (data !== null && data.constructor === Array) {
        $.each(data, function (index, value) {
            $.each(value, function (key, val) {
                if (key == "children")
                    traverseinpdata(val);
                else if (key == "data")
                    generateGamedata(val);
            });
        });
    }
}

function generateGamedata(data) {
    var jsonobj = {};
    switch (data.type) {
        case "objective":
            jsonobj.id = data.id;
            copyDatafromtable(data.db_id, Objectives, jsonobj);
            gamedata.Objectives.push(jsonobj);


            $.each(jsonobj.conditions, function (index, value) {
                var conditionsobj = {};
                copyDatafromtable(value, Conditions, conditionsobj);
                gamedata.Conditions.push(conditionsobj);
            });
            break;
        case "objectivelist":
            jsonobj.id = data.id;
            gamedata.ObjectiveLists.push(jsonobj);
            break;
        case "quest":
            $.each(data, function (key, val) {
                if (!(key == 'undefined' || key == 'type')) {
                    if (key == 'reward') {
                        var rewardsobj = {};
                        copyDatafromtable(val, QuestRewards, rewardsobj);
                        gamedata.QuestRewards.push(rewardsobj);
                    }

                    jsonobj[key] = val;
                }
            });
            gamedata.Quests.push(jsonobj);
            break;
        case "questset":
            $.each(data, function (key, val) {
                if (!(key == 'undefined' || key == 'type'))     //rewards in quest set is not currently considered
                    jsonobj[key] = val;
            });
            gamedata.QuestSets.push(jsonobj);
            break;


        default:
            break;
    }
}

function copyDatafromtable(pkey, tableName, jsonobj) {
    $.each(tableName, function (index, value) {
        if (pkey == value.id)   //currently dbid is considered as id
            $.each(value, function (key, val) {
                jsonobj[key] = val;
            });
    });
}

$(document).ready(function () {
    $("#btn_setgamedata").click(function () {
        traverseinpdata(inpdata);
        console.log(gamedata);
        // console.log(JSON.stringify(gamedata));
    })
});