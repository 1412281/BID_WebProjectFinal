 $('#SearchName').on('keypress', function(e) {
     if (e.keyCode == 13) {
         var name = $("#SearchName").val();
         console.log(name);

         var url;
         if (document.location.href.includes('type') && document.location.href.includes('name')) {
             u = window.location.href.replace(/(name=).*?(&)/, '$1' + name + '$2');
             console.log(u);
             var i = 0;
             url = u;
         } else if (document.location.href.includes('?type')) {
             url = window.location.href + "&name=" + name + '&';
         } else {
             url = window.location.protocol + "/search?name=" + name + '&';
         }

         document.location = url;
     }
 });
 $("#searchBtn").on("click", function() {
     var name = $("#name").val();
     console.log(name);
     var url;
     if (document.location.href.includes('type') && document.location.href.includes('name')) {
         u = window.location.href.replace(/(name=).*?(&)/, '$1' + name + '$2');
         console.log(u);
         var i = 0;
         url = u;
     } else if (document.location.href.includes('?type')) {
         url = window.location.href + "&name=" + name + '&';
     } else {
         url = window.location.protocol + "/search?name=" + name + '&';
     }

     document.location = url;
 });

 $('#incBtn').on("click", function() {
     var url;
     if (document.location.href.includes('time')) {
         url = window.location.href.replace(/(time=).*?(&)/, '$1' + 'inc' + '$2');
     } else {

         url = window.location.href + "&time=inc" + '&';
     };
     document.location = url;
 });

 $('#decBtn').on("click", function() {
     var url;
     if (document.location.href.includes('time')) {
         url = window.location.href.replace(/(time=).*?(&)/, '$1' + 'dec' + '$2');
     } else {

         url = window.location.href + "&time=dec" + '&';
     };
     document.location = url;
 });