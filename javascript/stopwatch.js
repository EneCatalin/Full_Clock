$( document ).ready(function() {
    //modify page content
    d = new Date();
    var timer = 0;

//this converts an integer to a hour format like 00:12:00
    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    };

  //  $( "#timer" ).html( "1".toHHMMSS());

    //on click update every second
    $("#start").click(function () {
        setInterval(function(){
            $("#timer").html(timer.toString().toHHMMSS());
            timer++;
        },1000)

    });




    //once it reaches 60 add a 1 and skip to 00
    //repeat

});