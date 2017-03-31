function calcaulateInverse(money) {
	if (money <= 0.0 || money >= 100000) {
		alert("请输入[0, 100000]的数字");
		return -1.0;
	}

	// 实收
	var X = money;
	// 应收 个税 增值税 城建税 税金额总计
	var T, G, Z, C, S;

	// ------------------------------------------
	// 0~1333
	T = X;
	G = 0;
	Z = 0;
	C = 0;

	if (T > 1333.33) {
		// ------------------------------------------
		// 1333~6666
		T = (X - 160.0) / 0.88;
		G = (T - T * 0.4 - 800) * 0.4;
		Z = 0;
		C = Z * 0.07;
		// ------------------------------------------
		if (T > 6666.66) {
			// 6666~30000
			T = X / 0.904;
			G = (T - T * 0.4) * 0.8 * 0.2;
			Z = 0;
			C = Z * 0.07;
			if (T > 30000.0) {
				// ------------------------------------------
				// 30000~43006.98
				T = X / 0.8758268;
				G = (T - 0.418699 * T - 0.11626019 * T) * 0.2;
				Z = T / 1.03 * 0.03;
				C = Z * 0.07;
				if (T > 43006.98) {
					// ------------------------------------------
					// 43006.98-100000-infinity
					T = (X - 2000.0) / 0.82932273;
					G = (T - 0.418699 * T - 0.11626019 * T) * 0.3 - 2000;
					Z = T / 1.03 * 0.03;
					C = Z * 0.07;
					return [T, G, Z, C, G + Z + C];
				}
				return [T, G, Z, C, G + Z + C];
			}
			return [T, G, Z, C, G + Z + C];
		}
		return [T, G, Z, C, G + Z + C];
	}
	return [T, G, Z, C, G + Z + C];
}

function precision(e, len) {
	var obj = e.srcElement || e.target;
	var dot = obj.value.indexOf("."); //alert(e.which);
	len = (typeof(len) == "undefined") ? 2 : len;
	var key = e.keyCode || e.which;
	if (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40)) //这里为了兼容Firefox的backspace,tab,del,方向键
		return true;
	if (key <= 57 && key >= 48) { //数字
		if (dot == -1) //没有小数点
			return true;
		else if (obj.value.length <= dot + len) //小数位数
			return true;
	} else if ((key == 46) && dot == -1) { //小数点
		return true;
	}
	return false;
}

function display() {
	var money = calcaulateInverse(document.getElementById("实发").value);

	//alert(money);
	document.getElementById("应发").value = money[0].toFixed(2);;
	document.getElementById("个税").value = money[1].toFixed(2);;
	document.getElementById("增值税").value = money[2].toFixed(2);;
	document.getElementById("城建税").value = money[3].toFixed(2);;
	document.getElementById("税金额总计").value = money[4].toFixed(2);;
}

function author() {
	alert("你老子我写的");
}

once = true;

function changeImage() {
	if (once) {
		once = true;
		//alert("sss");
		var num = parseInt(Math.floor(Math.random() * 3));
		document.getElementById("dog").src = "./img/head" + num + ".gif";
	}
}