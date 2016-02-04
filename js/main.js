function listGallery(data){
	console.log('listGallery:',data);
	var output = '';	
	for(var i=0; i < data.posts.length; i++){
		var title= data.posts[i].title;
		var content= data.posts[i].content;
		var link = data.posts[i].thumbnail;
		var linklarge = data.posts[i].thumbnail_images.slider_thumbs_large.url;
		var blocktype = ((i%3)===2) ? 'c' : ((i%3)===1) ? 'b' : 'a';
		output += '<div class="ui-block-'+ blocktype + '">';
		output += '<a href="#showGallery" data-transition="fade" onclick="showGallery(\''+ linklarge + '\',\''+ title + '\')">';
		output += '<img src="'+ link +' " alt="'+ title + '"/>'
		output += '</a>';
		output += '</div>';		
	} // go through each photo
	$('#gallerylist').html(output);
}

function showGallery(linklarge, title){
	var output = '<a href="#gallery" data-transition="fade">';
	output += '<img src=" '+ linklarge +' " alt=" '+ title +' "/>';
	output += '</a>';	
	$('#mygallery').html(output);
	$('#title-photo').html(title);	
}

function listEntertaiment(data){
	
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts, function(key, val){
		var tempDiv = document.createElement('tempDiv');
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		var excerpt = tempDiv.innerHTML;
		output += '<li>';
		output += '<a href="#entertaimentpost" onclick="showEntertaimentNews(' + val.id + ')">';
		output += '<h3>'+ val.title +'</h3>';
		output += '<p>'+ val.excerpt +'</p>';
		output += '<img src="' + val.thumbnail +'" alt="'+ val.title +'">';
		output += '</li>';	
	});// get JSON data
	output+='</ul>';
	$('#entertaimentlist').html(output);
}// listNews data

function showEntertaimentNews(id){
	$.getJSON('http://johnnyflores.net/portail/?json=get_post&post_id=' + id + '&callback=?',	
	function(data){	
		var output = '';
		output+= '<h3>' + data.post.title + '</h3>';
		output+= data.post.content;
		$('#mynewsentertaiment').html(output);
		$('#title-entertaiment').html('Entertaiment : ' + data.post.title);
	}); // get JSON Data
}// showTechnologyNews

function listTravel(data){
	
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts, function(key, val){
		var tempDiv = document.createElement('tempDiv');
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		var excerpt = tempDiv.innerHTML;
		output += '<li>';
		output += '<a href="#travelpost" onclick="showTravelNews(' + val.id + ')">';
		output += '<h3>'+ val.title +'</h3>';
		output += '<p>'+ val.excerpt +'</p>';
		output += '<img src="' + val.thumbnail +'" alt="'+ val.title +'">';
		output += '</li>';	
	});// get JSON data
	output+='</ul>';
	$('#travellist').html(output);
}// listTravel data

function showTravelNews(id){
	$.getJSON('http://johnnyflores.net/portail/?json=get_post&post_id=' + id + '&callback=?',	
	function(data){	
		var output = '';
		output+= '<h3>' + data.post.title + '</h3>';
		output+= data.post.content;
		$('#mynewstravel').html(output);
		$('#title-travel').html('Travel to : ' + data.post.title);
	}); // get JSON Data
}// showTravelNews

function listTechnology(data){
	
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts, function(key, val){
		var tempDiv = document.createElement('tempDiv');
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		var excerpt = tempDiv.innerHTML;
		output += '<li>';
		output += '<a href="#technologypost" onclick="showTechnologyNews(' + val.id + ')">';
		output += '<h3>'+ val.title +'</h3>';
		output += '<p>'+ val.excerpt +'</p>';
		output += '<img src="' + val.thumbnail +'" alt="'+ val.title +'">';
		output += '</li>';	
	});// get JSON data
	output+='</ul>';
	$('#technologylist').html(output);
}// listTechnology data

function showTechnologyNews(id){
	$.getJSON('http://johnnyflores.net/portail/?json=get_post&post_id=' + id + '&callback=?',	
	function(data){	
		var output = '';
		output+= '<h3>' + data.post.title + '</h3>';
		output+= data.post.content;
		$('#mynewstechnology').html(output);
		$('#title-technology').html('Technology : ' + data.post.title);
	}); // get JSON Data
}// showTechnologyNews


function listNews(data){
	
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts, function(key, val){
		var tempDiv = document.createElement('tempDiv');
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		var excerpt = tempDiv.innerHTML;
		output += '<li>';
		output += '<a href="#newspost" onclick="showNews(' + val.id + ')">';
		output += '<h3>'+ val.title +'</h3>';
		output += '<p>'+ val.excerpt +'</p>';
		output += '<img src="' + val.thumbnail +'" alt="'+ val.title +'">';
		output += '</li>';	
	});// get JSON data
	output+='</ul>';
	$('#newslist').html(output);
}// listNews data

