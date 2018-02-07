import React,{Component} from "react";
import * as firebaseconfig from "firebase";
  var config = {
        apiKey: "AIzaSyBstq20vaaHs8DANRBIkbskHUHk-YWCDAo",
        authDomain: "blooddonorapp-262c1.firebaseapp.com",
        databaseURL: "https://blooddonorapp-262c1.firebaseio.com",
        projectId: "blooddonorapp-262c1",
        storageBucket: "blooddonorapp-262c1.appspot.com",
        messagingSenderId: "253407415755"
      };
  var firebase=firebaseconfig.initializeApp(config);
export default firebase;
