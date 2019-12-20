/**
 * Consume JSON and show data in home page
 */

 
 const url = 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies';

 fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    console.log('Fetch data', data);
  
      data.forEach(title => {
      console.log(title.title)
        //const movieTitle = title.title;
        const list = document.getElementById('wrapper')
        const heading = document.createElement('h3') //new element for title
        heading.textContent = title.title
        const container = document.createElement('div')
        container.setAttribute('class', 'movie-title') //set class for li element

        
        list.appendChild(container) // append element li to #wrapper
        container.appendChild(heading) // append heading h3 to element li
                
        //console.log('Title:', movieTitle)
      }) //forEach
    
     
  })
    .catch(function(error){
      console.log('Fetch not succeed', error);
  });

  