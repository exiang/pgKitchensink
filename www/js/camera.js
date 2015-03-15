var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
		
		$('#btnGetImageUrl').click(function(e) {			
			navigator.camera.getPicture(onSuccess, function(message) {alert('Failed because: ' + message)}, { quality: 90, destinationType: Camera.DestinationType.FILE_URI });
			e.preventDefault();
		});
    }
};

function onSuccess(imageURI) {
	window.plugins.toast.show('Image Captured: '+imageURI);
	//var image = $('#canvasPreview');
	//image.src = imageURI;
}