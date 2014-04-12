SocialButtons
======

Social HTML Buttons based on the tecnique by [dr.dimitriu](https://github.com/dr-dimitru/SHB-js)

**With SocialButtons you can include social media sharing buttons in your website with 2-8 lines of very simple code.**

Supported social networks:
- Facebook
- Twitter
- Google+
- Tumblr
- Pinterest
- LinkedIN


##Usage
####1) Download the needed [socialbuttons.css](https://raw.githubusercontent.com/fonorobert/SocialButtons/master/styles/socialbuttons.css) and [socialbuttons.js](https://raw.githubusercontent.com/fonorobert/SocialButtons/master/scripts/socialbuttons.js) files

####2) Include SocialButtons css and js files

CSS goes in the ```<head>``` like so:
```html
<link href="socialbuttons.css" rel="stylesheet" type="text/css">
```

JS goes right before the closing ```</body>``` tag

*Don't forget to include jQuery __before__ socialbuttons.js*
```html
<script type="application/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="socialbuttons.js" type="application/javascript"></script>
```

Note:*You'll need Bootstrap3 and Font Awesome to use this plugin! Include them in your project by placing the following in your ```<head>``` section:*
```html
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
```

####3) Build your markup

```html
<div class="btn-group" id="socialbuttons" data-url="http://yourwebsite.com" data-title="Title of sharing" data-description="Description of sharing" data-via="yourtwitter" data-hashtags="hashtags,ForSharing," data-media="http://website.com/path/to/pinterest-media.jpg"></div>
```

Options:

attribute | usage | meaning
----------|-------|---------
data-url|all, required|URL to be shared
data-title|twitter, tumblr|Main text on twitter, title on tumblr
data-description|tumblr, pinterest|Description on tumblr and pinterest
data-via|twitter|twitter user to be mentioned
data-hashtags|twitter|Hashtags to be used on twitter (comma at the end of word marks it as hashtag)
data-media|pinterest|Picture, video or other media for pinterest




####4) Call your buttons


There are two ways to call the script: with all buttons or with only some of them. (Both version go right before ```</body>```, after jQuery and socialbuttons.js)

All buttons: 

```html
<script type="application/javascript">
	SHB('#socialbuttons')
</script>
```

Only a select few:

```html
<script type="application/javascript">
    SHB({
      element: '#socialbuttons',
      fb: true,
      twitter: true,
      linkedin: true
    })
</script>
```
*Option names:*

Social network | Option name
---------------|------------
Facebook | fb
Twitter | twitter
Google+ | google
Tumblr | tumblr
Pinterest | pinterest
LinkedIN | linkedin

