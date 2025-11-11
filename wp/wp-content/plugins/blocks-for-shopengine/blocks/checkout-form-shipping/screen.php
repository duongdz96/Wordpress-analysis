<?php
defined('ABSPATH') || exit;
//todo - I do not know why in editor mode does not work without the below code block if there are no product in cart.
// - need more investigation : AR
if(empty(WC()->cart->cart_contents)) {

	wc()->frontend_includes();

	WC()->session = new WC_Session_Handler();
	WC()->session->init();
	WC()->customer = new WC_Customer(get_current_user_id(), true);
	WC()->cart     = new WC_Cart();
}

$checkout = WC()->checkout();

$show_condition = WC()->cart->needs_shipping_address();

if($block->is_editor) {

	$show_condition = true;
}

if($block->is_editor || is_checkout()) { ?>
    <div class="shopengine shopengine-widget">
        <div class="shopengine-checkout-form-shipping">

            <div class="woocommerce-shipping-fields">
				<?php if(true === $show_condition) : ?>

                    <h3 id="ship-to-different-address">
                        <label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                            <input id="ship-to-different-address-checkbox"
                                   class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" <?php checked(apply_filters('woocommerce_ship_to_different_address_checked', 'shipping' === get_option('woocommerce_ship_to_destination') ? 1 : 0), 1); ?>
                                   type="checkbox" name="ship_to_different_address" value="1"/>
                            <span><?php esc_html_e('Ship to a different address?', 'shopengine-gutenberg-addon'); ?></span>
                        </label>
                    </h3>

                    <div class="shipping_address">

						<?php do_action('woocommerce_before_checkout_shipping_form', $checkout); ?>

                        <div class="woocommerce-shipping-fields__field-wrapper">
							<?php

							$fields = $checkout->get_checkout_fields('shipping');

                            if(class_exists('\Shopengine\Core\Register\Module_List')){
					
                                $module_config = \Shopengine\Core\Register\Module_List::instance()->get_module('checkout-additional-field');
                                
                                if(isset($module_config['status']) && $module_config['status'] === 'active'){
            
                                    $initial_priority = 10;
            
                                    foreach($fields as $key => $value) {
            
                                        $fields[$key]['priority'] = $initial_priority;
                                        $initial_priority += 10;
                                    }
                
                                    $module_settings = \Shopengine\Core\Register\Module_List::instance()->get_settings('checkout-additional-field');
                                    $additional_fields = isset($module_settings['shipping']) ? (isset($module_settings['shipping']['value']) ? $module_settings['shipping']['value'] : []) : [];
                                    
                                    foreach($additional_fields as $value) {
                                        
                                        if (isset($value['position']) && isset($fields[$value['position']]['priority'])) {	
                                                                
                                            $priority = $fields[$value['position']]['priority'];						
                    
                                            if(isset($value['name']) && isset($fields['_shopengine_'.$value['name']])){
                                                $fields['_shopengine_'.$value['name']]['priority'] = $priority + 1;
                                            }
                                        }
                                    }
                                }
                
                            }

							foreach($fields as $key => $field) {
								woocommerce_form_field($key, $field, $checkout->get_value($key));
							}
							?>
                        </div>

						<?php do_action('woocommerce_after_checkout_shipping_form', $checkout); ?>

                    </div>

				<?php endif;  ?>
            </div>

        </div>
    </div>
	<?php
}

