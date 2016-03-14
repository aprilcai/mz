// copy to console and run
// only work for weibo photo.weibo.com
// for @aprilhwong ( she is very beautiful )

var imageUrls = document.querySelectorAll('.photo img');
var urlArr = [];
for(var i = 0, len = imageUrls.length; i < len; i++) {
   var url = imageUrls[i].getAttribute('src');
   url && (url = url.replace('small', 'mw690'));
   //console.log(url);
   urlArr.push(url);
} 
var urls = urlArr.join(';');

var username = document.querySelector('.M_linkd.name').innerHTML;

function joinQuery(src, obj) {
	if(!src) return;
	if(!obj) return src;
	
	if(src.indexOf('?') === -1) {
		src += '?'
	}

	var queryArr = []
	for(var key in obj) {
		if(obj.hasOwnproperty(key)) {
			var value = key + '=' + obj[key];
			queryArr.push(value);
		}
	}

	return src + (queryArr.length > 0 ? queryArr.join('&') : '');
}

var src = 'http://localhost:3000/image_url'
var queryObj = {
	callback: 'imageUrl',
	urls: urls,
	username: encodeURIComponent(username)
}
src = joinQuery(src, queryObj);

//var src = 'http://localhost:3000/image_url?callback=imageUrl&urls=' + urls + '&username='+encodeURIComponent(username)

function imageUrl(data){
   console.log(data)
}

var script = document.createElement('script');
script.src = src;
document.body.appendChild(script);
