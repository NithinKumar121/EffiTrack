const nodemailer = require("nodemailer");

const emailSender = async (email,title,body) =>{
    try{
        // let transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //       type: "OAuth2",
        //       user: "effitrack@gmail.com",
        //       pass: "HelloWorld",
        //       clientId: "663083035492-6nt0rgohu1rms9voq4udq1osm6pthsea.apps.googleusercontent.com",
        //       clientSecret: "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",
        //       refreshToken: "1//04zGDoGMLso9CCgYIARAAGAQSNwF-L9IrC9qbqV8BFIVK6mIIVgayZ3lmdvk2lZ2DdtNJy4jlQKGeIw1Tw-0GeEXKEiF9wYn9TAM",
        //     },
        // });
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "noreply.gmarket@gmail.com",
                pass: "esgx wvli yrxl xkpv",
            },
        })
        
        transporter.verify((err, success) => {
        err
            ? console.log(err)
            : console.log(`Api is working correctly`);
        });
        const mailOptions = {
			to: email,
			// subject: "Welcome to GMarket! Confirm Your Account with OTP Verification",
            subject:title,
            text: body,
			// html: getHTMLTemplate("mailTemplate", {
			// 	otp_code: otp,
			// 	to_mail: email,
			// 	customer_name: name,
			// }),
		}
        // let mailOptions = {
        //     from: "pkcibiyanna@gmail.com",
        //     to: email,
        //     subject:title,
        //     text: body,
        // };
           
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
        return info;
    }catch(err){
        console.log("error in sending the email")
        console.log(err.message);
    }
    
}   


module.exports = emailSender;