function print(out) {
  document.getElementById("control").innerHTML = out;
}
// window.alert(6+5 + "\nHey");
var d = new Date();
print(d);
var x = 0;
var numlikes = 0;
function addlike() {
  const fs = require('fs');
  var num = 0;
  fs.readFile('likes.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    // Converting Raw Buffer to text
    // data using tostring function.
    num = int(data);
  })
  num += 1;
  document.write(num);
  console.log(num);
  fs.writeFile('likes.txt', string(num), (err) => {
    if (err) throw err;
  })
  // (document.getElementById("pagelikes"))
  numlikes = num;
}
print(numlikes);
