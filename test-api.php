<?php
/**
 * Test script để verify REST API endpoint
 * Chạy: php test-api.php
 */

// Đổi URL theo môi trường của bạn
$base_url = 'http://localhost:8888'; // Hoặc http://your-wordpress-site.local

echo "=== Testing Gutenkit REST API Endpoints ===\n\n";

// Test 1: Kiểm tra REST API root
echo "1. Testing REST API root...\n";
$response = @file_get_contents("$base_url/wp-json/");
if ($response) {
    echo "✅ REST API is working\n\n";
} else {
    echo "❌ REST API is NOT working - Check permalinks!\n\n";
}

// Test 2: Kiểm tra Gutenkit namespace
echo "2. Testing Gutenkit namespace...\n";
$response = @file_get_contents("$base_url/wp-json/gutenkit/v1/");
if ($response) {
    echo "✅ Gutenkit namespace is registered\n";
    echo "Available routes:\n";
    $data = json_decode($response, true);
    if ($data && isset($data['routes'])) {
        foreach ($data['routes'] as $route => $info) {
            echo "  - $route\n";
        }
    }
} else {
    echo "❌ Gutenkit namespace NOT found - Plugin may not be activated\n";
}

echo "\n3. Testing install-active-plugin endpoint...\n";
echo "Command to test with curl:\n";
echo "curl -X POST '$base_url/wp-json/gutenkit/v1/install-active-plugin' \\\n";
echo "  -H 'Content-Type: application/json' \\\n";
echo "  -d '{\"plugin\":\"http://example.com/plugin.zip\", \"slug\":\"test-plugin\"}'\n";
