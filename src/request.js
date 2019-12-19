/**
 * Consume JSON and show data in second page (show all movies with information)
 */

(function($) {

    $( document ).ready(function() {
        //console.log( "GET request ready!" );

        
        function geturl(url, html)
        {
            $.getJSON(url,
            function(movies){
                //console.log("Movies list",movies.title);

                
                var html = '';
                html += '<li class="movie">';
                html +=  '<h3>' + movies.title + '</h3>';
                html += '<h4> Actors:' + movies.actors + '</h4>';
                html += '<img src="' + movies.poster + ' ">';
                html += '<p>'+ movies.description + '</p>';
                html += '</li>';

                $("#movieList").append(html);
              

        });
        }

        // Set a variable with an array of urls
        var urls = ['https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=1',
        'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=2',
        'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=3', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=4', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=5', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=6', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=7', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=8', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=9', 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=10']

        // For loop to get through all url
            for (var i=0;i<urls.length;i++)
            { 
                geturl(urls[i]);
                
                
               
            }
        

       

           
         

           

    }); //end of document ready



})(jQuery);  // end of function