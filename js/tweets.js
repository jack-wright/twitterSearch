$(function(){

	$.ajax({
		url: 'get_tweets.php',
		type: 'GET',
		success: function(response) {

		
				
				var $tweets = $('<ul></ul>');
				$.each(response, function(i, obj) {
					$tweets.append('<li>' + obj.created_at + '</li>');
				});

				$('.tweets-container').html($tweets);

			
		},
		error: function(errors) {
			$('.tweets-container p:first').text('Request error');
		}
	});
});