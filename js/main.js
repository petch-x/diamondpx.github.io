$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });


    

    /* My Detail */
    $(document).ready(function(){
        var bdYear = 1993;
        var d = new Date();
        var month = d.getMonth();
        var age = parseInt(d.getFullYear())-bdYear;
        age = month < 11 ?age-1:age;
        $('.myAge').text(age).css('font-weight','normal');
    });


    $(document).ready(function(){  
        $('div[id^=portDetail]').hide();

        $('#portfolio a').each(function(i){
            var port = $(this).attr('data-port');
            $(this).click(function(){
                $('#portfolioModal').modal('show');
                $('#portfolioModal').find('.modal-body').empty();
                $('#portfolioModal').find('.modal-title').text($('#portDetail-'+port).attr('title'));
                $('#portfolioModal').find('.modal-body').append($('#portDetail-'+port).html());
            });
        });
     });