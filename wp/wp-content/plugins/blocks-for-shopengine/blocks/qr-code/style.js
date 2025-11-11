
const Style = ({settings, breakpoints, cssHelper})=>{
   
   cssHelper.add('.shopengine-qr-code', settings.shopengine_qr_code_align, (val) => (`
        display: flex; 
        align-items: center; 
        justify-content: ${val};
    `))
   cssHelper.add('.shopengine-qr-code', settings.shopengine_qr_code_align, (val) => (`
        background: none;
    `))

    return cssHelper.get()
}

export { Style }

