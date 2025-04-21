<?php
/**
 * Plugin Name: WP24H Gutenberg Blocks Base
 * Description: Blocos reutilizáveis Gutenberg prontos para usar e estudar.
 * Version: 1.0.0
 * Author: Asllan Maciel
 */

defined('ABSPATH') || exit;

// Carrega todos os blocos do diretório /blocks
require_once plugin_dir_path(__FILE__) . 'inc/blocks-loader.php';
