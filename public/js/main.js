var hoge = 10;
$.ajax({
    url: 'json/conti_medals.json',
    success: function(data) {
        console.log(data);
        //$('body').append(data + "<br />");
    }
});
