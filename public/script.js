/*global fetch*/
function getUserWord() {
 const input = document.getElementById("userWord").value;
document.getElementById("spellingResults").innerHTML = input;

console.log(Object.keys(input));
  
//   axios.get("/getspelling/" + input)
//   .then(response => {
//       console.log(input);
//     document.getElementById("spellingResults").innerHTML = response.data
//   })

// }


fetch("/getspelling" + "?" +"word=" + input)
    .then(response=>response.text())
    .then(function(response){
      console.log(response);
      document.getElementById("spellingResults").innerHTML = response;
    });
  
  
}