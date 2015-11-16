String.prototype.capitilizeFirst = function() {
	return this.slice(0, 1).toUpperCase() + this.slice(1);
}

var FacebookNotifier = {
	canvas: null,
	context: null,
	base64: "data:image/x-icon;base64,AAABAAIAICAAAAEAIACoEAAAJgAAABAQAAABACAAaAQAAM4QAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFZBSp5eROejYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT//////////////////////5tdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+eX0TklFZBSgAAAAAAAAAAAAAAAAAAAACZWkLmo2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP//////////////////////m11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+aW0PnAAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E//////////////////////+bXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT//////////////////////5tdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP//////////////////////m11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E//////////////////////+bXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT//////////////////////5tdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP//////////////////////m11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E//////////////////////+bXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT//////////////////////5tdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/oGFG/51eRf+bXUT/m11E/5VZQv//////////////////////lVlC/5tdRP+bXUT/nV5F/6BgRv+jYkj/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+dXkX/kFdA/4tTPf+LUz3/iVE8//////////////////////+JUTz/i1M9/4tTPf+PVj7/ml1E/6JhRv+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP////////////////////////////////////////////////////////////////+ib1r/oGBG/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E/////////////////////////////////////////////////////////////////7qWiP+eX0X/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+dXkX/////////////////////////////////////////////////////////////////18G5/55fRf+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6BhRv/////////////////////////////////////////////////////////////////z6+j/oGFG/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP//////////////////////m11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E//////////////////////+YW0P/omFG/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+bXUT//////////////////////5dgS/+YW0P/m11E/5tdRP+dXkX/oGFG/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/51eRf/7+fj/////////////////x66k/49bRf+LUz3/i1M9/5BXQP+dXkX/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/n2BF/+3i3v///////////////////////////////////////////5tdRP+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+iYUb/zrCk////////////////////////////////////////////m11E/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACbXUT/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+malH/7eLd//////////////////////////////////////+fX0X/o2JI/6NiSP+bXUT/AAAAAAAAAAAAAAAAAAAAAJtdRP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+maFD/0LGk//Dm4v/7+fj/+/j3//Pr6P/p29X/3ce+/6JhRv+jYkj/o2JI/5tdRP8AAAAAAAAAAAAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/m11E/wAAAAAAAAAAAAAAAAAAAACXW0P/oGBG/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6BgRv+XW0P/AAAAAAAAAAAAAAAAAAAAAIxTPOaXW0P/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/m11E/5tdRP+bXUT/l1tD/4xTPOYAAAAAAAAAAAAAAAAAAAAAgUw0SYdPOuaKUz3/i1M9/4tTPf+LUz3/i1M9/4tTPf+LUz3/i1M9/4tTPf+LUz3/i1M9/4tTPf+LUz3/i1M9/4tTPf+LUz3/i1M9/4tTPf+LUz3/i1M9/4tTPf+LUz3/i1M9/4pTPf+HTzrmgUw0SQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////4AAAB8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAAD4AAAB///////////KAAAABAAAAAgAAAAAQAgAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoGBFw6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI////////////o2JI/6NiSP+jYkj/o2JI/6JgR8QAAAAAAAAAAKNiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP///////////6NiSP+jYkj/o2JI/6NiSP+jYkj/AAAAAAAAAACjYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj///////////+jYkj/o2JI/6NiSP+jYkj/o2JI/wAAAAAAAAAAo2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI////////////o2JI/6NiSP+jYkj/o2JI/6NiSP8AAAAAAAAAAKNiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP///////////6NiSP+jYkj/o2JI/6NiSP+jYkj/AAAAAAAAAACjYkj/o2JI/6NiSP+jYkj/o2JI/4JOOv+CTjr///////////+CTjr/gk46/5JYQP+jYkj/o2JI/wAAAAAAAAAAo2JI/6NiSP+jYkj/o2JI/6NiSP/////////////////////////////////HrqT/o2JI/6NiSP8AAAAAAAAAAKNiSP+jYkj/o2JI/6NiSP+jYkj/////////////////////////////////8efj/6NiSP+jYkj/AAAAAAAAAACjYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj///////////+aXUT/o2JI/6NiSP+jYkj/o2JI/wAAAAAAAAAAo2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI//n29f//////pH5v/4JOOv+CTjr/o2JI/6NiSP8AAAAAAAAAAKNiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP/eyL///////////////////////6NiSP+jYkj/AAAAAAAAAACjYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/qm1W/+LOxv/8+/r/9/Hv/+vd2P+jYkj/o2JI/wAAAAAAAAAAm11E/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/6NiSP+jYkj/o2JI/5tdRP8AAAAAAAAAAIBNNsOCTjr/gk46/4JOOv+CTjr/gk46/4JOOv+CTjr/gk46/4JOOv+CTjr/gk46/4JOOv+ATTbDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAD//wAA",
	resetCanvas: function(callback) {
		var img = new Image();
		img.onload = function() {
			// i had to move clearRect inside image since
			// sometimes the mutation event was so fast that it created badge in canvas before the context.clearRect and img.onload event
			// causing the badge to be in the background
			FacebookNotifier.context.clearRect(0, 0, 32, 32);
			// canvas is 32x32
			// actual image is 30x30 since it has transparent stuff around it
			FacebookNotifier.context.drawImage(img, -1, 1, 32, 32);
			callback();
		};
		img.src = this.base64;
	},
	addBadge: function(number) {
		var circleRadius = 7;
		var borderWidth  = 1;
		var circleX      = 32 - circleRadius - borderWidth;
		var circleY      = circleRadius + borderWidth;

		var ctx = this.context;
		ctx.beginPath();
		// sum of ricle will be 12x12
		// where 10x10 is circle and 1x1 is border
		ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.lineWidth    = borderWidth;
		ctx.strokeStyle  = "darkred";
		ctx.stroke();
		ctx.font         = circleRadius * 1.7 + "px Helvetica";
		ctx.textAlign    = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle    = "white";
		ctx.fillText(number, circleX, circleY);

		this.sync();
	},
	// syncronizes canvas context with favicon
	sync: function() {
		var base64 = this.canvas.toDataURL();
		document.querySelector("link[rel='shortcut icon']").setAttribute("href", base64);
	},
	resetAndSync: function() {
		this.resetCanvas(function() {
			FacebookNotifier.sync();
		})
	},
	init: function() {

		this.canvas        = document.createElement("canvas");
		this.canvas.width  = 32;
		this.canvas.height = 32;
		this.context       = this.canvas.getContext("2d");

		// why add listener on whole document when you can do it for only title?
		document.querySelector("title").addEventListener("DOMSubtreeModified", function(e) {
			// get new title
			var newTitle          = document.querySelector("title").innerText;
			// get notification count
			var notificationCount = FacebookNotifier.notificationCount();

			// if notification count is more than 0
			if (notificationCount > 0) {
				// set title innerHTML just Facebook instead of "(1) Facebook" (or messenger in case if user users messenger.com)
				document.querySelector("title").innerHTML = location.hostname.replace("www.", "").replace(".com", "").capitilizeFirst(); // "Facebook" or "Messenger"

				// reset canvas (make it only facebook icon)
				FacebookNotifier.resetCanvas(function() {
					// and add badge to it
					FacebookNotifier.addBadge(notificationCount);
				});
			}

			// otherwise if notification count returns 0, it means two things
			// 1. the title is "Unicorn messaged you"
			// 2. no notifications

			// in case if the title is "Unicorn messaged you" then the notification badge has to stay, which will be created by previos title
			// change which was (1) Facebook since unicorn has messaged the user
			// so in case of that dont reset canvas
			else if (newTitle.indexOf("messaged") == -1) {
				// otherwise just return usual facebook icon
				FacebookNotifier.resetAndSync();
			}
		});

		FacebookNotifier.resetAndSync(); // to resize favicon to 30x30
	},
	notificationCount: function() {
		var title = document.querySelector("title").innerHTML;
		var regex = new RegExp(/\(([0-9]+)\) Facebook/);
		var count = title.match(regex);

		return count ? parseInt(count[1]) : 0;
	}
}

FacebookNotifier.init();