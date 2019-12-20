function geturl(url)
{
  $.getJSON(url,
  function(movies){
    //console.log("from geturl function", movies);

    var title = movies.title;
    var id = movies.id;
    var des = movies.description;
    var img = movies.poster;
    var actors = movies.actors;
    
    var html = '';
        html += '<div class="movie">';
        html += '<h2>' + id + ":" + title + '</h2>';
        html += '<img src="' + img + ' ">';
        html += '<p>' + des + '</p>';
        html += '<h3> Actors:' + actors + '</h3>';
        html += '</div>';
        $("#movieList").html(html);

    
   });
}
var urls = ['https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=1',
'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=2',
'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=3', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=4', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=5', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=6', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=7', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=8', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=9', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=10']

    for (var i=0;i<urls.length;i++)
    { 
        geturl(urls[i]);

        
    
    }