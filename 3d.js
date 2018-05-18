
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
	app.getObject('QLEFT','dLbyT'); //bgBDjcJ');
	app.getObject('QRIGHT','bgBDjcJ'); //nXgQMq'); //PzSZaU');
	app.getObject('QBOTTOM','kpqpaT');
	app.getObject('QSIDE1', 'dNrEW');
	app.getObject('QSIDE2', 'QhjBZR');
	
	app.getObject('CurrentSelections','CurrentSelections');
	//create cubes and lists -- inserted here --

} );
