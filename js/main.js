$(document).ready(function() {
    $(".buttons button").click(function() {
        var textArea = "#" + $(this).attr("data-textArea");
        $(textArea).val('');
    });
});