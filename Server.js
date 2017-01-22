
var http = require('http')
 var port = process.env.PORT || 1337;
 http.createServer(function(req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello World\n');
 }).listen(port);
 var azure = require('azure');
console.log("loaded Azure Library");
var connectionString = "Endpoint=sb://sensetest.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=Dcg4pmHWWyDbxRUIFC2VEbRSOsY6kXqH90ysHwP1xz0=";
console.log("Connection string");
var serviceBusService = azure.createServiceBusService(connectionString);
console.log("Connected to Azure");
var message = {
    body: 'Test message',
    customProperties: {
        testproperty: 'TestValue'
    }};
console.log("message creates");
serviceBusService.receiveQueueMessage('myqueue', function(error, receivedMessage){
    if(!error){
        console.log("message Received");// Message received and deleted
console.log(receivedMessage);
    }
});