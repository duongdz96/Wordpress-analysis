
const Style = ({settings, cssHelper})=>{

    cssHelper.add('.shopengine.shopengine-widget .shopengine-product-image .woocommerce-product-gallery__image', settings.shopengine_image_bgc, (val) => (`
        background-color: ${val};
    `));
    cssHelper.add(`.shopengine-product-image .woocommerce-product-gallery__image`, settings.shopengine_image_border_radius, (val) => (`
        border-radius: ${val}px;
    `));
    cssHelper.add(':not(.shopengine_image_gallery_position_bottom) .shopengine-product-image img', settings.shopengine_gallery_thumbs_width, (val) => (`
        width: ${val};
    `));
    cssHelper.add('.shopengine-product-image', settings.shopengine_gallery_thumbs_width, (val) => (`
        position: relative;
    `));
    cssHelper.add('.shopengine_image_gallery_position_bottom .flex-control-thumbs li', settings.shopengine_gallery_thumbs_width, (val) => (`
        flex: 0 0 ${val};
    `));
    cssHelper.add('.shopengine_image_gallery_position_left .flex-viewport, .shopengine_image_gallery_position_right .flex-viewport', settings.shopengine_gallery_thumbs_width, (val) => (`
        width: calc(100% - ${val});
    `));
    cssHelper.add('.shopengine_image_gallery_position_left .shopengine-product-image .onsale, .shopengine_image_gallery_position_left .shopengine-product-image-toggle', settings.shopengine_gallery_thumbs_width, (val) => (`
        margin-left: ${val};
    `));
    cssHelper.add('.shopengine_image_gallery_position_right .shopengine-product-image .onsale, .shopengine_image_gallery_position_right .shopengine-product-image-toggle', settings.shopengine_gallery_thumbs_width, (val) => (`
        margin-right: ${val};
    `));

    cssHelper.add('.shopengine.shopengine-widget .shopengine-product-image .woocommerce-product-gallery__image', settings.shopengine_thumbs_border_style, (val) => (`
        border-style: ${val};
    `));

    cssHelper.add('.shopengine.shopengine-widget .shopengine-product-image .woocommerce-product-gallery__image', settings.shopengine_thumbs_border_width, (val) => (`
        border-width: ${val}px;
    `));
    cssHelper.add(`.shopengine.shopengine-widget .shopengine-product-image .woocommerce-product-gallery__image`, settings.shopengine_thumbs_border_color, (val) => (`
        border-color: ${val};
    `));
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_background, (val) => (`
       background-color: ${val};
    `));
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_radius, (val) => (`
       border-radius: ${val}px;
    `));
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_color, (val) => (`
       color: ${val};
    `));
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_border_color, (val) => (`
       border:1px solid ${val};
       box-shadow:none;
       -webkit-box-shadow:none;
    `));
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_wrapper_size, (val) => (`
       width: ${val}px;
       height: ${val}px;
    `));
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_size, (val) => (`
       font-size: ${val}px;
   `));
 if(settings['shopengine_flash_sale_height_width_status'].desktop === true){
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_flash_sale_height, (val) => (`
        height: ${val}px;
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_flash_sale_width, (val) => (`
        width: ${val}px;
   `));
 }

    
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_flash_sale_radius, (val) => (`
       border-radius: ${val}px;
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_onsale_primary_font_size, (val) => (`
       font-size: ${val}px;
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_onsale_primary_line_height, (val) => (`
       line-height: ${val}px;
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_onsale_primary_text_transform, (val) => (`
       text-transform: ${val};
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_onsale_primary_word_spacing, (val) => (`
       word-spacing: ${val}px;
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_flash_sale_color, (val) => (`
       color: ${val};
    `));
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_flash_sale_background, (val) => (`
       background-color: ${val};
    `));
    cssHelper.add('.shopengine-product-image .onsale', settings.shopengine_onsale_font_family, (val) => (`
       font-family: ${val.family};
    `));

if(settings.shopengine_flash_sale_position.desktop == "custom"){  
    cssHelper.add(' .shopengine-product-image .onsale', settings.shopengine_flash_sale_position, (val) => (`
        top: ${settings.shopengine_flash_sale_position_y_axis.desktop}px;
        left: ${settings.shopengine_flash_sale_position_x_axis.desktop}px;
    `));
}

if(settings.shopengine_lightbox_icon_position.desktop == "custom"){
    cssHelper.add('.shopengine-product-image .shopengine-product-image-toggle', settings.shopengine_lightbox_icon_position, (val) => (`
        top: ${settings.shopengine_lightbox_icon_position_y_axis.desktop}px;
        left: ${settings.shopengine_lightbox_icon_position_x_axis.desktop}px;
    `));   
}

    cssHelper.add('.shopengine-product-image .flex-direction-nav .flex-prev:before, .shopengine-widget .shopengine-product-image .flex-direction-nav .flex-next:before', settings.shopengine_slider_icon_size, (val) => (`
        font-size: ${val}px;
    `));

    cssHelper.add('.shopengine-product-image .flex-direction-nav .flex-prev:before, .shopengine-widget .shopengine-product-image .flex-direction-nav .flex-next:before', settings.shopengine_slider_nav_background, (val) => (`
        background-color: ${val};
    `));

    return cssHelper.get()
}

export { Style };

