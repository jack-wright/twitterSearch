$(document).ready(function(){
    var user = $('#username');
    var result = $('#result');
    var search = $('#search');
    var clear = $('#clear');
    var tweets = $('.tweets');

                        search.click(function(){
                            if(user.val() !== ''){
                                var config = {
                                    screen_name: user.val()
                                }

                                $.ajax({
                                  url: "/tweets_json.php",
                                  dataType: "json",
                                  data: config,
                                  success: function(json){ 
                                   user.prop('disabled', true);
                                    var image = json[0].user.profile_image_url;
                                    var name = json[0].user.name;
                                    var screen_name = json[0].user.screen_name;
                                    tweets.show();
                                    tweets.slideDown();
                                        clear.removeClass('hide');          
                                        search.addClass('hide');  
                                           for(x = 0;  x < 5; x++){
                                                var listitem = json[x].text;
                                                tweets.append('<div class="tweet"><a class="pull-left" href="#"><img class="media-object" src="'+image+'"></a><div class="tweet-body"><h4 class="screen-name"><a><strong>'+name+'</strong></a></h4><small>@'+screen_name+'</small><p class="tweet-text">'+listitem+'</p></div></div>');
                                        
                                            } 
                                  },
                                });
                            }
                        });
                        clear.click(function(){
                            user.prop('disabled', false);
                            user.val('');
                            search.removeClass('hide');
                            clear.addClass('hide');
                            $('.tweet').remove();
                        })   
});