function showNews(id){
	$.getJSON('http://johnnyflores.net/portail/?json=get_post&post_id=' + id + '&callback=?',	
	
	function(data){	
		var output = '';
		output+= '<h3>' + data.post.title + '</h3>';
		output+= data.post.content;
		$('#mynews').html(output);
		$('#title-news').html('News : ' + data.post.title);
	}); // get JSON Data
}// showNews

function listPosts(data){
	
	var output='<ul data-role="listview" data-filter="true">';	
	$.each(data.posts,function(key,val){		
		var tempDiv = document.createElement('tempDiv');
		tempDiv.innerHTML= val.excerpt;
		$("a",tempDiv).remove();
		var excerpt = tempDiv.innerHTML;				
		output += '<li>';
		output += '<a href="#blogpost" onclick="showPost(' + val.id + ')">';
		output += '<h3>' + val.title + '</h3>';		
		output += (val.thumbnail) ?
				'<img src="' + val.thumbnail +'" alt="'+ val.title +'">':
				'<img src="images/book.png" alt="My image">';
		output += '<p>' + val.excerpt + '</p>';
		output += '</a>';
		output += '</li>';
		
	});// got through each post	
	output+='</ul>';
	$('#postlist').html(output);
} // lists all the posts

function showPost(id){
	$.getJSON('http://johnnyflores.net/business/?json=get_post&post_id=' + id + '&callback=?',
	function(data){
	
		var output = '';
		output+= '<h3>' + data.post.title + '</h3>';
		output+= data.post.content;
		$('#mypost').html(output);
	}); // get JSON Data
}// showPost

function listVideos(data){
	
	
	for (var i=0; i<data.feed.entry.length; i++){
		var title= data.feed.entry[i].title.$t;
		var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
		var description = data.feed.entry[0].media$group.media$description.$t
		var id = data.feed.entry[0].id.$t.substring(38)
		var blocktype = ((i%2)===1) ? 'b' : 'a';
		output += '<div class="ui-block- ' + blocktype + '">';
		output += '<a href="#videoplayer" data-transition="fade" onclick="playVideo(\'' + id + '\',\'' + title + '\',\'' + description + '\')">';
		output += '<h3 class="movititle">' + title + '</h3>';
		output += '<img src="' + thumbnail +'" alt=" '+ title +' "/>';
		output += '</a>';
		output += '</div>';		
	}
	
	$('#videolist').html(output);	
}

function playVideo(id, titke, description){
	var output= '<iframe src="http://www.youtube.com/embed/'+ id + '? wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=	1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
	var output='<h3> '+ title +'</h3>';
	var output='<p>'+ unescape(description) +'</p>';
	$('#myplayer').html(output);
}

function jsonFlickrFeed(data){	
	var output = '';	
	for(var i=0; i < data.items.length; i++){
		var title= data.items[i].title;
		var link = data.items[i].media.m.substring(0,56);
		var blocktype = ((i%3)===2) ? 'c' : ((i%3)===1) ? 'b' : 'a';
		output += '<div class="ui-block-'+ blocktype + '">';
		output += '<a href="#showphoto" data-transition="fade" onclick="showPhoto(\''+ link + '\',\''+ title + '\')">';
		output += '<img src="'+ link +'_q.jpg" alt="'+ title + '"/>'
		output += '</a>';
		output += '</div>';		
	} // go through each photo
	$('#photolist').html(output);
} // jsonFlickrFeed

function showPhoto(link, title){
	var output = '<a href="#photos" data-transition="fade">';
	output += '<img src=" '+ link +'_b.jpg" alt=" '+ title +' "/>';
	output += '</a>';
	$('#myphoto').html(output);
}


function listTweets(data){
	
	var output ='<ul data-role="listview" data-theme="a">';
	
	$.each(data, function(key, val){
		var text= data[key].text;
		var thumbnail = data[key].user.profile.image.url;
		var name= data[key].user.name;
		text= text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?.=]+/g, function(i){
			var url=i.link(i);
			return url;
		});
		text = text.replace(/[@]+[A-Za-z0-9-_]+/g, function(i){
			var item = i.replace("0", '');
			var url = i.link("htpp://twitter.com/" + item);
			return url;
		});
		
		text = text.replace(/[#]+[A-Za-z0-9-_]+/g, function(i){
			var item = i.replace("#", '%23');
			var url = i.link("htpp://search.twitter.com/search?q="+item);
			return url;
		})
		output += '<li>';
		output += '<img src="'+ thumbnail +'" alt="Photo of '+ name +'"/>';
		output += '</li>';
	}); // go through each tweet
	
	output += '</ul>';
	$('#tweetlist').html(output);
} // listTweets







































