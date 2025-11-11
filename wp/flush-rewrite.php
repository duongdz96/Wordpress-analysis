<?php
/**
 * Flush WordPress Rewrite Rules
 * Access: http://localhost:8080/flush-rewrite.php
 */

// Load WordPress
require_once('wp-load.php');

// Flush rewrite rules
flush_rewrite_rules(true);

echo "✅ Rewrite rules have been flushed!\n";
echo "✅ REST API should now work at: http://localhost:8080/wp-json/\n\n";

// Test REST API
echo "Testing REST API...\n";
$test_url = home_url('/wp-json/');
echo "URL: $test_url\n";

// Make a test request
$response = wp_remote_get($test_url);

if (is_wp_error($response)) {
    echo "❌ Error: " . $response->get_error_message() . "\n";
} else {
    $content_type = wp_remote_retrieve_header($response, 'content-type');
    echo "Content-Type: $content_type\n";

    if (strpos($content_type, 'application/json') !== false) {
        echo "✅ REST API is working correctly!\n";
    } else {
        echo "⚠️ Still returning HTML instead of JSON\n";
        echo "⚠️ Try saving Permalink settings in WordPress Admin\n";
    }
}

echo "\n";
echo "====================================\n";
echo "You can now delete this file.\n";
echo "====================================\n";
