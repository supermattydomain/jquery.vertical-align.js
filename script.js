/**
 * jQuery vertical alignment plugin.
 * Uses absolute positioning and margin-top to mimic the HTML4 "valign" attribute on table cells.
 * Method expained in detail at:
 * http://phrogz.net/css/vertical-align/index.html
 * Copyright (C) Matt, 2013. GPL version 3 or later, at your option.
 * 
 * To use:
 * 
 * <div id="myDiv" data-valign="middle">Some text</div>
 * followed by:
 * $('#myDiv').valign();
 * 
 * To avoid a Flash Of Unstyled Content, hide vertically-aligned elements
 * in browsers that support Javascript (for example, by using Modernizr)
 * then show them after they have been vertically aligned as above.
 */
(function($) {
	$.fn.valign = function() {
		$(this).each(function(i, elt) {
			var align, mtop;
			// FIXME: position: relative seems to work, but should not according to phrogz.net.
			elt = $(elt);
			align = elt.attr('data-valign');
			// jQuery aways returns margin values in pixels
			mtop = parseInt(elt.css('margin-top'));
			switch (align) {
			case 'top':
				break; // This is the HTML default
			case 'centre':
			case 'center':
			case 'middle':
				elt.css({
					position: 'absolute',
					top: '50%',
					'margin-top': mtop - elt.outerHeight() / 2
				});
				break;
			case 'bottom':
				elt.css({
					position: 'absolute',
					top: '100%'
				});
				debug('top 1: ' + elt.css('top') + ' ' + elt.offset().top);
				elt.css({
					// 'margin-top': mtop - elt.outerHeight()
					top: elt.position().top - elt.outerHeight()
				});
				debug('top 2: ' + elt.css('top') + ' ' + elt.offset().top);
				break;
			default:
				break; // Ignore unrecognised values
			}
		});
		return this;
	};
	$(function() {
		$('[data-valign]').valign().css('visibility', 'visible');
	});
})(jQuery);
jQuery.noConflict();
