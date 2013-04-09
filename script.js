(function($) {
	$(function() {
		$('.vertical-centre').add('.vertical-center').each(function(i, elt) {
			elt = $(elt);
			elt.css({
				position: 'absolute',
				top: '50%',
				'margin-top': - elt.height() / 2
			});
		});
	});
})(jQuery);
jQuery.noConflict();
