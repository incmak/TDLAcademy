(function () {
	var dialog = document.getElementById("success");
	var blur = document.getElementById("blur");
	document.getElementById("sendBtn").onclick = function () {
		dialog.show();
		blur.style.display = "block";
	};
	document.getElementById("close").onclick = function () {
		dialog.close();
		blur.style.display = "none";
	};
})();
