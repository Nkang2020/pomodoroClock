$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  buzzer.volume= 0.2;
  var breakNum=5;
  var sessionNum=25;
  var time = sessionNum*60;
  var bTime = breakNum*60;
  function pad2(num){
    if (num<10){
      return "0"+num;
    }
    else{
      return num;
    }
  }
  $("#minusBreak").click(function(){
    if (breakNum >0){
    breakNum = breakNum-1;
      bTime = breakNum*60;
    }
    $("#breakNum").html(breakNum);
  });
   $("#plusBreak").click(function(){
    breakNum = breakNum+1;
     bTime = breakNum*60;
    $("#breakNum").html(breakNum);
  });
  $("#minusSession").click(function(){
    if (sessionNum >0){
    sessionNum = sessionNum-1;
      time = sessionNum*60;
    }
    $("#sessionNum").html(sessionNum);
  });
  $("#plusSession").click(function(){
    sessionNum = sessionNum+1;
    time = sessionNum*60;
    $("#sessionNum").html(sessionNum);
  });
  var seshtime;
  var btimer;
  $("#start").click(function(){ 
   seshtime = setInterval(function(){
      time = time-1;
      $("#realTime").html(Math.floor(time/60)+":"+pad2(time%60));
    if (time===0){
      buzzer.play();
      clearInterval(seshtime); 
     btimer = setInterval(function(){
        bTime-=1;
        $("#realTime").html(Math.floor(bTime/60)+":"+pad2(bTime%60));
      if(bTime===0){
        buzzer.play();
        clearInterval(btimer);
        reset();
      }
    },1000);
    }
    },1000);
  });
  function reset(){
    time = sessionNum*60;
    bTime = breakNum*60;
    clearInterval(seshtime);
    clearInterval(btimer)
    $("#realTime").html(Math.floor(time/60)+":"+pad2(time%60));
  };
  $("#reset").click(function(){
    reset();
  });
  $("#pause").click(function(){
    clearInterval(seshtime);
    clearInterval(btimer);
  });
});