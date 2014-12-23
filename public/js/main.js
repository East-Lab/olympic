var africa;
var asia;
var america;
var europe;
var oceania;

$(window).load(function(){
    $('.blue').css({
        'top'       : '50%',
        'left'      : '50%',
        'transition': '2s',
    });
    $('.yellow').css({
        'top'       : '50%',
        'left'      : '50%',
        'transition': '2.2s',
    });
    $('.black').css({
        'top'       : '50%',
        'left'      : '50%',
        'transition': '2.4s',
    });
    $('.green').css({
        'top'       : '50%',
        'left'      : '50%',
        'transition': '2.6s',
    });
    $('.red').css({
        'top'       : '50%',
        'left'      : '50%',
        'transition': '3s',
    });
});

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
                $(".bxslider").append('<div style="color:#e5e5e5;" id="place-text' + i + '"><li><center><span style="font-size:24px;">' + data[i]["year"] + '</span><br><span style="font-size:28px;">' + data[i]["place"] + "</span></center></li></div>\n");
            }
            $('#place-text0').css({
                'color' : '#000',
            });
            console.log(json);

            $('.bxslider').bxSlider({
                auto: true, 
                hideControlOnEnd: true,
                infiniteLoop: false,
                onSlideBefore: function(x,y,z){
                    $('#place-text' + z).css({
                        'color' : '#000',
                    });
                    $('#place-text' + (z - 1)).css({
                        'color' : '#e5e5e5',
                    });
                    $('#place-text' + (z + 1)).css({
                        'color' : '#e5e5e5',
                    });
                },
                onSlideAfter: function(x,y,z){
                    var scale = 0.01;
                    africa = 1 + data[z]["medal_num"]["africa"] * scale;
                    asia = 1 + data[z]["medal_num"]["asia"] * scale;
                    america = 1 + data[z]["medal_num"]["america"] * scale;
                    europe = 1 + data[z]["medal_num"]["europe"] * scale;
                    oceania = 1 + data[z]["medal_num"]["oceania"] * scale;

                    $('.blue').css({
                        '-webkit-transform'    : 'translate(-114px,0px) scale(' + oceania + ')',
                    });

                    $('.yellow').css({
                        '-webkit-transform'    : 'translate(-73px,34px) scale(' + asia + ')',
                    });
                    $('.black').css({
                        '-webkit-transform'    : 'translate(-32px, 0px) scale(' + africa + ')'
                    });
                    $('.green').css({
                        '-webkit-transform'    : 'translate(9px,34px) scale(' + europe + ')'
                    });
                    $('.red').css({
                        '-webkit-transform'    : 'translate(52px,0px) scale(' + america + ')'
                    });
                }
            });
        }
    });
});
