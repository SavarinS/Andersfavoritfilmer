const urls = ['https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=1',
'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=2',
'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=3', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=4', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=5', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=6', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=7', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=8', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=9', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=10'];


// use map() to perform a fetch and handle the response for each url
Promise.all(urls.map(url =>
  fetch(url)
  .then((resp) => resp.json())                 
  .then(function(data){
    console.log('Fetch data', data.title);
    const movieList = document.getElementById('movieList');
    //new element for title
    const heading = document.createElement('h3');
    heading.textContent = data.title;

    //new element for actors
    const actors = document.createElement('h4');
    //actors.textContent = data.actors;
    actors.innerHTML+= "Actors: " + data.actors;



    //new element for images
    const img = document.createElement('img');
    img.setAttribute("alt", "No image");
    img.src = data.poster;

    //new element for descption
    const des = document.createElement('p');
    des.textContent = data.description;

    //set class for div element
    const container = document.createElement('div');
    container.setAttribute('class', 'item');


    //display data
        movieList.appendChild(container) // append element li to #wrapper
        container.appendChild(heading) // append heading h3 to element div
        //apppend actors to h4
        container.appendChild(actors)

        //append images to 
        container.appendChild(img)

        //append description to div container
        container.appendChild(des)

        
  })
  .catch(function(error){
    console.log('Fetch not succeed', error);
  })
))
