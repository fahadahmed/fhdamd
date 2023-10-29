/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
import * as functions from 'firebase-functions';

// import * as admin from 'firebase-admin';

// admin.initializeApp(functions.config().firebase);
// admin.firestore().settings({ timestampsInSnapshots: true });

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const cors = require('cors')({ origin: true });

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const Mailchimp = require('mailchimp-api-v3');
// const mailchimp = new Mailchimp('2c2b5cf49855d6cf65c53533b9da8623-us1');

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  console.log(process.env.MAILCHIMP_API_KEY);
  console.log(process.env.MAILCHIMP_LIST_ID);
  response.send('Hello from Firebase!');
});

// export const addSubscriber = functions.https.onRequest((request, response) => {
//   // console.log(process.env.MAILCHIMP_API_KEY);
//   // console.log(process.env.MAILCHIMP_LIST_ID);
//   // const data = JSON.parse(request.body);
//   // console.log(data);
//   response.send('Response from addSubscriber');
//   // cors(request, response, async () => {
//   //   const data = JSON.parse(request.body);
//   //   await mailchimp
//   //     .post('/lists/ea3338202b/members', {
//   //       email_address: data.email,
//   //       status: 'subscribed',
//   //       merge_fields: {
//   //         FNAME: data.firstName,
//   //       },
//   //     })
//   //     .then((results: unknown) => {
//   //       console.log('successfully added a new firebase user', results);
//   //       return response
//   //         .status(200)
//   //         .json({ status: '200', message: 'Successfully added a new user' });
//   //     })
//   //     .catch((err: unknown) => {
//   //       console.log('Mailchimp: Error while attempting to add the user', err);
//   //       return response.status(500).json({
//   //         status: '500',
//   //         message: 'Error while attempting to add the user',
//   //       });
//   //     });
//   // });
// });
