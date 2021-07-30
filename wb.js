const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();





















client.on('message', message => {
	if(message.body === 'test') {
		client.sendMessage(message.from, 'program aktif ve çalışıyor');
	}
});




client.on('message', message => {
	if(message.body === 'Kanka') {
		client.sendMessage(message.from, 'Efendim');
	}
});



client.on('message', message => {
	if(message.body === 'İyi geceler') {
		message.reply('Sana da iyi geceler');
	}
});

client.on('message', message => {
	if(message.body === 'Günaydın') {
		message.reply('Sana da günaydın');
	}
});


client.on('message', message => {
	if(message.body === 'Furkan') {
		client.sendMessage(message.from, 'Efendim');
	}
});



client.on('message', message => {
	if(message.body === 'Sa') {
		message.reply('aleykümselam');
	}
});



client.on('message', message => {
	if(message.body === 'iyi geceler') {
		message.reply('İyi geceler');
	}
});


client.on('message', message => {
	if(message.body === 'Nasılsın') {
		message.reply('iyiyim sen nasılsın?');
	}
});



// Mention everyone
client.on('message', async (msg) => {
    if(msg.body === '!everyone') {
        const chat = await msg.getChat();
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        chat.sendMessage(text, { mentions });
    }
});