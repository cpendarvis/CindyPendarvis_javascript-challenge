// from data.js
var ufoData = data;
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(ufoData);

// Step 2:  Use d3 to append one table row `tr` for each event 
ufoData.forEach(function(ufoEvent) {
  console.log(ufoEvent);
  var row = tbody.append("tr");
});

//Step 3:  Use `Object.entries` to console.log each event
ufoData.forEach(function(ufoEvent) {
  var row = tbody.append("tr");
  Object.entries(ufoEvent).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per event
data.forEach(function(ufoEvent) {
  console.log(ufoEvent);
  var row = tbody.append("tr");

  Object.entries(ufoEvent).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
  });
});

// Step 5: Use d3 to update each cell's text 
data.forEach(function(ufoEvent) {
  console.log(ufoEvent);
  var row = tbody.append("tr");
  Object.entries(ufoEvent).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});