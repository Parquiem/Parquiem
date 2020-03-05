const express = require('express');
const router = express.Router();
const mqttHandler = require('../../MqttHandler');


const mqttClient = new mqttHandler();
mqttClient.connect();

router.post('/', (req,res)=>{
    mqttClient.sendMessage(req.body);
});


module.exports = router;