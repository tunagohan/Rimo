	//Declaration
    var myFirebaseRef = new Firebase("[firebaseURL]");
	var cs;
	var ps;
	var powerstate;
	var colorstate;

	//Power Status
	myFirebaseRef.child("power").on("value", function(powersnapshot) {
		ps = powersnapshot.val();

		if (powersnapshot.val()) {
			powerstate = "<h5 class='center'><i class='fa fa-play-circle-o'></i>Power ON</h5>";
			$('.js-light-on').addClass('disabled');
			$('.js-light-off').removeClass('disabled');
		} else {
			powerstate = "<h5 class='center'><i class='fa fa-stop-circle-o'></i>Power OFF</h5>";
			$('.js-light-off').addClass('disabled');
			$('.js-light-on').removeClass('disabled');
		}
		$('.js-power-state-output').html(powerstate)
	});

	//Power Status color
	myFirebaseRef.child("color").on("value", function(colorsnapshot) {
		cs = colorsnapshot.val();
		switch (colorsnapshot.val()){
			case "Red":
				colorstate = "<h5 class='center'><i class='fa fa-play-circle-o'></i>Red</h5>";
				$('.js-Red-on').addClass('disabled');
				$('.js-Green-on').removeClass('disabled');
				$('.js-Blue-on').removeClass('disabled');
				$('.js-Orange-on').removeClass('disabled');
				$('.js-White-on').removeClass('disabled');
			break;

			case "Green":
				colorstate = "<h5 class='center'><i class='fa fa-play-circle-o'></i>Green</h5>";
				$('.js-Red-on').removeClass('disabled');
				$('.js-Green-on').addClass('disabled');
				$('.js-Blue-on').removeClass('disabled');
				$('.js-Orange-on').removeClass('disabled');
				$('.js-White-on').removeClass('disabled');
			break;

			case "Blue":
				colorstate = "<h5 class='center'><i class='fa fa-play-circle-o'></i>Blue</h5>";
				$('.js-Red-on').removeClass('disabled');
				$('.js-Green-on').removeClass('disabled');
				$('.js-Blue-on').addClass('disabled');
				$('.js-Orange-on').removeClass('disabled');
				$('.js-White-on').removeClass('disabled');
			break;

			case "Orange":
				colorstate = "<h5 class='center'><i class='fa fa-play-circle-o'></i>Orange</h5>";
				$('.js-Red-on').removeClass('disabled');
				$('.js-Green-on').removeClass('disabled');
				$('.js-Blue-on').removeClass('disabled');
				$('.js-Orange-on').addClass('disabled');
				$('.js-White-on').removeClass('disabled');
			break;

			case "White":
				colorstate = "<h5 class='center'><i class='fa fa-play-circle-o'></i>White</h5>";
				$('.js-Red-on').removeClass('disabled');
				$('.js-Green-on').removeClass('disabled');
				$('.js-Blue-on').removeClass('disabled');
				$('.js-Orange-on').removeClass('disabled');
				$('.js-White-on').addClass('disabled');
			break;
		}
		$('.js-color-state-output').html(colorstate)
	});

	//on click action
	$('.js-light-on').click(function() {
		ps = true;
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});

	$('.js-light-off').click(function() {
		ps = false;
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});

	$('.js-Red-on').click(function () {
		cs = "Red";
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});

	$('.js-Green-on').click(function () {
		cs = "Green";
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});

	$('.js-Blue-on').click(function () {
		cs = "Blue";
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});

	$('.js-Orange-on').click(function () {
		cs = "Orange";
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});

	$('.js-White-on').click(function () {
		cs = "White";
		myFirebaseRef.set({
			power: ps,
			color: cs
		});
	});