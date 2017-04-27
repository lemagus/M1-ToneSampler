var synth = new Tone.Synth();

var chorus = new Tone.Chorus(4, 2.5, 0.5).toMaster();
synth.connect(chorus);

var distortion = new Tone.Distortion(0.8).toMaster();
synth.connect(distortion);

$(document).ready( function(){
	$('.button').draggable();
	
	$('.button').mouseup( function(){		
		$(this).toggleClass('active');
		
		if(!$(this).hasClass('active')) {
			synth.triggerRelease();
		}
	});
	
	$('.button').on('drag', function(evt){
		var offset = $(this).offset();
		synth.triggerAttackRelease(offset.left * 2);
	});
	
	$('.button.red').on('drag', function(evt){
		var offset = $(this).offset();
		chorus.delayTime = offset.top / 100;
	});
	
	$('.button.blue').on('drag', function(evt){
		var offset = $(this).offset();
		distortion.distortion = offset.top / 100;
	});
	
});