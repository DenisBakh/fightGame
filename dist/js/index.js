//=================index.js

$(document).ready(function ($) {
	$('.footer-button__attack').on('click', function (e) {
		e.preventDefault();

		const $this = $('.unit_enemys');
		const $attackBtn = $('.footer-button__attack');

		if ($attackBtn.hasClass('cooldawn')) return;

		$this.addClass('unit_attack');
		$attackBtn.addClass('cooldawn');

		setTimeout(function () {
			$this.removeClass('unit_attack');
			$attackBtn.removeClass('cooldawn');
		}, 600)
	});
})