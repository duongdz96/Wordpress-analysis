<?php

defined('ABSPATH') || exit;

?>

<div class="shopengine shopengine-widget">
	<?php
		$post_type = get_post_type();
		$product = \ShopEngine\Widgets\Products::instance()->get_product($post_type);
		$product_id = $product->get_id();
		$quantity = ( !empty($settings['shopengine_qr_code_product_quantity']['desktop'] ) ? $settings['shopengine_qr_code_product_quantity']['desktop'] : 1 );


		if ( isset($settings['shopengine_qr_code_cart_url']['desktop']) && $settings['shopengine_qr_code_cart_url']['desktop'] == true ) {

			$url = get_the_permalink( $product_id ) . sprintf('?add-to-cart=%s&quantity=%s', $product_id, $quantity );

		} else {

			$url = get_the_permalink( $product_id );
		}

		$title = get_the_title( $product_id );
		$product_url   = urlencode($url);
		$size    = ( !empty($settings['shopengine_qr_code_size']['desktop']) ? $settings['shopengine_qr_code_size']['desktop'] : 150 );
		$size = absint( $size );
		$dimension = esc_attr($size . 'x' . $size);
		$image_url = sprintf( 'https://api.qrserver.com/v1/create-qr-code/?size=%s&ecc=L&qzone=1&data=%s', $dimension, $product_url);

		?>
		<div class="shopengine-qr-code">
			<img src="<?php echo esc_url( $image_url ) ?>" alt="<?php echo esc_attr( $title ); ?>">
		</div>
</div>
