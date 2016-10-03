<?php
require 'tmhOAuth.php'; 
$connection = new tmhOAuth(array(
 	 'consumer_key' => 'bUeYH4U3f0krUH6nGO4n8zZXs',
	'consumer_secret' => 'xZQgEiT59lX9nH5rpNWdzGPC2A5vNbIsamiskyvydBV4pFu9sP',
	'user_token' => '180875865-u3ojFs2j1DlSAWCRxJajh3wPSeZZCw9zAG3Dh7TD', //access token
	'user_secret' => 'jdH913zRyXwnXBiJRUTDRQw8YojaHcR9mCSv5RkF2WOb6' //access token secret
));
// set up parameters to pass
$parameters = array();

if ($_GET['count']) {
	$parameters['count'] = strip_tags($_GET['count']);
}

if ($_GET['screen_name']) {
	$parameters['screen_name'] = strip_tags($_GET['screen_name']);
}

if ($_GET['twitter_path']) { $twitter_path = $_GET['twitter_path']; }  else {
	$twitter_path = '1.1/statuses/user_timeline.json';
}

$http_code = $connection->request('GET', $connection->url($twitter_path), $parameters );

if ($http_code === 200) { // if everything's good
	$response = strip_tags($connection->response['response']);

	if ($_GET['callback']) { // if we ask for a jsonp callback function
		echo $_GET['callback'],'(', $response,');';
	} else {
		echo $response;	
	}
} else {
	echo "Error ID: ",$http_code, "<br>\n";
	echo "Error: ",$connection->response['error'], "<br>\n";
}

// You may have to download and copy http://curl.haxx.se/ca/cacert.pem