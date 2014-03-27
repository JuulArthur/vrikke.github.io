/*
 * ---------------------------------------------------------------- 
 *  
 *  Purity HTML/CSS Template custom jQuery scripts.
 *  
 * ----------------------------------------------------------------  
 */


jQuery(document).ready(function(){	
	

/*
 * ---------------------------------------------------------------- 
 *  FlexSlider
 * ----------------------------------------------------------------  
 */
	
	jQuery(window).load(function() {
		jQuery('#slider').flexslider({
			slideshowSpeed: 4000,
			animationDuration: 700,			
			directionNav: true,
			controlNav: true,
			animation: 'fade'
		});
	});
	
 
/*
 * ---------------------------------------------------------------- 
 *  Dropdown menu
 * ----------------------------------------------------------------  
 */
	
	function mainmenu(){
	$('.nav li').hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300);
	},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
	});
	}
	
	mainmenu();
	
/*
 * ---------------------------------------------------------------- 
 *  Mobile Navigation
 * ----------------------------------------------------------------  
 */		
	
	var dropdown = document.getElementById("mobile-nav");
	function onPageChange() {
		if ( dropdown.options[dropdown.selectedIndex].value != 0 ) {
			location.href = dropdown.options[dropdown.selectedIndex].value;
		}
	}
	dropdown.onchange = onPageChange;
	

/*
 * ---------------------------------------------------------------- 
 *  Image hover effect
 * ----------------------------------------------------------------  
 */
 	
	// Over field
	
	$('.over').stop().animate({ "opacity": 0 }, 0);
 	function over() {
		$('.over').hover(function() {
			$(this).stop().animate({ "opacity": .9 }, 250);
		}, function() {
			$(this).stop().animate({ "opacity": 0 }, 250);
		});	
	}
	
	over();
	
	// Firefox fix
	
	if (window.addEventListener) { 
        window.addEventListener('unload', function() {}, false); 
	} 
	
	
	// Opacity change on hover
	
	function hover_opacity() {
		$('.portfolio img,.content .gallery, .button, .big_button, .search_submit, .flickr_badge_image img').hover(function() {
			$(this).stop().animate({ "opacity": .4 }, 250);
		}, function() {
			$(this).stop().animate({ "opacity": 1 }, 250);
		});
	}
	
	hover_opacity();
	
	
	// Social icons
	
	$('.social img').animate({"opacity": .5 }, 0);
	$('.social img').hover(function() {
    	$(this).stop().animate({ "opacity": 1 }, 250);
    }, function() {
    	$(this).stop().animate({ "opacity": .5 }, 250);
    });
	
	
/*
 * ---------------------------------------------------------------- 
 *  Simple codes
 * ----------------------------------------------------------------  
 */
	
	// Tabs
	
	$('.tabs > ul').tabs();
	
	
	// Toggles
	
	$('.toggle-view li').click(function () {
		var text = $(this).children('p');
		
		if (text.is(':hidden')) {
			text.slideDown('fast');
			$(this).children('h6').addClass('active');		
		} else {
			text.slideUp('fast');
			$(this).children('h6').removeClass('active');		
		}		
	});
	
	
/*
 * ---------------------------------------------------------------- 
 *  Quicksand (Sortable Portfolio)
 * ----------------------------------------------------------------  
 */
 
	if (jQuery().quicksand) {

        (function($) {
            
            $.fn.sorted = function(customOptions) {
                var options = {
                    reversed: false,
                    by: function(a) {
                        return a.text();
                    }
                };
        
                $.extend(options, customOptions);
        
                $data = jQuery(this);
                arr = $data.get();
                arr.sort(function(a, b) {
        
                    var valA = options.by($(a));
                    var valB = options.by($(b));
            
                    if (options.reversed) {
                        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;              
                    } else {        
                        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;  
                    }
            
                });
        
                return $(arr);
        
            };
        
        })(jQuery);
        
        jQuery(function() {
        
            var determine_sort = function($buttons) {
                var $selected = $buttons.parent().filter('[class*="current"]');
                return $selected.find('a').attr('data-value');
            };
        
            var determine_kind = function($buttons) {
                var $selected = $buttons.parent().filter('[class*="current"]');
                return $selected.find('a').attr('data-value');
            };
        
            var $preferences = {
                duration: 500,
                adjustHeight: 'auto'
            }
        
            var $list = jQuery('.portfolio');
            var $data = $list.clone();
        
            var $controls = jQuery('.filter');
        
            $controls.each(function(i) {
        
                var $control = jQuery(this);
                var $buttons = $control.find('a');
        
                $buttons.bind('click', function(e) {
        
                    var $button = jQuery(this);
                    var $button_container = $button.parent();
                    var button_properties = $(this).text().toLowerCase().replace(' ','-');      
                    var selected = button_properties.selected;
                    var button_segment = button_properties.segment;
					
                    if (!selected) {
        
                        $buttons.parent().removeClass();
                        $button_container.addClass('current');
        
                        var sorting_type = determine_sort($controls.eq(1).find('a'));
                        var sorting_kind = determine_kind($controls.eq(0).find('a'));
        
                        if (button_properties == 'all-projects') {
                            var $filtered_data = $data.find('li');
                        } else {
                            var $filtered_data = $data.find('li.' + button_properties);
                        }
        
                        var $sorted_data = $filtered_data.sorted({
                            by: function(v) {
                                return jQuery(v).text().toLowerCase();
                            }
                        });
        
                        $list.quicksand($sorted_data, $preferences, function () {
                                over();
								hover_opacity();
                                prettyPhoto();
                        });
            
                    }
            
                    e.preventDefault();
                    
                });
            
            }); 
            
        });
    
    }
	
/*
 * ---------------------------------------------------------------- 
 *  PrettyPhoto
 * ----------------------------------------------------------------  
 */
	
	function prettyPhoto() {
		$(".gallery a").prettyPhoto({animation_speed:'normal',theme:'pp_default',deeplinking:false,slideshow:3000});
	}
	
	prettyPhoto();
	
	
});