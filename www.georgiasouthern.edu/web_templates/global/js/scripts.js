//TOTOP
(function(a){a.fn.UItoTop=function(b){var c={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"};var d=a.extend(c,b);var e="#"+d.containerID;var f="#"+d.containerHoverID;a("body").append('<a href="#" id="'+d.containerID+'">'+d.text+"</a>");a(e).hide().click(function(){a("html, body").animate({scrollTop:0},d.scrollSpeed,d.easingType);a("#"+d.containerHoverID,this).stop().animate({opacity:0},d.inDelay,d.easingType);return false}).prepend('<span id="'+d.containerHoverID+'"></span>').hover(function(){a(f,this).stop().animate({opacity:1},600,"linear")},function(){a(f,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var b=a(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){a(e).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50})}if(b>d.min)a(e).fadeIn(d.inDelay);else a(e).fadeOut(d.Outdelay)})}})(jQuery);


jQuery.noConflict();
jQuery(document).ready(function($){
	
	
	
	$("#nav-bottom").sticky();	
	
	$("#nav-button-quicklinks, .quicklinks-close").click(function(){
		$("#quicklinks-panel").slideToggle().toggleClass("open");
		$("#nav-button-quicklinks").toggleClass("open");
	});
	
	$(".nav-link a").tooltip();
	$(".has-tooltip").tooltip();
	$(".facebook").prepend('<img src="/web_templates/global/img/icons/facebook.png" alt="Facebook" /> ');
	$(".flickr").prepend('<img src="/web_templates/global/img/icons/flickr.png" alt="Flickr" /> ');
	$(".googleplus").prepend('<img src="/web_templates/global/img/icons/googleplus.png" alt="Google Plus" /> ');
	$(".instagram").prepend('<img src="/web_templates/global/img/icons/instagram.png" alt="Instagram" /> ');
	$(".linkedin").prepend('<img src="/web_templates/global/img/icons/linkedin.png" alt="LinkedIn" /> ');
	$(".pinterest").prepend('<img src="/web_templates/global/img/icons/pinterest.png" alt="Pinterest" /> ');
	$(".twitter").prepend('<img src="/web_templates/global/img/icons/twitter.png" alt="Twitter" /> ');
	$(".youtube").prepend('<img src="/web_templates/global/img/icons/youtube.png" alt="YouTube" /> ');
	
	// To Top of Page button
if ( jQuery.isFunction(jQuery.fn.UItoTop) ) {
	$().UItoTop({ easingType: 'easeOutQuart' });
	}
	
	// Lightbox evolution
if ( jQuery.isFunction(jQuery.fn.lightbox) ) {
	jQuery('.lightbox').lightbox();
	}
	
});

function parallaxAnimate() {
	var parallax_end = 510;
	var parallax_factor = 70;
	
	var y = jQuery(window).scrollTop();
	
	if (y < parallax_end) {
		var bgY = 50-( ( (parallax_end - (parallax_end - y) ) / parallax_end ) * parallax_factor);
		jQuery("#feature-main").css('background-position', '50% ' + bgY + '%');
	}
}

jQuery(window).scroll(function(){
	parallaxAnimate();
});


	
	


