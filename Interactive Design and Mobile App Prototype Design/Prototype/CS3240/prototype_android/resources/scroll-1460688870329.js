(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-2cce200a-d152-4cc6-9bc0-7ab6b1303f5f .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-f1619bdd-1454-4ebe-895c-c25563795fc1 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-1a673c13-deee-4e7f-9f3a-4cb65bdff874 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-ab859da8-164a-40d0-ac4a-8cddb56cf40e .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-ab859da8-164a-40d0-ac4a-8cddb56cf40e #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-777823c9-a1bc-478d-a7f2-c995b358061c .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-777823c9-a1bc-478d-a7f2-c995b358061c #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);