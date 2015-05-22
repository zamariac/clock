
function clock(){
    var myDate = new Date();
    // console.log("clock")
    console.log(myDate);

    var clock=document.getElementById("clock")
    clock.innerHTML= myDate
   
}
    // clock()


setInterval(clock,1000);

// var intervalId= setInterval (clock, 1000);




// function getTime(){
//         		var now = new Date();
//                 var h = now.getHours();
//                 var m = now.getMinutes();
//                 var s = now.getSeconds();
               
//                 m = checkTime(m);
//                 s = checkTime(s);
               
//                 document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
               
//                 setTimeout("getTime()", 1000);
//         }
       
//         	function checkTime(time){
//                 if(time<10){
//                   time = "0" + time;     
//                 }
               
//                 return time;
//         }
