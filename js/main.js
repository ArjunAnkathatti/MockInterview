$(document).ready(function() {
    //Initialize Quill editor
    var question_quill = new Quill('#question-editor', {
        theme: 'snow'
      });

    var editor = ace.edit("code-editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");

    window.Split(['#pane-text-editor', '#pane-code-editor'], {
        minSize: [400, 400],
        elementStyle: function(dimension, size, gutterSize) {
            return {
                'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)',
            }
        },
        gutterStyle: function(dimension, gutterSize) {
            return {
                'flex-basis': gutterSize + 'px',
            }
        }
    });
    
    $("#start-togetherjs").click(function() {
        if ($(this).text() === 'Start Sharing') {
            $(this).text("Stop Sharing");
        } else if ($(this).text() === 'Stop Sharing') {
            $(this).text("Start Sharing");
        }
        
        startTimer();

        TogetherJS(this); 
        return false;
    });

    // change the language
    $('select').change(function () {
        console.log('code editor language changed');
        var optionSelected = $(this).find("option:selected");
        var valueSelected  = optionSelected.val();
        
        var editor = ace.edit("code-editor");
        if (valueSelected === 'java') {
            editor.session.setMode("ace/mode/java");
        } else if (valueSelected === 'python') {
            editor.session.setMode("ace/mode/python");
        } else if (valueSelected === 'javascript') {
            editor.session.setMode("ace/mode/javascript");
        }
        
    });

});

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }

function startTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    countDownDate = new Date();
    countDownDate.addHours(1);

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
    }, 1000);
}
