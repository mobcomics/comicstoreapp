// JavaScript Document

$(window).load(function() { init(); });

function init() {	
	if(!window.console){ window.console = {log: function(){} }; } 
	$("#storeiFrame").width(window.innerWidth);
	$("#storeiFrame").height(window.innerHeight-$("#headerbar").height());	
	console.log($("#headerbar").height());
}