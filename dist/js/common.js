//=========================HEADER======================

//=========================FOOTER/Controls====================================


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

		doDamage();
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




	function doDamage() {
		const $ELEM_UNIT_ASSASIN_ICON = $('.unit-icon_yours');
		const $ELEM_UNIT_ASSASIN_ICON_HP = $ELEM_UNIT_ASSASIN_ICON.find('.unit-icon__hp-current');
		const $ELEM_UNIT_ASSASIN_ICON_HP_CURRENT = $ELEM_UNIT_ASSASIN_ICON.find('.unit-icon__hp-current-num');

		const $VAL_UNIT_ASSASIN_ICON_HP_TOTAL = $ELEM_UNIT_ASSASIN_ICON.find('.unit-icon__hp-total').text();
		const $VAL_UNIT_ASSASIN_ICON_HP_CURRENT = $ELEM_UNIT_ASSASIN_ICON_HP_CURRENT.text();
		const $VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT = $VAL_UNIT_ASSASIN_ICON_HP_CURRENT / $VAL_UNIT_ASSASIN_ICON_HP_TOTAL;

		const $ELEM_UNIT_ZOMBIE = $('.unit_enemys');
		const $ELEM_UNIT_ASSASIN = $('.unit_yours');
		const $ELEM_UNIT_ASSASIN_HITTED = $ELEM_UNIT_ASSASIN.find('.unit__hitted');
		const $ELEM_UNIT_ASSASIN_EVENT = $ELEM_UNIT_ASSASIN.find('.unit__event');
		const $ELEM_UNIT_ASSASIN_HP_CURRENT = $ELEM_UNIT_ASSASIN.find('.unit__hp-current');
		const $ELEM_UNIT_ASSASIN_HP_EFFECT = $ELEM_UNIT_ASSASIN.find('.unit__hp-effect');

		const $VAL_UNIT_ZOMBIE_IN_RAGE = $ELEM_UNIT_ZOMBIE.hasClass('unit_rage') ? true : false;
		const $VAL_DAMAGE = 20;
		const $VAL_DAMAGE_CRIT_MODIFICATOR = 1.5;
		const $VAL_CRIT_CHANCE = $VAL_UNIT_ZOMBIE_IN_RAGE ? 1 : 0.33;
		const $VAL_IS_CRIT = Math.random() <= $VAL_CRIT_CHANCE;
		const $VAL_DAMAGE_MIN = $VAL_DAMAGE * 0.85;
		const $VAL_DAMAGE_MAX = $VAL_DAMAGE * 1.15;

		const $VAL_DAMAGE_DONE = Math.floor(randomInteger($VAL_DAMAGE_MIN, $VAL_DAMAGE_MAX) * ($VAL_IS_CRIT ? $VAL_DAMAGE_CRIT_MODIFICATOR : 1));
		const $VAL_DAMAGE_DONE_PERCENT = $VAL_DAMAGE_DONE / $VAL_UNIT_ASSASIN_ICON_HP_TOTAL;

		const $VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT_NEW = Math.max($VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT - $VAL_DAMAGE_DONE_PERCENT, 0)

		$ELEM_UNIT_ASSASIN_HP_CURRENT.css('width', ($VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT_NEW) * 100 + '%')

		setTimeout(function () {
			$ELEM_UNIT_ASSASIN_HP_EFFECT.css('width', ($VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT_NEW) * 100 + '%')
		}, 200)

		if ($VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT_NEW <= 0) {
			$ELEM_UNIT_ASSASIN.addClass('unit_dead')
		}

		$ELEM_UNIT_ASSASIN_ICON_HP.css('width', ($VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT_NEW) * 100 + '%')
		$ELEM_UNIT_ASSASIN_ICON_HP_CURRENT.text(Math.floor($VAL_UNIT_ASSASIN_ICON_HP_CURRENT_PERCENT_NEW * $VAL_UNIT_ASSASIN_ICON_HP_TOTAL));



		$ELEM_UNIT_ASSASIN_HITTED.text('-' + $VAL_DAMAGE_DONE);
		$ELEM_UNIT_ASSASIN.addClass('unit_damaged');
		if ($VAL_IS_CRIT) {
			$ELEM_UNIT_ASSASIN.addClass('unit_critted');
		}

		setTimeout(function () {
			$ELEM_UNIT_ASSASIN.removeClass('unit_damaged');
			$ELEM_UNIT_ASSASIN.removeClass('unit_critted');
		}, 600)
	}

	function randomInteger(min, max) {
		return Math.floor(min + Math.random() * (max + 1 - min));
	}
});
