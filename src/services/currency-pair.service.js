import { API } from './../common/api';

class CurrencyPairService {
  constructor() {
    this.isCurrencyLoaded = false;
  }

  fetchCurrencyPairs(callbackFn) {
    fetch(API.CURRENCY_PAIR)
    .then((resp) => resp.json())
    .then((data) => {
        // Your code for handling the data you get from the API
        this.isCurrencyLoaded = true;
        callbackFn(data);
    })
    .catch((err) => {
        // This is where you run code if the server returns any errors
        console.log(err);
        this.isCurrencyLoaded = true;
    });
  }
}

export default CurrencyPairService;
