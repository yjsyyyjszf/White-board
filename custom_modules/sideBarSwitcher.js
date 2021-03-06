function browseAsGuest(){
  var elem = document.getElementById("showOnConnect");
  elem.style.display="block";
  elem = document.getElementById("sideBarContent");
  elem.style.display="block";
  elem = document.getElementById("particleHolder");
  elem.style.display="none";
  showDashBoard();
}

function showDashBoard() {
  var elem = document.getElementById("dashboard_section");
  elem.style.display = "block";
  elem = document.getElementById("canvas_section");
  elem.style.display = "none";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "none";
  elem = document.getElementById("call_section");
  elem.style.display = "none";
  elem = document.getElementById("video_call_section");
  elem.style.display = "none";
  elem = document.getElementById("game_section");
  elem.style.display = "none";
  elem = document.getElementById("pdf_section");
  elem.style.display = "none";

  if(window.send!=undefined){

  send('{"partner_currently_in": "DashBoard"}');
}

  updateTitle("DashBoard");

  $("#backButton").hide();

}

function showCanvas() {

  var elem = document.getElementById("dashboard_section");
  elem.style.display = "none";
  elem = document.getElementById("canvas_section");
  elem.style.display = "block";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "none";
  elem = document.getElementById("call_section");
  elem.style.display = "none";
  elem = document.getElementById("video_call_section");
  elem.style.display = "none";
  elem = document.getElementById("game_section");
  elem.style.display = "none";
  elem = document.getElementById("pdf_section");
  elem.style.display = "none";

  send('{"partner_currently_in": "Canvas"}');


  updateTitle("Canvas");
  $("#backButton").show();

}

function showVoiceCall() {
  var elem = document.getElementById("dashboard_section");
  elem.style.display = "none";
  elem = document.getElementById("canvas_section");
  elem.style.display = "none";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "none";
  elem = document.getElementById("call_section");
  elem.style.display = "block";
  elem = document.getElementById("video_call_section");
  elem.style.display = "none";
  elem = document.getElementById("game_section");
  elem.style.display = "none";
  elem = document.getElementById("pdf_section");
  elem.style.display = "none";
  send('{"partner_currently_in": "Voice Call"}');

  updateTitle("Voice Call");
  $("#backButton").show();

}

function showVideoCall() {
  var elem = document.getElementById("dashboard_section");
  elem.style.display = "none";
  elem = document.getElementById("canvas_section");
  elem.style.display = "none";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "none";
  elem = document.getElementById("call_section");
  elem.style.display = "none";
  elem = document.getElementById("video_call_section");
  elem.style.display = "block";
  elem = document.getElementById("game_section");
  elem.style.display = "none";
  elem = document.getElementById("pdf_section");
  elem.style.display = "none";
  send('{"partner_currently_in": "Video Call"}');

  updateTitle("Video Call");
  $("#backButton").show();

}

function showGames() {
  var elem = document.getElementById("dashboard_section");
  elem.style.display = "none";
  elem = document.getElementById("canvas_section");
  elem.style.display = "none";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "none";
  elem = document.getElementById("call_section");
  elem.style.display = "none";
  elem = document.getElementById("video_call_section");
  elem.style.display = "none";
  elem = document.getElementById("game_section");
  elem.style.display = "block";
  elem = document.getElementById("pdf_section");
  elem.style.display = "none";
  elem = document.getElementById("chessView");
  elem.style.display = "none";
  elem = document.getElementById("snakeView");
  elem.style.display = "none";
  elem = document.getElementById("gameContent");
  elem.style.display = "block";
  send('{"partner_currently_in": "Games"}');


  updateTitle("Games");
  $("#backButton").show();

}

function showDropbox() {
  var elem = document.getElementById("dashboard_section");
  elem.style.display = "none";
  elem = document.getElementById("canvas_section");
  elem.style.display = "none";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "block";
  elem = document.getElementById("call_section");
  elem.style.display = "none";
  elem = document.getElementById("video_call_section");
  elem.style.display = "none";
  elem = document.getElementById("game_section");
  elem.style.display = "none";
  elem = document.getElementById("pdf_section");
  elem.style.display = "none";
  send('{"partner_currently_in": "Fil Share"}');

  updateTitle("File drop");
  $("#backButton").show();

}

function showPDF() {
  var elem = document.getElementById("dashboard_section");
  elem.style.display = "none";
  elem = document.getElementById("canvas_section");
  elem.style.display = "none";
  elem = document.getElementById("dropbox_section");
  elem.style.display = "none";
  elem = document.getElementById("call_section");
  elem.style.display = "none";
  elem = document.getElementById("video_call_section");
  elem.style.display = "none";
  elem = document.getElementById("game_section");
  elem.style.display = "none";
  elem = document.getElementById("pdf_section");
  elem.style.display = "block";
  send('{"partner_currently_in": "PDF"}');

  updateTitle("PDF share");
  $("#backButton").show();

}

function showChess() {
  var elem = document.getElementById("gameContent");
  elem.style.display = "none";
  elem = document.getElementById("chessView");
  elem.style.display = "block";
  elem = document.getElementById("snakeView");
  elem.style.display = "none";
  updateTitle("Chess");
  $("#backButton").show();

}

function showSnake() {
  var elem = document.getElementById("gameContent");
  elem.style.display = "none";
  elem = document.getElementById("chessView");
  elem.style.display = "none";
  elem = document.getElementById("snakeView");
  elem.style.display = "block";
  updateTitle("Snake");
  $("#backButton").show();

}

function rollBack() {}

function updateTitle(type) {
  // if(type=="canvas"){
  //
  // }
  // else if(type=="call"){
  //
  // }
  // else if(type=="video"){
  //
  // }
  // else if(type=="pdf"){
  //
  // }
  // else if(type=="file"){
  //
  // }
  // else if(type=="game"){
  //
  // }

  console.log("Called" + type);
  // var elem = document.getElementById("currentWindow");
  // elem.value=type;

  $("#currentWindow").html(type);

}
