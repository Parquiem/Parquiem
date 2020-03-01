const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
const mqtt = require('mqtt');
const jwt = require("jsonwebtoken");
const fs = require('fs');

const projectId = `directed-will-245201`;
const deviceId = `esp32-dev1`;
const registryId = `esp32-test`;
const region = `us-central1`;
const algorithm = `RS256`;
const privateKeyFile = `./rsa_private.pem`;
const mqttBridgeHostname = `mqtt.googleapis.com`;
const mqttBridgePort = 8883;


const createJwt = (projectId, privateKeyFile, algorithm) => {
    // Create a JWT to authenticate this device. The device will be disconnected
    // after the token expires, and will have to reconnect with a new token. The
    // audience field should always be set to the GCP project id.
    const token = {
      iat: parseInt(Date.now() / 1000),
      exp: parseInt(Date.now() / 1000) + 20 * 60, // 20 minutes
      aud: projectId,
    };
    const privateKey = fs.readFileSync(privateKeyFile);
    return jwt.sign(token, privateKey, {algorithm: algorithm});
};
  

// The mqttClientId is a unique string that identifies this device. For Google
// Cloud IoT Core, it must be in the format below.
const mqttClientId = `projects/${projectId}/locations/${region}/registries/${registryId}/devices/${deviceId}`;

// With Google Cloud IoT Core, the username field is ignored, however it must be
// non-empty. The password field is used to transmit a JWT to authorize the
// device. The "mqtts" protocol causes the library to connect using SSL, which
// is required for Cloud IoT Core.
const connectionArgs = {
  host: mqttBridgeHostname,
  port: mqttBridgePort,
  clientId: mqttClientId,
  username: 'unused',
  password: createJwt(projectId, privateKeyFile, algorithm),
  protocol: 'mqtts',
  secureProtocol: 'TLSv1_2_method',
};



    // Create a client, and connect to the Google MQTT bridge.
    const iatTime = parseInt(Date.now() / 1000);
    const client = mqtt.connect(connectionArgs);
    
    
    client.subscribe(`projects/${projectId}/topics/test-topic`, {qos: 1});
    
    client.on('connect', success => {
        console.log('connect');
        if (!success) {
          console.log('Client not connected...');
        }
    });