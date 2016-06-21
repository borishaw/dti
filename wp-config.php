<?php



/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://codex.wordpress.org/Editing_wp-config.php

 *

 * @package WordPress

 */



// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define('DB_NAME', 'adDTI');



/** MySQL database username */

define('DB_USER', 'adDTI');



/** MySQL database password */

define('DB_PASSWORD', 'zu!HFm@AmzfeVVx59M');



/** MySQL hostname */

define('DB_HOST', 'adDTI.db.13967664.hostedresource.com');



/** Database Charset to use in creating database tables. */

define('DB_CHARSET', 'utf8mb4');



/** The Database Collate type. Don't change this if in doubt. */

define('DB_COLLATE', '');



/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define('AUTH_KEY',         'JGBGk{x]KVN-~;Y(-dywavSD>vTHLQZ)OAf:mYFs<lM@lfXAjRrBK7`h7~[SzD@X');

define('SECURE_AUTH_KEY',  '2:jw@=<g_j}7-Ni!|bT;b)=&H<(~~Q4VgT3bQv`),m(Rqu. fTQ%>ylq@2Vj<QH[');

define('LOGGED_IN_KEY',    ';uL8e+MQ7Gx)Fx%](@7+LL5WoyPuCr)r9}.lf&!RBeA:MI*[<~Kk]=Vc&ot3c.k)');

define('NONCE_KEY',        '?X<3QVM~GU?(k&X|sG#w&%A)+S!5x6->^Q#Z5bq|CC&vx/O~X<~|[9vU;7a+Xd~0');

define('AUTH_SALT',        'b.>dyeqNv[P-+9hZw*iw(4R(IH,)-/|;DSntdy5iVBbR|IsV[f&R}+.^[L[A(j7)');

define('SECURE_AUTH_SALT', '>|rgDFo>Gse`d!Zl; 8z7Mnp|P[}}F>2smN]j-p;c.Dp:Taw5t?[eMVHB>)SA%`|');

define('LOGGED_IN_SALT',   '7o1TkjaT c.YcD-8_R<<@U)U7Za$G|(o:^%{:/{VL|4<+)0taAp4yw^W/V40i;`Z');

define('NONCE_SALT',       '/L=tNQS5`~b`dCYAV;aU4L~|a$&>%@QM|*@-Y;`XnE65-Q[[VyLMzSnT&n5FMnSV');



/**#@-*/



/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix  = 'dti_';



/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the Codex.

 *

 * @link https://codex.wordpress.org/Debugging_in_WordPress

 */

define('WP_DEBUG', true);
define( 'WP_DEBUG_LOG', true );
//// Disable display of errors and warnings 
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );



/* That's all, stop editing! Happy blogging. */



/** Absolute path to the WordPress directory. */

if ( !defined('ABSPATH') )

	define('ABSPATH', dirname(__FILE__) . '/');



/** Sets up WordPress vars and included files. */

require_once(ABSPATH . 'wp-settings.php');

