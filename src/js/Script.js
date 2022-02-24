let siteCost = 1000;
let designCost = 0;

function calculator(){
	var Design = $('#design').val();
	var adapt = $('#adapt').val();
	var siteType = $('#site__type').val();
	var timing = 0;

	if(siteType == 1){
		timing = 15;
	}
	else if(siteType == 2){
		timing = 20;
	}
	else if(siteType == 3){
		timing = 25;
	}
	else if(siteType == 4){
		timing = 30;
	}

	if(Design == 1){
		designCost = 200;
	}
	else if(Design == 2){
		designCost = 150;
	}
	else if(Design == 3){
		designCost = 300;
	}
	else if(Design == 4){
		designCost = 250;
	}

	let sum = siteCost + designCost;

	let yourAdapt;
	if(adapt == 1){
		sum += sum * 0.5;
		timing += 5;
	}

	$('#sum').html(sum);
	$('#timing').html(timing);
}
