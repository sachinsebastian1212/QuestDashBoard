var html_ids = { qs: 0, q: 0, ol: 0, o: 0 };



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


function addDOMElements(params) {
var data;

data ='<li>QuestSet Id<input type="text" name="qs" id="qsId" readonly></li>';
$(".questset").prepend(data);

data='<li>Title <input type="text" name="" id="qTitle" ></li>';
$(".quest").prepend(data);

data='<li>ObjectiveListId<select name="" id="olList" ><option value="">Select Quest</option> </select></li>';
$(".objectivelist").prepend(data);

data='<li>Select Objective<select name="" id="oList" ><option value="">Select Quest</option> </select></li>';
$(".objective").prepend(data);


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
