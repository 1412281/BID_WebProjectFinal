var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    transport: 'ses', // loads nodemailer-ses-transport
    accessKeyId: '2AzQ4baZT8QZ3lFBFjQjAaia',
    secretAccessKey: '600917926893-kaeqbqatuj4cqr61fsesnkfaccqm7mcg.apps.googleusercontent.com'
});