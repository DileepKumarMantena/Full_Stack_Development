const socket = new WebSocket('ws://example.com/socket');

socket.onopen = function(event) {
    console.log('Connection opened:', event);
    socket.send('Hello Server!');
};

socket.onmessage = function(event) {
    console.log('Message received:', event.data);
};

socket.onclose = function(event) {
    console.log('Connection closed:', event);
};

socket.onerror = function(error) {
    console.error('WebSocket Error:', error);
};
