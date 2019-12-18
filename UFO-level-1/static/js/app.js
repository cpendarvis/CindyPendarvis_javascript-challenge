// from data.js
var ufoData = data;

// YOUR CODE HERE!
var ufoData = data;
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(ufoData);

data.forEach((ufoEvent) => {
    var row = tbody.append("tr");
    Object.entries(ufoEvent).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(ufoData);

  var filteredData = ufoData.filter(row => row.datetime === inputValue);
//   var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);
  console.log(filteredData);

  tbody.html("");
    //New List
    filteredData.forEach(function(ufoEvent) {
      var row = tbody.append("tr");
      Object.entries(ufoEvent).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
   });
  
  
  });
  