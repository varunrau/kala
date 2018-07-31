$(document).ready(function() {
	const notifications = [
		{
			text: "hi",
			img: "hi",
		},
		{
			text: "hello",
			img: "hi",
		},
	];
	var i = 0;
	window.setInterval(function() {
		if (i >= notifications.length) {
			i = 0;
		}
		const notification = notifications[i];
		$(".notifications").prepend(`
			<div class='notification'>
				${notification.text}
			</div>`);
		i++;
	}, 1000);
});

