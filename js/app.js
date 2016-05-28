$(document).ready(function(){
	instructions();
	play();
});



	$(document).keydown(function(event){
		if(event.keyCode === 88){
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(){
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
	});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function coolMusic () {
	$('#cool-music')[0].volume = 0.5;
	$('#cool-music')[0].load();
	$('#cool-music')[0].play();
}

function play(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			}
			);

	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
}

function instructions(){
	$('.intro').fadeIn(4000, function(){
		$(this).fadeOut(2000, function(){
			$('.main').fadeIn(2000)
		});
	})
}
