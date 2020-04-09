var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ded6671212b941",
        pass: "b651cb67b0aeb7"
    }
});

module.exports = {
    enviar: (req, res) => {
        let { dest, subj, msg } = req.body

        var mailOptions = {
            from: 'lucas.pedroso@tangoe.com',
            to: dest,
            subject: subj,
            text: msg,
        };


        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });

        res.redirect('/')
    }
}