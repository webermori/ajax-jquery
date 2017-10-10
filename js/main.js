$(function(){
    $('#AjaxRequest').submit(function(){
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        // console.log(form);
        // console.log(formArray);

        var request = $.ajax({
            method:"POST",
            url:"post.php",
            data: form,
            dataType: "json"

            // data:{
            //     name: $(':input[name=name]').val(),
            //     email:$(':input[name=email]').val(),
            //     tel:$(':input[name=tel]').val()
            // }
        });

        request.done(function(e){
            console.log(e);
            for (var k in e) {
                $(':input[name='+k+']').val(e[k]);
            }
        });

        request.fail(function(e){
            console.log('fail');
            console.log(e);
        });

        request.always(function(e){
            console.log('always');
            console.log(e);
        });

        return false;
    });
});