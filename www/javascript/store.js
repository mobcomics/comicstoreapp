// JavaScript Document

$(window).load(function() { init(); });

function init() {	
	if(!window.console){ window.console = {log: function(){} }; } 
	$("#storeiFrame").width(2*window.innerWidth);
	$("#storeiFrame").height(2*(window.innerHeight-$("#headerbar").height()));	
	console.log($("#headerbar").height());
}