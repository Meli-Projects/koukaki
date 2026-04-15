<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array('parent-style'), filemtime( get_stylesheet_directory() . '/assets/css/style.css'));
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css', array(), '12.0.0');
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js', array(), '12.0.0', true);
    wp_enqueue_script('swiper-init', get_stylesheet_directory_uri() . '/assets/js/swiper-init.js', array('swiper-js'), filemtime(get_stylesheet_directory() . '/assets/js/swiper-init.js'), true);
    wp_enqueue_script('title-scroll', get_stylesheet_directory_uri() . '/assets/js/script.js', array(), '1.0',true);


}

// Récupérer le customizer depuis le thème parent
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // Empêche la mise à jour des options dans le thème enfant
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}