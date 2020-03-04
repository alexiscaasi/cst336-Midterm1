// ISBN Keys
// 0451526538 & 1594200092
// In the "Result" section, display the large cover image and the info
function results(){
    $("#btn").click(function(){
        //console.log("button works");
        // reset containers
        $("#cover").empty();
        $("#info").empty();
        $.ajax({
           method: "GET",
           url: "http://covers.openlibrary.org/b/isbn/9780385533225-S.jpg",
           dataType: "json",
           data:{
               'cover':$("#cover").val()
           },
           success:function(result, status){
               for(let i = 0; i < 1; i++){
                $("#cover").append('<img src="' + result.hits[i].previewURL + '"/>');
               }
           }
        });
        $.ajax({
           method: "GET",
           url: "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback",
           dataType: "json",
           data:{
               'info':$("$info").val()
           },
           success:function(result, status){
               for(let i = 0; i < 1; i++){
                   $("#info").append("Title: " + result.hits[i].title);
                   $("#info").append("Author: " + result.hits[i].author);
                   $("#info").append("Publish: " + result.hits[i].publish);
                   $("#info").append("Publiser: " + result.hits[i].publisher);
                   $("#info").append("ISBN: " + result.hits[i].isbn);
                   $("#pages").append("Pages: " + result.hits[i].pages);
               }
           }
        });
}
results();