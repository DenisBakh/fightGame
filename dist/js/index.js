//=================index.js

$(document).ready(function ($) {
	$('.footer-button__control_attack').on('click', function (e) {
		e.preventDefault();

		const $unit = $('.unit_enemys');
		const $controlBtn = $(this).closest('.footer-button');

		//Проверяем наличие кулдауна
		if ($controlBtn.hasClass('cooldawn')) return;

		//Если способности не на кулдауне, то:
		$unit.addClass('unit_attack'); // Включаем анимацию атаки
		$controlBtn.addClass('cooldawn');//Если процесс атаки или скилла в процессе, то накладываем кулдаун, который не позволит задействовать какие-либо способности в это время

		//Таймер на снятие кулдауна
		setTimeout(function () {
			$unit.removeClass('unit_attack');
			$controlBtn.removeClass('cooldawn');
		}, 600)
	});

	$('.footer-button__control_skill').on('click', function (e) {
		e.preventDefault();

		const $unit = $('.unit_enemys');
		const $controlBtn = $(this).closest('.footer-button');
		const $coolDawn = 1000;

		//Проверяем наличие кулдауна
		if ($controlBtn.hasClass('cooldawn')) return;

		//Проверяем наличие активированного скилла. Если скилл активен, то выключаем его
		if ($unit.hasClass('unit_rage')) {
			$unit.removeClass('unit_rage');
			return;
		};

		//Если способности не на кулдауне и на юните не активирован скилл, то:
		$unit.addClass('unit_skill');// Включаем анимацию активации скилла
		$controlBtn.addClass('cooldawn');//Если процесс атаки или скилла в процессе, то накладываем кулдаун, который не позволит задействовать какие-либо способности в это время

		//Таймер на активацию скилла
		setTimeout(function () {
			$unit.addClass('unit_rage');// Меняем зомби на зомби-rage
		}, $coolDawn / 2)

		//Таймер на снятие кулдауна
		setTimeout(function () {
			$unit.removeClass('unit_skill');
			$controlBtn.removeClass('cooldawn');
		}, $coolDawn)
	});
});