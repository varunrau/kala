$(document).ready(function() {
	const notifications = [
		{
			text: "Android users are unable to signup through Facebook.",
            subtext: "Service disruption detected at 10:48 AM.",
			img: "i/alert.svg",
		},
		{
			text: "Oncall engineer has acknowledged incident.",
            subtext: "",
			img: "hi",
		},
		{
			text: "Service health restored.",
            subtext: "Service was unhealthy for 24 minutes.",
			img: "hi",
		},
		{
			text: "Web service latency has spiked for users in India.",
            subtext: "Service degradation detected at 3:35 AM.",
			img: "i/alert.svg",
		},
		{
			text: "Oncall engineer has acknowledged incident.",
            subtext: "",
			img: "hi",
		},
		{
			text: "Incident mitigated.",
            subtext: "Service was unhealthy for 1 hour and 28 minutes.",
			img: "hi",
		},
	];
	var i = 0;
	var addNotification = function() {
		if (i >= notifications.length) {
			i = 0;
		}

		const notification = notifications[i];
		$(".notifications").animate({
            "marginTop": '+=110px',
        }, 500, function() {
            $(".notifications").prepend($(`
            <div class='notification'>
            	<img class='notification-img' src=${notification.img} />
            	<div class='notification-info-wrapper'>
	            	<div class='notification-title'>
	                	${notification.text}
	                </div>
	                <div class='notification-subtitle'>
	                	${notification.subtext}
	                </div>
            	</div>
            </div>`));

            $(".notifications").css("marginTop", "-=110px");
        })

		i++;
	};
	addNotification();
	window.setInterval(addNotification, 5000);
});

