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
                $(".slides").append("<li>" + data[i]["year"] + ":" + data[i]["season"] + "</li>\n");
            }
            console.log(json);
        }

    });
});
