$(document).ready(function() {
	const notifications = [
		{
			text: "hi",
            subtext: "o",
			img: "hi",
		},
		{
			text: "hello",
            subtext: ";o",
			img: "hi",
		},
	];
	var i = 0;
	window.setInterval(function() {
		if (i >= notifications.length) {
			i = 0;
		}

		const notification = notifications[i];
		$(".notifications").animate({
            marginTop: '+=90px',
        }, 500, function() {
            $(".notifications").prepend($(`
            <div class='notification'>
                ${notification.text}
            </div>`));

            $(".notifications").css("marginTop", "-=90px");
        })

		i++;
	}, 3000);
});

