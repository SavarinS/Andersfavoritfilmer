(function($) {

    $( document ).ready(function() {
        console.log( "document ready!" );
       
        //Ajax method to make an HTTP call
        const Url = 'https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies';
        $.ajax({ //loading data by ajax
            type: "GET",
            url: Url,
            timeout: 2000,
            complete: function() {
              //console.log('Connection is complete.');
            },
            success: function(myData) {
              //console.log(" Movies ", myData);

              //Display data
            var html = '';
              myData.forEach(movie => {// Log each movie's title
                //console.log("Title:",movie.title)
                html += '<ul class= "moive">';
                html += '<li>' + movie.id + '.' + "" + movie.title + '</li>';
                //html += '<a href="movieList.html">Läs mer</a>';
                html += '</ul>';
                $("#wrapper").html(html);
              })
            },
            error: function() {
              console.log('Connection failed!');
            }

          }); //end of ajax

         

        
         
         
         
    
    



    }); //end of document ready



})(jQuery);  // end of function