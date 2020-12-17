// import React from 'react'
// const mailjet = require('node-mailjet')

// export const sendMail = () => {
//     mailjet.connect( '124494977da23d3bd381a4016fdf46fd', 'c9d0ac9851d4f4c58c10a4d4aac7da59' )
//     let request = mailjet
//     .post( "send", { 'version': '3.1' } )
//     .request({
//         "Messages":[
//             {
//                 "From": {
//                     "Email": "cs@glek.id",
//                     "Name": "Glek"
//                 },
//                 "To": [
//                     {
//                         "Email": "cs@glek.id",
//                         "Name": "Glek"
//                     }
//                 ],
//                 "Subject": "Greetings from Mailjet.",
//                 "TextPart": "My first Mailjet email",
//                 "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//                 "CustomID": "AppGettingStartedTest"
//             }
//         ]
//     })

//     request
//         .then((result:any) => {
//             console.log( result.body )
//         })
//         .catch( (err:any) => {
//             console.log(err.statusCode)
//         })
// }

// import React, { Component } from 'react'

// const getAjaxUrl = (url:string) => url.replace("/post?", "/post-json?");

// type MailchimpState = {
//     status: string | null,
//     message: string | null
// }

// export class MailchimpForm extends Component<{}, MailchimpState> {
//     static defaultProps = {
//         sender: (data:any) => {
            
//         }
//     }
//     // The tick function sets the current state. TypeScript will let us know
//     // which ones we are allowed to set.
//     tick() {
//         this.setState({
//             status: null,
//             message: null
//         })
//     }

//     // Before the component mounts, we initialise our state
//     componentWillMount() {
//         this.tick();
//     }

//     // After the component did mount, we set the state each second.
//     componentDidMount() {
//         setInterval(() => this.tick(), 1000);
//     }

//     // render will know everything!
//     render() {
//         return this.props.sender()
//     }
// }