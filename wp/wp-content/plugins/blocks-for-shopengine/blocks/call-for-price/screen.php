<?php

defined('ABSPATH') || exit;

$phone_number = isset($settings['shopengine_call_for_price_btn_phone_number']['desktop']) ? $settings['shopengine_call_for_price_btn_phone_number']['desktop'] : '123-456-789';
$btn_text = isset($settings['shopengine_call_for_price_btn_text']['desktop']) ? $settings['shopengine_call_for_price_btn_text']['desktop'] : 'Call for Price';
?>

<div class="shopengine shopengine-widget">
	<div class="shopengine-call-for-price">
		<a href="tel:<?php echo esc_html($phone_number); ?>" class="shopengine-call-for-price-btn"><?php echo esc_html($btn_text) ?></a>
	</div>
</div>
