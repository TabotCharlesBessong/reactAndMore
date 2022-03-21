import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ContactReducer from "./redux/reducer/ContactReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // resources: {
    //   en:{
    //     translation: {
         
    //     }
    //   }
    // },
    // lng: "en",
    supportedLngs: ['en', 'fr', 'ar'],
    fallbackLng: "en",
    detection: { 
      order: [ 'cookie', 'htmlTag', 'localStorage',  'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {loadPath: '/assets/locales/{{lng}}/translation.json',},
    react: { useSuspense: false}
    
  });




const store = createStore(ContactReducer,composeWithDevTools() );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
