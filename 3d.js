/*
function clickqbottom() {
 	document.getElementById('QBOTTOM').style.transform='rotateX(90deg) translate3d(0, 0, 0)';
	document.getElementById('QLEFT').style.transform='rotateX(90deg) translate3d(0, 0, -225px)';
	document.getElementById('QRIGHT').style.transform='rotateX(90deg) translate3d(0, 0, -225px)';	
}

function clickqleft() {
 	document.getElementById('QBOTTOM').style.transform='rotateX(90deg) translate3d(0, 0, -225)';
	document.getElementById('QLEFT').style.transform='rotateX(90deg) translate3d(0, 0, 0)';
	document.getElementById('QRIGHT').style.transform='rotateX(90deg) translate3d(0, 0, -225px)';	
}

function clickqright() {
 	document.getElementById('QBOTTOM').style.transform='rotateX(90deg) translate3d(0, 0, -225)';
	document.getElementById('QLEFT').style.transform='rotateX(90deg) translate3d(0, 0, -225px)';
	document.getElementById('QRIGHT').style.transform='rotateX(90deg) translate3d(0, 0, 0)';	
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
*/
/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('0e645c1b-7d93-4e54-9b01-c8e500b3feaf', config);

	//get objects -- inserted here --
	app.getObject('QLEFT','qTCxpE'); //bgBDjcJ');
	app.getObject('QRIGHT','PzSZaU');
	app.getObject('QBOTTOM','kpqpaT');
	app.getObject('QV07', 'dNrEW');
	app.getObject('QV08', 'QhjBZR');
	
	app.getObject('CurrentSelections','CurrentSelections');
	//create cubes and lists -- inserted here --

} );
