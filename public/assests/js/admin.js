$(document).ready(function(){
    $('.removeCategory').click(function(e){
        var id = $(this).data('id');
        $.ajax({
            url:'/admin/categories/delete/'+id,
            type: 'DELETE',
            success: function(){
            }
        });
        window.location = '/admin/categories';
    });

    $('.removeUser').click(function(e){
        var id = $(this).data('id');
        console.log(id);
        $.ajax({
            url:'/admin/users/delete/'+id,
            type: 'DELETE',
            success: function(){
            }
        });
        window.location = '/admin/users';
    });

    $('.removeProduct').click(function(e){
        var id = $(this).data('id');
        $.ajax({
            url:'/admin/products/delete/'+id,
            type: 'DELETE',
            success: function(){

            }
        });
        window.location = '/admin/products';
    });

    $('.removeApproval').click(function(e){
        var id = $(this).data('id');
        $.ajax({
            url:'/admin/approvals/delete/'+id,
            type: 'DELETE',
            success: function(){
            }
        });
        window.location = '/admin/approvals';
    });

    $('.removeSession').click(function(e){
        var id = $(this).data('id');
        $.ajax({
            url:'/admin/sessions/delete/'+id,
            type: 'DELETE',
            success: function(){
            }
        });
        window.location = '/admin/sessions';
    });
    
});
