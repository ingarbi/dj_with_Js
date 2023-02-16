const helloWorldBox = document.getElementById("hello-world");
const postsBox = document.getElementById("posts-box");

// helloWorldBox.textContent = 'Hello world'
// helloWorldBox.innerHTML = "Hello <b>world</b>";

$.ajax({
  type: 'GET',
  url: "/hello-world/",
  success: function (response) {
    console.log('succes', response.text);
    helloWorldBox.textContent = response.text
  },
  error: function (err) {
    console.log("error", err);
  },
});

$.ajax({
  type: 'GET',
  url: '/data/',
  success: function(response){
    console.log(response)
    const data = response.data
    data.forEach(element => {
      postsBox.innerHTML += `
        ${element.title} - <b>${element.body}</b> <br>
      `
    });
   
  },
  error: function (err) {
    console.log("error", err);
  },
})
