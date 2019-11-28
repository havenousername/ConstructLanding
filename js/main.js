let hideContainer = document.querySelectorAll('.icon-container');
for (let i = 0; i < hideContainer.length; i++) {
  hideContainer[i].style.position = "absolute"
  hideContainer[i].style.display = "none";
}
$(document).ready(function () {
  $(".jquery-btn-1").click(function () {
    $(".icon-wrap-1").fadeIn();
    $(".jquery-btn-1").hide();
  });
  $(".jquery-btn-2").click(function () {
    $(".icon-wrap-2").fadeIn();
    $(".jquery-btn-2").hide();
  });
  $(".jquery-btn-3").click(function () {
    $(".icon-wrap-3").fadeIn();
    $(".jquery-btn-3").hide();
  });
});