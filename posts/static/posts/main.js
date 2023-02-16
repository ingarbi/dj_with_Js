const helloWorldBox = document.getElementById("hello-world");
const postsBox = document.getElementById("posts-box");
const spinnerBox = document.getElementById("spinner-box");
const loadBtn = document.getElementById("load-btn");
const endBox = document.getElementById("end-box");

let visible = 3;

const getData = () => {
  $.ajax({
    type: "GET",
    url: `/data/${visible}`,
    success: function (response) {
      console.log(response);
      const data = response.data;
      setTimeout(() => {
        spinnerBox.classList.add("not-visible");
        data.forEach((element) => {
          postsBox.innerHTML += `
          <div class="card mb-2" >
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.body}</p>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-1">
                  <a href="#" class="btn btn-primary">Details</a>
                </div>
                <div class="col-1">
                  <a href="#" class="btn btn-primary">Like</a>
                </div>
              </div>
            </div>
          </div>
        `;
        });
      }, 150);
      if (response.sizw === 0) {
        endBox.textContent = "No posts added yet...";
      } else if (response.size <= visible) {
        loadBtn.classList.add("not-visible");
        endBox.textContent = "no more posts to load";
      }
    },
    error: function (err) {
      console.log("error", err);
    },
  });
};
loadBtn.addEventListener("click", () => {
  spinnerBox.classList.remove("not-visible");
  visible += 3;
  getData();
});

getData();
