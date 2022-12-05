// Custom UI scripts for CMS/WP sites
// Last updated: 7/24/16

jQuery.noConflict();
jQuery(document).ready(function($){	
	// QuickLinks
	$("#nav-button-quicklinks, .quicklinks-close").click(function(){
		$("#quicklinks-panel").slideToggle().toggleClass("open");
		$("#nav-button-quicklinks").toggleClass("open");
	});	
		//Lightbox effect	
	if ( jQuery.isFunction(jQuery.fn.lightbox) ) {
	jQuery('.lightbox').lightbox();
	}	
	var $count =0;
	jQuery(".ninja_table_wrapper tbody tr").each(function(){
		$count++;
	});
	for(var i=0; i < $count; i++){
		jQuery(".ninja_table_wrapper tbody tr").each(function(){
			jQuery(this).attr('tabindex', 0); 
		});	
	}
	interval = window.setInterval(function(){
	jQuery('#__livechat-assist').each(function(){
		var title = jQuery(this).children("img").attr('title');
		jQuery(this).children("img").attr('alt',title);
		clearInterval(interval);
    });
	}, 3000);
		
	jQuery("#__livechat-assist").each(function(){
		jQuery(this).attr('tabindex',0);
	});	
	function genUrlVars(url){
		var vars = [], hash;
		var hashes = url.slice(url.indexOf('?') +1).split('&');
		for (var i = 0; i<hashes.length; i++){
			hash = hashes[i].split(";");
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	jQuery("#__livechat-assist").keypress(function(){	
		var url = jQuery("#__livechat-assist").next("script").html().substring("po.src=");
		var temp = genUrlVars(url)+"";
		var newurl = "https://app.helponclick.com/help?"+temp.replace("'","");
		console.log(newurl);
		window.open(newurl,'winname','menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,dependent,width=800,height=620,left=0,top=0');
	});
	jQuery(".ninja_table_wrapper tr").keypress(function(){
		//console.log("here"+jQuery(this).attr('class').split(' ')[0]);
		if(jQuery(this).children("td:not(:first-child)").css('display') == 'none'){
			jQuery(this).children("td:not(:first-child)").css('display','block');
			jQuery(".ninja_clmn_nm_sentto").css('display','none');
			jQuery(this).children("td").children("span").removeClass("fooicon-plus");
			jQuery(this).children("td").children("span").addClass("fooicon-minus");
			jQuery(".ninja_table_pro tbody tr").css('display', 'block');
			jQuery(this).next(".footable-detail-row").css('display', 'block');

		}else{
			jQuery(this).children("td:not(:first-child)").css('display','none');
			jQuery(".ninja_clmn_nm_sentto").css('display','none');
			jQuery(".ninja_table_pro tbody tr").css('display', 'block');
			jQuery(this).children("td").children("span").addClass("fooicon-plus");
			jQuery(this).children("td").children("span").removeClass("fooicon-minus");
			jQuery(this).next(".footable-detail-row").css('display', 'none');
		}
	});
	inter = window.setInterval(function(){
	jQuery('.footable-paging .pagination li').each(function(){
		var aria = jQuery(this).attr('aria-label');
		jQuery(this).children("a").attr('aria-label',aria);
		jQuery(this).removeAttr('aria-label');
		clearInterval(inter);
	});
	}, 10);
	
	//News Images
	jQuery('.lwe a >img').each(function(){
			jQuery(this).parent().contents().unwrap();
			jQuery(this).closest('a').removeAttr('href');
			jQuery(this).closest('img').attr('alt',function() {
				return '';
			});
		});
	val = window.setInterval(function(){
		jQuery('.wp_rss_retriever_item_wrapper > a').each(function(){
			jQuery(this).prependTo(this.parentNode);
			clearInterval(val);
		});
		jQuery('.jquery-lightbox-button-close').attr('title','close');
	}, 20);
	interva = window.setInterval(function(){
		jQuery('wp_rss_retriever_image').each(function(){
			jQuery(this).contents.unwrap();
			jQuery(this).closest(a).removeAttr('href');
			jQuery(this).closest('img').attr('alt',function() {
				return '';
			});
			clearInterval(interva);
		});
	}, 20);
	inte = window.setInterval(function(){
		jQuery('.wp_rss_retriever_item_wrapper .portrait').each(function(){
			var height = jQuery(this).parent().contents().css('height');
			var width = jQuery(this).parent().contents().css('width');
			jQuery(this).parent().contents().unwrap();
			jQuery(this).contents().unwrap();
			jQuery(this).closest('a').removeAttr('href');
			jQuery(this).closest('img').attr('alt',function() {
				return '';
			});
			jQuery(this).css('height',height);
			jQuery(this).css('width',width);
			jQuery('.wp_rss_retriever_title').css('display','table-row-group');
			clearInterval(inte);
		});
	}, 20);
	//Legacy functionality for WP sites
	jQuery('.tabswrap').tabs();
	jQuery('.news_item').first().css('border-top', 'none');
	if (jQuery('.autolist').length ) { jQuery('.autolist').autocomplete({ source: autolist }); }
	jQuery(".btn_toggle").click(function(){ jQuery(this).next().slideToggle();});
	jQuery(".btn_toggle").keypress(function(){ jQuery(this).next().slideToggle();});
	jQuery('.btn_dropmenu').click(function(){jQuery('.dropmenu').slideToggle('fast');});
	jQuery('.btn_dropmenu').keypress(function(){jQuery('.dropmenu').slideToggle('fast');});
	jQuery(".btn_toggle").each(function(){
		$(this).attr('tabindex',0);
	});	

});// END PAGE 


	
	


