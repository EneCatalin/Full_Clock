$( document ).ready(function() {
    //modify page content
    d = new Date();
    var timer = 0;
    var test =null;

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

    function currentTime(){
        if(test ===null) {
            test = setInterval(function () {
                $(".timer").html(timer.toString().toHHMMSS());
                timer++;
            }, 1000)
        }
    }

    function reset(){
        timer =0;
        $(".timer").html(timer.toString().toHHMMSS());
        if(test !==null) {
            clearInterval(test);
            test =null;
        }
    }

    function pause(){
        if(test !==null) {
            clearInterval(test);
            test =null;
        }
    }

    $(document).on("click",".pause",function () {
        $(".pause").val("Start");
        $(".pause").removeClass("pause").addClass("start");
        pause();}
    );


    $( document ).on( "click",".start",function () {
        currentTime();
        $(".start").val("Pause");
        $(".start").removeClass("start").addClass("pause");
    });



    $(".reset").click(function () {
       reset();
    });


    //once it reaches 60 add a 1 and skip to 00
    //repeat

});