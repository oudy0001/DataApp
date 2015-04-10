
var app = {
    prepcount: 0,
    prep: function(){
//        alert("prep");
        app.prepcount ++;
        if(app.prepcount > 0){
            FunctionalInit();
        }
    },
    
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
};
document.addEventListener("DOMContentLoaded", app.prep());

app.initialize();