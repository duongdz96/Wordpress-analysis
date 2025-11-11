<?php
/**
 * Create test data for CVE-2024-38759 testing
 * Access: http://localhost:8080/create-test-data.php
 */

require_once('wp-load.php');

// Create test posts with serialized data in post_meta
for ($i = 1; $i <= 5; $i++) {
    $post_id = wp_insert_post([
        'post_title' => "Test Post $i for CVE",
        'post_content' => "This is test content with serialized data: a:2:{s:4:\"key1\";s:6:\"value1\";s:4:\"key2\";s:6:\"value2\";}",
        'post_status' => 'publish',
        'post_type' => 'post',
    ]);

    if ($post_id) {
        // Add serialized meta data
        update_post_meta($post_id, '_test_serialized', [
            'field1' => 'value1',
            'field2' => 'value2',
            'field3' => 'test_data_here',
        ]);

        echo "✅ Created post ID: $post_id<br>";
    }
}

// Add serialized option
update_option('test_cve_option', [
    'setting1' => 'value1',
    'setting2' => 'value2',
    'test' => 'malicious_test',
]);

echo "<br>✅ Test data created successfully!<br>";
echo "<br>Now you can:<br>";
echo "1. Go to Search & Replace: <a href='/wp-admin/tools.php?page=search-replace'>Click here</a><br>";
echo "2. Select tables: wp_posts, wp_postmeta, wp_options<br>";
echo "3. Search for: 'value1'<br>";
echo "4. Replace with: 'replaced'<br>";
echo "5. Check 'Dry run'<br>";
echo "6. Submit and debug!<br>";
