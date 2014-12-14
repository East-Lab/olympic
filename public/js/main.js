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
                //$(".bxslider").append('<li><img src="https://pbs.twimg.com/profile_images/378800000381123578/aaa557c7eb7216b93186c2127c320e89.jpeg" /></li>');
            }
            console.log(json);

            $('.bxslider').bxSlider({
                auto: true, 
                autoControls: true,
                hideControlOnEnd: true,
                infiniteLoop: false,
                onSlideAfter: function(x,y,z){
                    console.log("africa:" + data[z]["medal_num"]["africa"]);
                    console.log("asia:" + data[z]["medal_num"]["asia"]);
                    console.log("america:" + data[z]["medal_num"]["america"]);
                    console.log("europe:" + data[z]["medal_num"]["europe"]);
                    console.log("oceania:" + data[z]["medal_num"]["oceania"]);
                }
            });
        }
    });
});
