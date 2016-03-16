try{
	chrome.tabs.executeScript({
		code: 
				['(function() {\n',
					'var imageUrls = document.querySelectorAll(".photo img");\n',
					'var urlArr = [];\n',
					'for(var i = 0, len = imageUrls.length; i < len; i++) {\n',
						'var url = imageUrls[i].getAttribute("src");\n',
						'url && (url = url.replace("small","mw690"));\n',
						'urlArr.push(url);\n',
					'}\n',
					'var urls = urlArr.join(";")\n',
					'var username = document.querySelector(".M_linkd.name").innerHTML;\n',
					'function joinQuery(src, obj) {\n',
						'if(!src) return;\n',
						'if(!obj) return src;\n',
						'if(src.indexOf("?") === -1) {\n',
							'src+="?"\n',
						'}\n',
						'var queryArr = [];\n',
						'for(var key in obj) {\n',
							'if(obj.hasOwnProperty(key)) {\n',
								'var value = key + "=" + obj[key]\n',
								'queryArr.push(value);\n',
							'}\n',
						'}\n',
						'return src + (queryArr.length > 0 ? queryArr.join("&") : "");\n',
					'}\n',
					'var src = "http://localhost:3000/image_url"\n',
					'var queryObj = {\n',
						'callback: "imageUrl",\n',
						'urls: urls,\n',
						'username: encodeURIComponent(username),\n',
					'}\n',
					'src=joinQuery(src, queryObj);\n',
					'//window.imageUrl = function(data) {console.log(data)}\n',
					'var script = document.createElement("script");\n', 
					'script.src = src;\n',
					'script.onload = function(e) {\n',
						'var result = script.innerHTML || ""\n',
						'console.log(result);\n',
						'console.log(script);\n',
					'}\n',
					'document.body.appendChild(script);\n',
				'})()\n'
				].join('')
				
	});
} catch(e){
	alert(e);
}
