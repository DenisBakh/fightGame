//=========================HEADER======================

//=========================FOOTER====================================

//Convert html img to css background
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			//console.log($(this).find('img').attr('src'))
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();