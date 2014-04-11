//Buttons

function fbShare (element, url) {
	$(element).append('<a href="http://www.facebook.com/sharer.php?u=' + url + '" target="_blank" class="btn btn-default"><i class="fa fa-facebook fa-lg fb"></i></a>')
}

function fbLike (element, url){
	$(element).append('<a href="http://www.facebook.com/plugins/like.php?href=' + url + '" target="_blank" class="btn btn-default"><i class="fa fa-thumbs-o-up fa-lg fb"></i></a>')
}

function twitter (element, url, title, via, hashtags){
	if (url != undefined){var url = 'url=' + url;}
	if (title != undefined){var title = 'text=' + title;}
	if (via != undefined){var via = 'via=' + via;}
	if (hashtags != undefined){var hashtags = 'hashtags=' + hashtags + ',';}
	$(element).append('<a href="http://twitter.com/share?' + url + '&' + title + '&' + via + '&' + hashtags + '" target= "_blank" class="btn btn-default"><i class="fa fa-twitter fa-lg tw"></i></a>');
}

function tumblr (element, url, title, description){
	if (url != undefined){var url = 'url=' + url;}
	if (title != undefined){var title = 'name=' + title;}
	if (description != undefined){var description = 'description=' + description;}
	$(element).append('<a href="http://www.tumblr.com/share/link?' + url + '&' + title + '&' + description + '" target= "_blank" class="btn btn-default"><i class="fa fa-tumblr fa-lg tw"></i></a>');

}

//Main caller

function SHB(arg) {
	var element = arg.element;
	var url = $(element).data('url');
	var title = $(element).data('title');
	var via = $(element).data('via');
	var hashtags = $(element).data('hashtags');
	if (arg.fb != undefined || arg.fbLike != undefined || arg.twitter != undefined || arg.GooglePlusOne != undefined || arg.GoogleShare != undefined || arg.linkedin != undefined || arg.pinterest != undefined || arg.tumblr != undefined) {var custom = true}
	if (custom == true){
		if (arg.fb == true) {fbShare(element, url)}
		if (arg.fbLike == true) {fbLike(element, url)}
		if (arg.twitter == true) {twitter(element, url, title, via, hashtags)}
		if (arg.tumblr == true) {tumblr(element, url, title, description)}
		}
	else {
		fbShare(element, url);
		fbLike(element, url);
		twitter(element, url, title, via, hashtags);
		tumblr(element, url, title, description);
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