const WebSocket = require('ws');
const { exec } = require('child_process');

function heartbeat() {
  clearTimeout(this.pingTimeout);

  // Use `WebSocket#terminate()`, which immediately destroys the connection,
  // instead of `WebSocket#close()`, which waits for the close timer.
  // Delay should be equal to the interval at which your server
  // sends out pings plus a conservative assumption of the latency.
  this.pingTimeout = setTimeout(() => {
    this.terminate();
  }, 30000 + 1000);
}

const client = new WebSocket('wss://peaceful-stream-94197.herokuapp.com');

client.on('open', heartbeat);
client.on('ping', heartbeat);
client.on('close', function clear() {
  clearTimeout(this.pingTimeout);
});

client.on('message', function incoming(data) {
    console.log(data);
	if(data === "launch"){
		console.log("launching");
		exec('python3 ./launch1.0.0.py');
	    }
});