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
                //$(".slides").append("<li>" + data[i]["year"] + ":" + data[i]["season"] + "</li>\n");
                $(".slides").append('<li><img src="http://photohito.com/uploads/photo14/user13690/aac94f11a1c601f5682a7b2280e8d3eb/aac94f11a1c601f5682a7b2280e8d3eb_l.jpg" /></li>');
            }
            console.log(json);
        }

    });

    $('.flexslider').flexslider({
        animation: "slide"
    });
});
