$(document).ready(function(){
    $("#tooglenight").change(function() {
        if(this.checked) {
            $("#bd").addClass("night");
            $("i").css("color", "black");
        }else{
            $("#bd").removeClass("night");
            $("i").css("color", "white");
        }
    });
});