function More() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("MoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show Station List"; 
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Hide Station List"; 
    moreText.style.display = "inline";
  }
}

function StationNumber() {
  var x =document.getElementById("Stations").rows.length -1;
    return "We have visited " + x + " stations";
}

function TubeMore() {
  var tubedots = document.getElementById("tubedots");
  var tubemoreText = document.getElementById("tubemore");
  var tubebtnText = document.getElementById("TubeMoreBtn");

  if (tubedots.style.display === "none") {
    tubedots.style.display = "inline";
    tubebtnText.innerHTML = "Show Tube Station List"; 
    tubemoreText.style.display = "none";
  } 
  else {
    tubedots.style.display = "none";
    tubebtnText.innerHTML = "Hide Tube Station List"; 
    tubemoreText.style.display = "inline";
  }
}

function TubeStationNumber() {
  var x = document.getElementById("TubeStations").rows.length -1;
    return "We have visited " + x + " Tube Stations";
}

function IkeaMore() {
  var ikeadots = document.getElementById("ikeadots");
  var ikeamoreText = document.getElementById("ikeamore");
  var ikeabtnText = document.getElementById("IkeaMoreBtn");

  if (ikeadots.style.display === "none") {
    ikeadots.style.display = "inline";
    ikeabtnText.innerHTML = "Show IKEA List"; 
    ikeamoreText.style.display = "none";
  } 
  else {
    ikeadots.style.display = "none";
    ikeabtnText.innerHTML = "Hide IKEA List"; 
    ikeamoreText.style.display = "inline";
  }
}

function IkeaNumber() {
  var x = document.getElementById("IKEA").rows.length -1;
    return "We have visited " + x + " IKEAs";
}
