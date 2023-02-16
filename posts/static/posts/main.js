const helloWorldBox = document.getElementById("hello-world");
const postsBox = document.getElementById("posts-box");
const spinnerBox = document.getElementById("spinner-box");

// helloWorldBox.textContent = 'Hello world'
// helloWorldBox.innerHTML = "Hello <b>world</b>";

$.ajax({
  type: "GET",
  url: "/hello-world/",
  success: function (response) {
    console.log("succes", response.text);
    helloWorldBox.textContent = response.text;
  },
  error: function (err) {
    console.log("error", err);
  },
});

$.ajax({
  type: "GET",
  url: "/data/",
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
  },
  error: function (err) {
    console.log("error", err);
  },
});
