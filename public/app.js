// Grab the articles as a json
$.getJSON("/articles", function(data) {
  console.log("DATA FROM APP.JS " + data);
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + "</p>" + "<h3>"+ data[i].title + "</h3>" + data[i].link + "<br />" + "<p>" + data[i].summary + "</p>");
    }

  });