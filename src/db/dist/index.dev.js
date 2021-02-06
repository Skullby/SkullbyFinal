"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirebase = getFirebase;
exports.getFirestore = getFirestore;

var _app = _interopRequireDefault(require("firebase/app"));

require("@firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _app["default"].initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "skullby-47415.firebaseapp.com",
  projectId: "skullby-47415",
  storageBucket: "skullby-47415.appspot.com",
  messagingSenderId: "200225582852",
  appId: "1:200225582852:web:ed969401789263991d2a51"
});

function getFirebase() {
  return app;
}

function getFirestore() {
  return _app["default"].firestore(app);
}