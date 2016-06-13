$(document).ready(function(){
		$("#schemeToggle").click(function(){
			$(".topBar").toggleClass("schemeColor-Default-topBar schemeColor-Green-topBar");
			$(".bigName").toggleClass("schemeColor-Default-bigName schemeColor-Green-bigName");
			$("thead").toggleClass("schemeColor-Default-thead schemeColor-Green-thead");
			$("table, th, tr").toggleClass("schemeColor-Default-thtr schemeColor-Green-thtr");
			$(".characterCard").toggleClass("schemeColor-Default-characterCard schemeColor-Green-characterCard");
		});
});
