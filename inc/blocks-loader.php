<?php
/**
 * Registra automaticamente os blocos em /blocks
 */

add_action('init', function () {
    $blocks = ['hello', 'card'];

    foreach ($blocks as $block) {
        $block_json = plugin_dir_path(__FILE__) . "../blocks/{$block}/block.json";
        $dist_asset = plugin_dir_path(__FILE__) . "../dist/{$block}.asset.php";

        if (!file_exists($block_json) || !file_exists($dist_asset)) continue;

        $asset = include $dist_asset;

        wp_register_script(
            "wp24h-{$block}",
            plugins_url("../dist/{$block}.js", __FILE__),
            $asset['dependencies'],
            $asset['version']
        );

        register_block_type(plugin_dir_path(__FILE__) . "../blocks/{$block}", [
            'editor_script' => "wp24h-{$block}"
        ]);
    }
});
