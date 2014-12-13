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
                $(".bxslider").append("<li>" + data[i]["year"] + ":" + data[i]["season"] + "</li>\n");
                //$(".bxslider").append('<li><img src="https://pbs.twimg.com/profile_images/378800000381123578/aaa557c7eb7216b93186c2127c320e89.jpeg" /></li>');
            }
            console.log(json);
        }

    });

    $('.bxslider').bxSlider({
        auto: true, 
        autoControls: true
    });
});
