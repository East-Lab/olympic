//ColorScheme
var colorScheme = {
  //olympic color
  blue  : '#18B1DB',
  yellow: '#F9D222',
  black : '#231F20',
  green : '#259F49',
  red   : '#EE2724',
  //others
  bgc   : '#F5F2F2',
  text  : '#231F20',
  stext : '#E5E5E5',
};

$(function(){
  //読み込み完了後の処理
  $('.blue').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['blue'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'overflow'  : 'visible',
    //set position
    'position'  : 'absolute',
    'top'       : '196px',
    'left'      : '50%',
    'margin-left': '-130px',
    'float'     : 'left',
    //'transform' : 'scale(5.0, 5.0)',
  });
  $('.yellow').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['yellow'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'overflow'  : 'visible',
    //set position
    'position'  : 'absolute',
    'top'       : '236px',
    'left'      : '50%',
    'margin-left': '-84px',
    'float'     : 'left',
  });
  $('.black').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['black'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'overflow'  : 'visible',
    //set position
    'position'  : 'absolute',
    'top'       : '196px',
    'left'      : '50%',
    'margin-left': '-40px',
    'float'     : 'left',
  })
  $('.green').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['green'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'overflow'  : 'visible',
    //set position
    'position'  : 'absolute',
    'top'       : '236px',
    'left'      : '50%',
    'margin-left': '4px',
    'float'     : 'left',
  })
  $('.red').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['red'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    'overflow'  : 'visible',
    //set position
    'position'  : 'absolute',
    'top'       : '196px',
    'left'      : '50%',
    'margin-left': '50px',
    'float'     : 'left',
  })

  //bxslider
  var json;
  $.ajax({
    url:'json/conti_medals.json',
    beforeSend: function() {
      console.log("before");
    },
    success: function(data) {
      json = data;
      for (var i = 0; i < data.length; i++) {
        $(".bxslider").append('<li><center><span style="font-size:24x;">' + data[i]["year"] + '</span><br><span style="font-size:28px;">' + data[i]["season"] + "</span></center></li>\n");
      }
      console.log(json);
    }
  })

  //Animation Area
  $('#rings').on('mouseover', function(){
    $('.blue').css({
      'transform' : 'scale(2.0)',
      'transition': '1s',
    });
    $('.yellow').css({
      'transform' : 'scale(1.4)',
      'transition': '1s',
    });
    $('.black').css({
      'transform' : 'scale(1.1)',
      'transition': '1s',
    });
    $('.green').css({
      'transform' : 'scale(1.2)',
      'transition': '1s',
    });
    $('.red').css({
      'transform' : 'scale(1.6)',
      'transition': '1s',
    });
  });
});

