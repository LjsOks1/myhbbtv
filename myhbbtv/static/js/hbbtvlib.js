/*
 * To use This library, You need to add the OIPF application manager objects to your HTML page,
 *
 *	<object id="oipfAppMan" type="application/oipfApplicationManager"></object>
 */

function hbbtvlib_red_initialize(){
  //should be called show() function, if not the application will not be shown;
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);
  appManager.show();

  // IMPORTANT!!: only RED button should be accepted.
  appManager.privateData.keyset.setValue(0x1);
};

function show_broadband_video() {
  var player=document.querySelector("#video_broadband > video");
  player.setAttribute("src","http://techslides.com/demos/sample-videos/small.mp4");
  player.removeAttribute("loop");
  player.addEventListener("ended",function() {
    hide_broadband_video()
  });
  player.play();
  var x = document.getElementById("video_broadband");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function hide_broadband_video() {
  var x = document.getElementById("video_broadband");
  x.style.display = "none";
}
