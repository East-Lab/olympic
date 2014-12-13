var hoge = 10;
$.ajax({
    url: 'json/iconti_medals.json',
    success: function(data) {
        console.log(data);
        //$('body').append(data + "<br />");
    }
});
