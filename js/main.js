$(document).ready(function() {
    $(".buttons button").click(function() {
        var textArea = "#" + $(this).attr("data-textArea");
        $(textArea).val('');
    });
});

function handleTogetherJS() {
    if ($(this).text() === 'Start Sharing') {
        $(this).text("Stop Sharing");
    } else if ($(this).text() === 'Stop Sharing') {
        $(this).text("Start Sharing");
    }
    TogetherJS(this); 
    return false;
}


$(function () {
    $("#start-togetherjs").click(function() {
        debugger;
        if ($(this).text() === 'Start Sharing') {
            $(this).text("Stop Sharing");
        } else if ($(this).text() === 'Stop Sharing') {
            $(this).text("Start Sharing");
        }
        TogetherJS(this); 
        return false;
    });
});