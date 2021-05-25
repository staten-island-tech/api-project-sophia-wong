import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "AIzaSyAd1aEIUom1P_LW6oxVJ7hKfLX0mNP2KrY";

const requestOptions = {
  method: 'GET',
};

fetch("https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAd1aEIUom1P_LW6oxVJ7hKfLX0mNP2KrY&part=snippet,contentDetails,statistics&forUsername=Lilypichu&key=AIzaSyAd1aEIUom1P_LW6oxVJ7hKfLX0mNP2KrY")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
fetch("https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAd1aEIUom1P_LW6oxVJ7hKfLX0mNP2KrY&part=snippet,contentDetails,statistics&forUsername=Pokimane&key=AIzaSyAd1aEIUom1P_LW6oxVJ7hKfLX0mNP2KrY")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));