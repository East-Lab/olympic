var africa;
var asia;
var america;
var europe;
var oceania;

$(function(){
    var json;
    $.ajax({
        url: 'json/conti_medals.json',
        beforeSend: function() {
            console.log("before");
        },
        success: function(data) {
            json = data;
            for (var i = 0; i < data.length; i++) {
                $(".bxslider").append('<li><center><span style="font-size:24px;">' + data[i]["year"] + '</span><br><span style="font-size:28px;">' + data[i]["season"] + "</span></center></li>\n");
            }
            console.log(json);

            $('.bxslider').bxSlider({
                auto: true, 
                autoControls: true,
                hideControlOnEnd: true,
                infiniteLoop: false,
                onSlideAfter: function(x,y,z){
                    var scale = 0.01;
                    africa = 1 + data[z]["medal_num"]["africa"] * scale;
                    asia = 1 + data[z]["medal_num"]["asia"] * scale;
                    america = 1 + data[z]["medal_num"]["america"] * scale;
                    europe = 1 + data[z]["medal_num"]["europe"] * scale;
                    oceania = 1 + data[z]["medal_num"]["oceania"] * scale;

                    $('.blue').css({
                        '-webkit-transform'    : 'translate3d(-114px,0px,0px) scale3d(' + oceania + ',' + oceania + ',' + oceania + ')',
                    });

                    $('.yellow').css({
                        '-webkit-transform'    : 'translate3d(-73px,34px,0px) scale3d(' + asia + ',' + asia + ',' + asia + ')',
                    });
                    $('.black').css({
                        '-webkit-transform'    : 'translate3d(-32px, 0px,0px) scale3d(' + africa + ',' + africa + ',' + africa + ')'
                    });
                    $('.green').css({
                        '-webkit-transform'    : 'translate3d(9px,34px,0px) scale3d(' + europe + ',' + europe + ',' + europe + ')'
                    });
                    $('.red').css({
                        '-webkit-transform'    : 'translate3d(52px,0px,0px) scale3d(' + america + ',' + america + ',' + america + ')'
                    });
                }
            });
        }
    });
});
