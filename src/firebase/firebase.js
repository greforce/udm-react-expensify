import * as firebase from 'firebase';

import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });

// //     console.log(expenses);
// //   });

// expenses.forEach((expense) => {
//   database.ref('expenses').push({
//     description: expense.description,
//     note: expense.note,
//     amount: expense.amount,
//     createdAt: expense.createdAt,
//   });
// });

// // database.ref('notes/-LV4jBXjf6yz14qPqsUF').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React, Angular, Python, Go',
// // });

// // database.ref('notes').set(notes);

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const value = snapshot.val();
// //   const { name } = value;
// //   const { title, company } = value.job;
// //   console.log(`${name} is a ${title} at ${company}`);
// // }, (error) => {
// //   console.log('Error in fetching data!', error.code);
// // });

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((error) => {
// //     console.log('Error fetching data', error.code);
// //   });

// // database.ref().set({
// //   name: 'Gregory Kovorotny',
// //   age: 42,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google',
// //   },
// //   location: {
// //     city: 'Moscow',
// //     country: 'Russia',
// //   },
// // }).then(() => {
// //   console.log('data is saved');
// // }).catch((e) => {
// //   console.log('this failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle',
// // });

// // database.ref('isSingle').remove()
// //   .then(() => {
// //     console.log('remove successfull');
// //   })
// //   .catch((error) => {
// //     console.log('Failed to remove', error.code);
// //   });
