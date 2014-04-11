//Buttons

function fbShare (element, url) {
	$(element).append('<a href="http://www.facebook.com/sharer.php?u=' + url + '" target="_blank" class="btn btn-default"><i class="fa fa-facebook fa-lg fb"></i></a>')
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
	$(element).append('<a href="http://www.tumblr.com/share/link?' + url + '&' + title + '&' + description + '" target= "_blank" class="btn btn-default"><i class="fa fa-tumblr fa-lg tumblr"></i></a>');
}

function googleShare (element, url){
	if (url != undefined){var url= 'url=' + url;}
	$(element).append('<a href="https://plus.google.com/share?' + url + '" target= "_blank" class="btn btn-default"><i class="fa fa-google-plus fa-lg google"></i></a>');
}

function linkedin (element, url){
	if (url != undefined){var url= 'url=' + url;}
	$(element).append('<a href="http://www.linkedin.com/shareArticle?' + url + '" target= "_blank" class="btn btn-default"><i class="fa fa-linkedin fa-lg linkedin"></i></a>');
}

function pinterest (element, url, media){
	if (url != undefined){var url= 'url=' + url;}
	if (media != undefined){var media= 'media=' + media;}
	$(element).append('<a href="http://www.linkedin.com/shareArticle?' + url + '&' + media + '" target= "_blank" class="btn btn-default"><i class="fa fa-pinterest fa-lg pinterest"></i></a>');
}



//Main caller

function SHB(arg) {
	var element = arg.element;
	var url = $(element).data('url');
	url = url.replace('http://', 'http%3A%2F%2F');
	var title = $(element).data('title');
	var via = $(element).data('via');
	var hashtags = $(element).data('hashtags');
	var description = $(element).data('description');
	var media = $(element).data('media');
	media = media.replace('http://', 'http%3A%2F%2F');
	if (arg.fb != undefined || arg.twitter != undefined || arg.google != undefined || arg.linkedin != undefined || arg.pinterest != undefined || arg.tumblr != undefined) {var custom = true}
	if (custom == true){
		if (arg.fb == true) {fbShare(element, url)}
		if (arg.twitter == true) {twitter(element, url, title, via, hashtags)}
		if (arg.tumblr == true) {tumblr(element, url, title, description)}
		if (arg.google == true) {googleShare(element, url)}
		if (arg.linkedn == true) {linkedin(element, url)}
		if (arg.pinterest == true) {pinterest(element, url, media)}
		}
	else {
		fbShare(element, url);
		twitter(element, url, title, via, hashtags);
		tumblr(element, url, title, description);
		googleShare(element, url);
		linkedin(element, url);
		pinterest(element, url, media);
	}
}

$(document).ready(function(){
	SHB({
		element : '#shbdata'
	});
})