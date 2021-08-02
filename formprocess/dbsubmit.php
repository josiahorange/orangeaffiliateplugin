<?php 
//define('WP_USE_THEMES', false);
//require_once(BASE_PATH . 'wp-load.php');
//include wp-config or wp-load.php
$root = dirname(dirname(dirname(dirname(dirname(__FILE__)))));
if (file_exists($root.'/wp-load.php')) {
// WP 2.6
require_once($root.'/wp-load.php');
} else {
// Before 2.6
require_once($root.'/wp-config.php');
}

$oaflink = $_POST['user_oaflink']; ?>
<?php
/*$table_name = $wpdb->prefix . "affiliates";

$get = $wpdb->get_results("CREATE TABLE ' . $table_name . '(
    id INTEGER(10) UNSIGNED AUTO_INCREMENT, 
    hit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_agent VARCHAR(255),
    PRIMARY KEY (id) )");

echo "<pre>";print_r($get);echo "</pre>";*/

/*$table_name = $wpdb->prefix . "affiliates";
echo ("hello" . $wpdb->prefix);
if ( $wpdb->get_var('SHOW TABLES LIKE ' . $table_name) != $table_name){

   $sql = 'CREATE TABLE ' . $table_name . '(
       id INTEGER(10) UNSIGNED AUTO_INCREMENT, 
       hit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       oaf_link INTEGER(10),
       PRIMARY KEY (id) )';
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);

    add_option('affiliates_database_version', '1.0');
} */
//$wpdb->query("INSERT INTO `qui336_affiliates`(`oaf_link`) VALUES (\"$oaflink\")"  );

$tablename = $wpdb->prefix . "affiliates";
$wpdb->query("INSERT INTO `$tablename`(`oaf_link`) VALUES (\"$oaflink\")"  );


