const mqtt = require('mqtt');
const jwt = require("jsonwebtoken");
const fs = require('fs');

const projectId = `directed-will-245201`;
const deviceId = `esp32`;
const registryId = `esp32Reg`;
const region = `us-central1`;
const algorithm = `RS256`;
const privateKeyFile = `./certs/rsa_private.pem`;
const mqttBridgeHostname = `mqtt.googleapis.com`;
const mqttBridgePort = 8883;


const createJwt = (projectId, privateKeyFile, algorithm) => {
    // Create a JWT to authenticate this device. The device will be disconnected
    // after the token expires, and will have to reconnect with a new token. The
    // audience field should always be set to the GCP project id.
    const token = {
      iat: parseInt(Date.now() / 1000),
      exp: parseInt(Date.now() / 1000) + 20 * 60, // 20 minutos
      aud: projectId,
    };
    const privateKey = fs.readFileSync(privateKeyFile);
    return jwt.sign(token, privateKey, {algorithm: algorithm});
};
  

// The mqttClientId is a unique string that identifies this device. For Google
// Cloud IoT Core, it must be in the format below.
const clientId = `projects/${projectId}/locations/${region}/registries/${registryId}/devices/${deviceId}`;
const mqttTopic = `projects/${projectId}/topics/parquimetro`;

const connectionArgs = {
  host: mqttBridgeHostname,
  port: mqttBridgePort,
  clientId,
  username: 'unused',
  password: createJwt(projectId, privateKeyFile, algorithm),
  protocol: 'mqtts',
  secureProtocol: 'TLSv1_2_method',
};

class MqttHandler {
  constructor(){
    this.client = null;
  }

  connect(){
    this.client = mqtt.connect(connectionArgs);

    this.client.subscribe(mqttTopic, {qos: 0}, (err, granted) => {
      if(err){
        console.log("Error en la suscripcion: "+err);
        console.log("Granted", granted);
      }
    });
    
    // Connection callback
    this.client.on('connect', (success) => {
      if(!success){
        console.log("No se ha conectado")
        this.client.end();
      }else{
        console.log(`Cliente MQTT conectado`);
        this.client.publish(mqttTopic, "Joto");
      }
    });
    
    this.client.on('message', function (topic, mensaje, packet) {
      //El mensaje es un buffer
      console.log(topic, 'message received: ', Buffer.from(mensaje, 'base64').toString('ascii'));
    });
    
    this.client.on('error', (err) => {
      console.log(err);
    });


    this.client.on('close', () => {
      console.log(`El cliente MQTT se ha desconectado`);
    });

  }

}

module.exports = MqttHandler;