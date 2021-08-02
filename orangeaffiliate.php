<?php 
/**
 * @package Orange Affiliate Plugin
 */
/*
Plugin Name: Orange Affiliate Plugin
Plugin URI: https://quickandeasylighting.com/
Description:Orange Affiliate Plugin
Version:1.0.0
Author: Josiah Orange
Author URI: http://orangedesigns.co.uk/
License: GPLv2 or later
Text Domain: orangeaffiliate
*/

//security code



if ( ! defined('ABSPATH') ) {
    die;
}

defined( 'ABSPATH' ) or die('Nothing to see here');


function affiliates_activate()
{   
    
    $root = dirname(dirname(dirname(dirname(__FILE__))));
    if (file_exists($root.'/wp-load.php')) {
    // WP 2.6
    require_once($root.'/wp-load.php');
    } else {
    // Before 2.6 
    require_once($root.'/wp-config.php');
    }
    
    global $wpdb;
    $table_name = $wpdb->prefix . "affiliates";
    if ( $wpdb->get_var('SHOW TABLES LIKE ' . $table_name) != $table_name){

        $sql = 'CREATE TABLE ' . $table_name . '(
        id INTEGER(10) UNSIGNED AUTO_INCREMENT, 
        hit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        oaf_link VARCHAR(50),
        PRIMARY KEY (id) )';
    
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);

        add_option('affiliates_database_version', '1.0');
    } 


}

function affiliates_deactivate()
{


}


//plugin code main

class OrangeAffiliate
{


    //settings page stuff 

    public $plugin;

    function __construct(){
        

    }

    function register(){

        //script enqueues
        add_action('admin_enqueue_scripts', array( $this, 'enqueue'));
        add_action('wp_enqueue_scripts', array( $this, 'enqueuefront'));

      
        //admin and settings
        $this->plugin = plugin_basename( __FILE__ );
        add_action( 'admin_menu', array( $this, 'add_admin_pages'));
        add_filter("plugin_action_links_$this->plugin", array( $this, 'settings_link') );

    }

//admin and settings

    
    public function settings_link( $links ){
        $settings_link = '<a href="admin.php?page=orangeaffiliate">Settings</a>';
        array_push( $links, $settings_link);
        return $links;

    }

    public function add_admin_pages(){
        add_menu_page('Orange Affiliate Plugin', 'Orange Affiliate',  'manage_options', 'orangeaffiliate', array( $this, 'admin_index'), 'dashicons-screenoptions', 110);
    }

    public function admin_index(){
        require_once plugin_dir_path( __FILE__ ) . 'templates/admin.php';
     }



//activate and deactivate and uninstall


    function activate(){
        flush_rewrite_rules();
        affiliates_activate();

    }
    function deactivate() {
        flush_rewrite_rules();
        affiliates_deactivate();


    }


//script enqueues

    function enqueue(){
        
        wp_enqueue_style('mypluginstyle', plugins_url( '/assets/orangeaffistyle.css', __FILE__), array(), false, 'all');
        wp_enqueue_script('mypluginscript', plugins_url( '/assets/orangeaffiscript.js', __FILE__));

        //gutenberg blocks register
        //wp_enqueue_script('oaffiliateblockjs', plugins_url( '/assets/gutenberg.js', __FILE__), array('wp-blocks'), false, 'all');

        


        //passing pluginurl php variable into javascript file
        $pluginUrl = plugins_url( '', __FILE__);

        wp_register_script('oaffiliatejs', plugins_url( '/build/index.js', __FILE__), array('wp-blocks'), false, 'all');
        wp_localize_script( 'oaffiliatejs', 'pluginsUrl', array('url' => $pluginUrl));
        wp_enqueue_script('oaffiliatejs');
        
        register_block_type( 'orangeaffiliate/o-affiliateblock', array(
            'editor_script' => 'oaffiliatejs',
        )); 



 
    }

    function enqueuefront(){
        wp_enqueue_script('mypluginscript', plugins_url( '/assets/orangeaffiscriptfront.js', __FILE__));
        wp_enqueue_style('mypluginstyle', plugins_url( '/assets/orangeaffistylefront.css', __FILE__), array(), false, 'all');
    }




    


}



//starting the plugin

if (class_exists('OrangeAffiliate')){
   
    $orangeAffiliate = new OrangeAffiliate();
    $orangeAffiliate->register();




  

}





//activation
register_activation_hook( __FILE__, array($orangeAffiliate, 'activate'));


//deactivation
register_deactivation_hook( __FILE__, array($orangeAffiliate, 'deactivate'));

//uninstall





