$("#input").keypress(function (event) {
  if (event.keyCode === 13) {
    $("#searchBtn").click();
  }
});

$("#searchBtn").on("click", function () {
  var searchTerm = $("#input").val();
  var apiKey = "&api_key=WfQ9o5BOnYW8LDRwkJa4LwH8KgJjcPlR";
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + apiKey;
  var xhr = $.get(queryURL);

  xhr.done(function (data) {
    console.log(data);
    data.data.forEach((ele) => {
      // console.log(ele.images.downsized.url)
      var img = document.createElement("img");
      img.src = ele.images.downsized.url;
      img.classList.add('imgStyle')
      document.getElementById("results").appendChild(img);
    });
  });
});
