
const Style = ({settings, breakpoints, cssHelper})=>{

    //this will return object values as a string separated by comma
    const getObjectValues = (obj) => {
        return [...Object.values(obj)].toString();
    }
    
    cssHelper.add('.shopengine-call-for-price a', settings.call_for_price_btn_font_family, (val) => (`
        font-family: ${val.family};
    `)).add('.shopengine-call-for-price a', settings.call_for_price_btn_font_size, (val) => (`
        font-size: ${val}px;
    `)).add('.shopengine-call-for-price a', settings.call_for_price_btn_font_weight, (val) => (`
        font-weight: ${val};
    `)).add('.shopengine-call-for-price a', settings.call_for_price_btn_text_transform, (val) => (`
        text-transform: ${val};
    `)).add('.shopengine-call-for-price a', settings.call_for_price_btn_line_height, (val) => (`
        line-height: ${val}px;
    `)).add('.shopengine-call-for-price a', settings.call_for_price_btn_title_wordspace, (val) => (`
        word-spacing: ${val}px;
    `));

     cssHelper.add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_text_color_normal, (val) => (`
        color: ${val};
        cursor: pointer;
    `)).add('.shopengine-call-for-price a:hover', settings.shopengine_call_for_price_button_text_color_hover, (val) => (`
        color: ${val} !important;
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_bg_color_normal, (val) => (`
        background-color: ${val};
    `)).add('.shopengine-call-for-price a:hover', settings.shopengine_call_for_price_button_bg_color_hover, (val) => (`
        background-color: ${val} !important;
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_border_type, (val) => (`
        border-style: ${val};
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_border_width, (val) => (`
        border-width: ${getObjectValues(val).split(',').join(' ')};
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_border_color, (val) => (`
        border-color: ${val};
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_border_radius, (val) => (`
        border-radius: ${val.top} ${val.right} ${val.bottom} ${val.left};
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_padding, (val) => (`
        padding: ${getObjectValues(val).split(',').join(' ')};
    `)).add('.shopengine-call-for-price a', settings.shopengine_call_for_price_button_margin, (val) => (`
        margin: ${getObjectValues(val).split(',').join(' ')};
    `));

    return cssHelper.get()
}

export { Style }

