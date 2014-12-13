//ColorScheme
var colorScheme = {
  blue  : '#0386D0',
  yellow: '#FDB232',
  black : '#020202',
  green : '#00A751',
  red   : '#EE344E'
};

// function
$(function(){
  //読み込み完了後の処理

  $('.blue').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['blue'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    //set position
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'scale(1)',
    '-webkit-transform'    : 'translate(0px,0px)',
  });

/**
  $('.yellow').css({
    'border'    : 'solid 6px' + colorScheme['yellow'],
    'width'     : '68px',
    'height'    : '68px',
    'position'  : 'absolute',
    'margin'    : '44px',
    'float'     : 'left',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    '-webkit-transform'    : 'scale(5.0)',
    '-webkit-transform'    : 'translate(44px,34px)',
  })
**/

  $('.yellow').css({
    //draw circle
    'border'    : 'solid 6px' + colorScheme['yellow'],
    'width'     : '68px',
    'height'    : '68px',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    //set position
    'position'  : 'absolute',
    'top'       : '50%',
    'left'      : '50%',
    'float'     : 'left',
    '-webkit-transform'    : 'scale(1)',
    '-webkit-transform'    : 'translate(44px,34px)',
  });

  $('.black').css({
    'border'    : 'solid 6px' + colorScheme['black'],
    'width'     : '68px',
    'height'    : '68px',
    'position'  : 'absolute',
    'margin'    : '44px',
    'margin'    : '44px',
    'float'     : 'left',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    '-webkit-transform'    : 'translate(85px, 0px)'
  })

  $('.green').css({
    'border'    : 'solid 6px' + colorScheme['green'],
    'width'     : '68px',
    'height'    : '68px',
    'position'  : 'absolute',
    'margin'    : '44px',
    'float'     : 'left',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    '-webkit-transform'    : 'scale(1)',
    '-webkit-transform'    : 'translate(129px,34px)'
  })

  $('.red').css({
    'border'    : 'solid 6px' + colorScheme['red'],
    'width'     : '68px',
    'height'    : '68px',
    'position'  : 'absolute',
    'margin'    : '44px',
    'float'     : 'left',
    '-webiit-border-radius': '50%',
    'border-radius'        : '50%',
    '-webkit-transform'    : 'scale(1)',
    '-webkit-transform'    : 'translate(170px,0px)'
  })
});
