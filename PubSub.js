const {PubSub} = require('@google-cloud/pubsub');


class Pubsub {

    constructor(){
        this.projectId = "directed-will-245201";
        this.topic = `projects/${this.projectId}/topics/parquimetro`;
    }

    connect(){

        const pubsub = new PubSub({projectId: this.projectId});

        const subscription = pubsub.subscription(`projects/${this.projectId}/subscriptions/testCloud`);

        subscription.on('message', this.messageHandler);
    }

    messageHandler(message){
        console.log('Message Begin >>>>>>>>'); 
        console.log('message.connectionId', message.connectionId); 
        console.log('message.attributes', message.attributes); 
        console.log('message.data', Buffer.from(message.data, 'base64').toString('ascii')); 
        console.log('Message End >>>>>>>>>>'); 

        // "Ack" (acknowledge receipt of) the message 
        message.ack(); 
    }


}

module.exports = Pubsub;