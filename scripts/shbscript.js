//Buttons

var fbShare = function fbShare (element, url) {
	$(element).append('<a href="http://www.facebook.com/sharer.php?u=' + url + '" target="_blank" class="btn btn-default"><i class="fa fa-facebook fa-lg fb"></i></a>')
}

var fbLike = function fbLike (element, url){
	$(element).append('<a href="http://www.facebook.com/plugins/like.php?href=' + url + '" class="btn btn-default"><i class="fa fa-thumbs-o-up fa-lg fb"></i></a>')
}

//var twitter = function twitter (element, url, text, via, hashtags){
//	var url = 'url=' + url
//	var text = 'text=' + text
//	$(element).append('<a href="http://twitter.com/share?' + url + '&' + text '" class="btn btn-default"><i class="fa fa-thumbs-o-up fa-lg fb"></i></a>')
//}

function SHB(arg) {
	var element = arg.element;
	var url = $(element).data('url');
	var text = $(element).data('text');
	var via = $(element).data('via');
	var hashtags = $(element).data('hashtags');
	if (arg.custom == true){
		if (arg.fb == true) {fbShare(element, url)}
		if (arg.fbLike == true) {fbLike(element, url)}
		}
	else {
		fbShare(element, url);
		fbLike(element, url);
	}
}

$(document).ready(function(){
	SHB({
		element : '#shbdata',
		custom : false,
		fb : true,
		fbLike : true,
		twitter : true,
	});
})