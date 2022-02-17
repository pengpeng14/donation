import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCKMM0TRWeysGsusxZHDPLKQYY9uO5dog",
    authDomain: "project1webapplication.firebaseapp.com",
    databaseURL: "https://project1webapplication.firebaseio.com",
    projectId: "project1webapplication",
    storageBucket: "project1webapplication.appspot.com",
    messagingSenderId: "1079294234108",
    appId: "1:1079294234108:web:9260a430dca32a15753679",
    measurementId: "G-JPWX3YCLJJ"
  };

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()

export const warehouse1Collection = db.collection('warehouse1')
export const mainCollection = db.collection('mainWarehouse')
export const warehouseCollection = db.collection('warehouseInfo')
export const foundationProperty = db.collection("foundationHelpingProperty")
export const halfwayhomeforwomen = db.collection("halfwayhomeforwomen")