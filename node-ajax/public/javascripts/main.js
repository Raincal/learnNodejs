$(function(){
    $('#search').on('keyup', function(e){
        if(e.keyCode === 13){
            var parameters = {search: $(this).val()};
            
            $.get('/searching', parameters, function(data){
                if(data instanceof Array){
                    var str = '';
                    $.each(data, function(i, val){
                        str += '<li><a href="'+ val['about'] +'">'+ val['title'] +'</a><br>'+ val['desc'] +'</li>';
                    });
                    $('#results').html(str);
                }else{
                    $('#results').html(data);
                }
            })
        }
    })
})