const backBtn = document.getElementById("back-btn");
const url = window.location.href + "data/";
const spinnerBox = document.getElementById("spinner-box");

backBtn.addEventListener("click", () => {
  history.back();
});

$.ajax({
  type: "GET",
  url: url,
  success: function (response) {
    spinnerBox.classList.add("not-visible");
  },
  error: function (error) {},
});
