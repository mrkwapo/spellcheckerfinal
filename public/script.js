/*global axios*/
function getUserWord() {
 const input = document.getElementById("userWord").value;
 console.log(input);
  
  axios.get("/showresults/" + input)
   .then(response => {
    document.getElementById("spellingResults").innerHTML = response.data
   })

}
