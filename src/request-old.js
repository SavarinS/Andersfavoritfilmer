/**
 * Consume JSON and show data in second page
 */


Promise.all ([
	fetch('https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=1'),
	fetch('https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=2')
])
.then(function (responses) {
    // Get a JSON object from each of the responses

    const resp1 = responses[0]
    const resp2 = responses[1]
    console.log('links',resp1.url, resp2.url)
   
    

    

    return responses.map(function (response) {
        return response.json();
    });
})
 .then(function(data){
   console.log('Fetch data', data);
   
    data.forEach(function(film){
      var output = '';
      output += `${film}`;
      document.getElementById("movieList").innerHTML = output;
    })
   
 })
   .catch(function(error){
     console.log('Fetch not succeed', error);
 });

 