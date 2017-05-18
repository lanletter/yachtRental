$(function(){
    $.divselect("#selectdiv1","#inputselect1");
    $.divselect("#selectdiv2","#inputselect2");
    $.divselect("#selectdock1","#inputdock1");
    $.divselect("#selectdock2","#inputdock2");
    $.divselect("#selectdock3","#inputdock3");
});

jQuery.divselect = function(divselectid,inputselectid) {
    var inputselect = $(inputselectid);
    $(divselectid+" cite").click(function(){
        var ul = $(divselectid+" ul");
        if(ul.css("display")=="none"){
            ul.slideDown("fast");
        }else{
            ul.slideUp("fast");
        }
    });
    $(divselectid+" ul li a").click(function(){
        var txt = $(this).text();
        $(divselectid+" cite").html(txt);
        var value = $(this).attr("selectid");
        inputselect.val(value);
        $(divselectid+" ul").hide();

    });
    $(document).click(function(){
        $(divselectid+" ul").hide();
    });
};