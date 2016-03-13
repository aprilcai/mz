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

var src = 'http://localhost:3000/image_url?callback=imageUrl&urls=' + urls

function imageUrl(data){
   console.log(data)
}

var script = document.createElement('script');
script.src = src;
document.body.appendChild(script);
