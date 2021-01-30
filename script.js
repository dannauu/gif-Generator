$("#input").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#searchBtn").click(); 
    } 
}); 



$('#searchBtn').on('click', function searchFunc (){


var searchTerm = $('#input').val();
var apiKey = '&api_key=WfQ9o5BOnYW8LDRwkJa4LwH8KgJjcPlR'
var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + apiKey;
var xhr = $.get(queryURL);

xhr.done(function(data) { console.log("success got data", data);

var source = data.data[0].images.downsized.url;
var source1 = data.data[1].images.downsized.url;
var source2 = data.data[2].images.downsized.url;
var source3 = data.data[3].images.downsized.url;
var source4 = data.data[4].images.downsized.url;
var source5 = data.data[5].images.downsized.url;
var source6 = data.data[6].images.downsized.url;
var source7 = data.data[7].images.downsized.url;
var source8 = data.data[8].images.downsized.url;
var source9 = data.data[9].images.downsized.url;
var source10 = data.data[10].images.downsized.url;
var source11 = data.data[11].images.downsized.url;
var source12 = data.data[12].images.downsized.url;
var source13 = data.data[13].images.downsized.url;
var source14 = data.data[14].images.downsized.url;
var source15 = data.data[15].images.downsized.url;
var source16 = data.data[16].images.downsized.url;
var source17 = data.data[17].images.downsized.url;
var source18 = data.data[18].images.downsized.url;
var source19 = data.data[19].images.downsized.url;
var source20 = data.data[20].images.downsized.url;
var source21 = data.data[21].images.downsized.url;
var source22 = data.data[22].images.downsized.url;
var source23 = data.data[23].images.downsized.url;
var source24 = data.data[24].images.downsized.url;
var source25 = data.data[25].images.downsized.url;
var source26 = data.data[26].images.downsized.url;
var source27 = data.data[27].images.downsized.url;
var source28 = data.data[28].images.downsized.url;
var source29 = data.data[29].images.downsized.url;
var source30 = data.data[30].images.downsized.url;




$("#results").attr("src", source);
$("#results1").attr("src", source1);
$("#results2").attr("src", source2);
$("#results3").attr("src", source3);
$("#results4").attr("src", source4);
$("#results5").attr("src", source5);
$("#results6").attr("src", source6);
$("#results7").attr("src", source7);
$("#results8").attr("src", source8);
$("#results9").attr("src", source9);
$("#results10").attr("src", source10);
$("#results11").attr("src", source11);
$("#results12").attr("src", source12);
$("#results13").attr("src", source13);
$("#results14").attr("src", source14);
$("#results15").attr("src", source15);
$("#results16").attr("src", source16);
$("#results17").attr("src", source17);
$("#results18").attr("src", source18);
$("#results19").attr("src", source19);
$("#results20").attr("src", source20);
$("#results21").attr("src", source21);
$("#results22").attr("src", source22);
$("#results23").attr("src", source23);
$("#results24").attr("src", source24);
$("#results25").attr("src", source25);
$("#results26").attr("src", source26);
$("#results27").attr("src", source27);
$("#results28").attr("src", source28);
$("#results29").attr("src", source29);
$("#results30").attr("src", source30);


console.log(source, source1, source2);

});

})

