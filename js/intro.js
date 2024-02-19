//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {
    $("#toggle-box").hide();

    $("#toggle-button").click(function() {
        $("#toggle-box").toggle();
    });

    $("#toggle-box").click(function() {
        $(".box").addClass("animate_box");

        setTimeout(function(){
            $(".box").removeClass("animate_box");
        }, 10000);
    });

    $("#name").click(function() {
        $("#toggle-box").css("border-radius", "50px");
    });

    $("#reset-button").click(function() {
        $("#toggle-box").css("border-radius", "5px");
        $("#toggle-box").hide();
    });
});