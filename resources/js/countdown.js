var countDownDate = new Date("Jan 31, 2020 17:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = (countDownDate - now)/1000;
    
  var days = Math.floor(distance / (86400));
  var hours = Math.floor((distance % (86400)) / (3600));
  var minutes = Math.floor((distance % (3600)) / (60));
  var seconds = Math.floor((distance % (60)));
    
  if (distance > 14*86400) {
        document.getElementById("countdown").innerHTML = "Welcome to NT";
  }
  
  else if (distance > 4*3600) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! ϙ2 begins in: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
  }
  
  else if (distance > 0) {
        document.getElementById("countdown").innerHTML ="Welcome to NT! James is on his way, via Devil Country, Chocky Town and <i> spits </i> South London. ϙ2 begins in: 
        " + hours + "h " + minutes + "m " + seconds +"s ";
  }
  
  else if (distance > -86400) {
        document.getElementById("countdown").innerHTML = "<big><big>It's NT Time!!! <i>不好猫!</i></big></big>";
  }
  
  else {
        document.getElementById("countdown").innerHTML = "Welcome to NT";
  }
},1000);
