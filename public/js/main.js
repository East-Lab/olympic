var colorScheme = {
  blue  : '#0386D0',
  yellow: '#FDB232',
  black : '#020202',
  green : '#00A751',
  red   : '#EE344E'
};

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


  $('.blue').css({
    'border'    : 'solid 6px' + colorScheme['blue'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'translate(-114px,0px) scale(1)',
  });

  $('.yellow').css({
    'border'    : 'solid 6px' + colorScheme['yellow'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'translate(-73px,34px) scale(1)',
  });


  $('.black').css({
    'border'    : 'solid 6px' + colorScheme['black'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'translate(-32px, 0px) scale(1)'
  });

  $('.green').css({
    'border'    : 'solid 6px' + colorScheme['green'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'translate(9px,34px) scale(1)'
  });

  $('.red').css({
    'border'    : 'solid 6px' + colorScheme['red'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'translate(52px,0px) scale(1)'
  });

});
