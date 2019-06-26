//import fetch from node-fetch;
export const ADD_DISH = "ADD_DISH";

export const addDish = dish => ({
  type: ADD_DISH,
  payload: { dish }
});
const firebaseConfig = {
  apiKey: "AIzaSyCiNW2gZP_-7nnvySzJkeFd41gnUSq4Jb0",
  authDomain: "sample2-f4cfc.firebaseapp.com",
  databaseURL: "https://sample2-f4cfc.firebaseio.com",
  projectId: "sample2-f4cfc",
  storageBucket: "",
  messagingSenderId: "1024943424125",
  appId: "1:1024943424125:web:771cac5d45844fbb"
};
export const NavigateToMenu = dish => {
  return dispatch => {
    <header title="MENU" />;
  };
};
