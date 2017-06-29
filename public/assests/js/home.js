

// $(function() {
//     var product = $("#products").html();
//     $("#product").attr("hidden", "");
//     for (var i = 0; i < 4; i++) {
//         $("#products").append(product);
//     }
// });
// $('.support-mes #close-support').on('click', function() {
//     $('.support-mes').hide();
// })
var SOPHUT = 10 ;
var motahtml = $("#motahtml").text(),
	newhtml = $.parseHTML(motahtml);

	// $("#motahtml").clear();
	$("#motahtml").replaceWith(newhtml);



function opentab(evt, tabName) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += "active";

            // if(tabName=='gioithieu'){
            // 	var htmltext = document.getElementById(tabName).innerHTML;
            // 	document.getElementById("motahtml").innerHTML= htmltext;
            // }
        }

      
  function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && charCode < 48) || charCode > 57) {
                return false;
            }
            return true;
        }

 function changeavatar(source) {
 			
            var newimage = source;
            document.getElementById("avatar").src = newimage;
        }


// count down timer sau khi tai thoi gian dme nguoc cua phien dau gia







var x = setInterval(function(){
	var listtimer = document.getElementsByClassName("countdown");
	var listbegin = document.getElementsByClassName("begincountdown");
	for(i = 0; i<listtimer.length;i++ ){
		var timer = document.getElementsByClassName("countdown")[i];
		var begintime = document.getElementsByClassName("begincountdown")[i];
		var countDownDate = new Date(timer.getAttribute("value")).getTime();
		var begin = new Date(begintime.getAttribute("value")).getTime();
		// Get todays date and time
	    var now = new Date().getTime();
	    
	    // Find the distance between now an the count down date
	    var distance = countDownDate - now;

	 	// Time calculations for hours, minutes and seconds
	    var hours = Math.floor((distance) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);



	    var string ="";

	    if(hours <10 ){
	    	string +="0"+hours;
	    }
	    else {
	     	string += hours;
	     } 
	    string+=":";
	    if(minutes <10 ){
	    	string +="0"+minutes;
	    }
	    else {
	     	string += minutes;
	     } 
	     string+=":";
	    if(seconds <10 ){
	    	string +="0"+seconds;
	    }
	    else {
	     	string += seconds;
	     }

	    if (distance < 0){
	    		string ="00:00:00";
	    }
	    var  distance2 = begin-now;
	    var thgianmoidang = - distance2; // thời gian bắt đầu cách đây chưa đầy 5 phút 
	    if(thgianmoidang < SOPHUT*60*1000 ){// nếu mới đăng ko quá SOPHUT thì Timer nổi hơn
	    	timer.setAttribute("style", "color: red; font-size : 25px;");
	    	
	    	if((seconds) % (2) == 0 ){
	    		string = "   New   ";
	    	}
	    }


	    if(distance2 > 0 ){// chua bat dau
	    		string ="Coming soon ("+ Math.floor((distance2) / (1000 * 60 * 60))+"h)" ;
	    		timer.setAttribute("style", "color: blue;");
	    }
	    timer.innerHTML = string;
	}
}, 1000);
