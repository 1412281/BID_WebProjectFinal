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

    $('.editCategory').click(function(e){
        var id = $(this).data('id');
        $.ajax({
            url:'/admin/categories/edit/'+id,
            type: 'GET',
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

    $('.resetUser').click(function(e){
        var id = $(this).data('id');
        console.log(id);
        $.ajax({
            url:'/admin/users/reset/'+id,
            type: 'GET',
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

    $('.acceptApproval').click(function(e){
        var id = $(this).data('id');
        $.ajax({
            url:'/admin/approvals/edit/'+id,
            type: 'GET',
            success: function(){
            }
        });
        window.location = '/admin/approvals';
    });
});
