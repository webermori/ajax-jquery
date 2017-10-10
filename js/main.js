$(function(){
    $('#AjaxRequest').submit(function(){
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        // console.log(form);
        // console.log(formArray);

        var request = $.ajax({
            method:"GET",
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
            console.log('done');
            console.log(e.name);
            console.log(e);
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