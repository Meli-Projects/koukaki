<?php
/* ===== header menu burger ===== */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <div class="nav-left"></div>

                <div class="nav-center site-title">
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                        <?php bloginfo('name'); ?>
                    </a>
                </div>

                <div class="nav-right">
                    <button class="menu-toggle" aria-controls="menu-overlay" aria-expanded="false" aria-label="Ouvrir le menu">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                </div>
            </nav>

            <div id="menu-overlay" class="menu-overlay" aria-hidden="true">
                <div class="menu-header">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="menu-header__title"><?php bloginfo('name'); ?></a>
                    <button class="menu-close" aria-label="Fermer le menu">✕</button>
                </div>
                <div class="menu-content">
                <ul class="menu">
                    <li><a href="#story">Histoire</a></li>
                    <li><a href="#characters">Personnages</a></li>
                    <li><a href="#place">Lieu</a></li>
                    <li><a href="#studio">Studio Koukaki</a></li>
                </ul>
                </div>
<!-- logo -->
 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/header/logo_menu.png" class="logo_menu" alt="Logo fleurs d'oranger et chats errants ">
                
<p class="menu-footer">STUDIO KOUKAKI</p>
                <!-- Image des fleurs -->
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/orchid.png" class="flower flower_orchid" alt="Image d'un orchidé violette">
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Sunflower.png" class="flower flower_sunflower" alt="Image d'une fleur blanche">
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/random_flower.png" class="flower flower_random" alt="Image d'une fleur rose">
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/flower.png" class="flower flower_orange" alt="Image d'une fleur orange">
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/hibiscus_footer.png" class="flower flower_hibiscus" alt="Image d'une fleur hibiscus">

    <!--  Image des chats -->
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/header/cat_kawaneko.png" class="cat cat_kawaneko" alt="Image d'un personnage chat violet">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/header/cat_onejiiro.png" class="cat cat_onejiiro" alt="Image d'un personnage chat roux">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/header/cat_jaakuna.png" class="cat cat_jaakuna" alt="Image d'un personnage chat gris">
            </div>

        </header>