
 

(function () {
   'use strict';
    
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		

        $('.portfolio-item').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery:{enabled:true}
            });
        
            $(".car-magnify-gallery").lightGallery();
        
            $(document).on('click', '.compare-btn', function () {
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                    $.jnoty("Car has been removed from compare list", {
                        header: 'Warning',
                        sticky: true,
                        theme: 'jnoty-warning',
                        icon: 'fa fa-check-circle'
                    });
        
                } else {
                    $(this).addClass('active');
                    $.jnoty("Car has been added to compare list", {
                        header: 'Success',
                        sticky: true,
                        theme: 'jnoty-success',
                        icon: 'fa fa-check-circle'
                    });
                }
            });
        
            $(document).on('click', '.wishlist-btn', function () {
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                    $.jnoty("Car has been removed from wishlist list", {
                        header: 'Warning',
                        sticky: true,
                        theme: 'jnoty-warning',
                        icon: 'fa fa-check-circle'
                    });
        
                } else {
                    $(this).addClass('active');
                    $.jnoty("Car has been added to wishlist list", {
                        header: 'Success',
                        sticky: true,
                        theme: 'jnoty-success',
                        icon: 'fa fa-check-circle'
                    });
                }
            });
        
}());

 
            
          
 