// $(function(){
//     $.divselect("#index-input-select","#index-input-select2");
//     $.divselect("#selectdiv1","#inputselect1");
//     $.divselect("#selectdiv2","#inputselect2");
//     $.divselect("#selectdiv3","#inputselect3");
//     $.divselect("#selectdock2","#inputdock2");
//     $.divselect("#selectdock3","#inputdock3");
// });
//
// jQuery.divselect = function(divselectid,inputselectid) {
//     var inputselect = $(inputselectid);
//     $(divselectid+" cite").click(function(){
//         var ul = $(divselectid+" ul");
//         if(ul.css("display")=="none"){
//             ul.slideDown("fast");
//         }else{
//             ul.slideUp("fast");
//         }
//     });
//     $(divselectid+" ul li a").click(function(){
//         var txt = $(this).text();
//         $(divselectid+" cite").html(txt);
//         var value = $(this).attr("selectid");
//         inputselect.val(value);
//         $(divselectid+" ul").hide();
//
//     });
//     $(document).click(function(){
//         $(divselectid+" ul").hide();
//     });
// };

$(function () {
    $(".checkspan").bind("click", function () {
        var ul = $(this).siblings('ul')
        if (ul.is(":hidden")) {
            ul.slideDown('400', function () {
                $(this).find("li").bind("click", function () {
                    var selectLi = $(this).text();
                    $("#select1 a").text(selectLi);
                    $("#select1 ul").slideUp(40);
                })
                ul.mouseleave(function () {
                    $('#select1 ul').slideUp(40)
                });
            });
        } else {
            $(this).siblings('ul').slideUp(40)
        }

    });
    $(".checkspan2").bind("click", function () {
        var ul = $(this).siblings('ul')
        if (ul.is(":hidden")) {
            ul.slideDown('400', function () {
                $(this).find("li").bind("click", function () {
                    var selectLi = $(this).text();
                    $("#select2 a").text(selectLi);
                    $("#select2 ul").slideUp(40);
                })
                ul.mouseleave(function () {
                    $('#select2 ul').slideUp(40)
                });
            });
        } else {
            $(this).siblings('ul').slideUp(40)
        }

    });
    $(".index-input-a").bind("click", function () {
        var ul = $(this).siblings('ul')
        if (ul.is(":hidden")) {
            ul.slideDown('400', function () {
                $(this).find("li").bind("click", function () {
                    var selectLi = $(this).text();
                    $("#index-input-select a").text(selectLi);
                    $("#index-input-select ul").slideUp(40);
                })
                ul.mouseleave(function () {
                    $('#index-input-select ul').slideUp(40)
                });
            });
        } else {
            $(this).siblings('ul').slideUp(40)
        }

    })

})