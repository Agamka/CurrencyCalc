
let btn = document.getElementById('btn');
let input = document.getElementById('amount');
let currency1 = document.getElementById('currency');
let currency2 = document.getElementById('currency-2');
let showNumber = document.getElementById('number');
let showCurrency = document.getElementById('curr');
let showResult = document.getElementById('result');
let showCurrency2 = document.getElementById('curr-2');

let btnFrom = document.getElementById('btn-from')
let input2 = document.getElementById('amountPLN');
let currency_2 = document.getElementById('currency_2');
let showNumber_2 = document.getElementById('number-1');
let showCurrency_1 = document.getElementById('curr-1');
let showResult_2 = document.getElementById('result-1');
let showCurrency_2 = document.getElementById('curr-1');

let button1 = document.getElementById('btn_1');

let showOneCurr_1 = document.getElementById('amou_1');
let showCurrFrom_1 = document.getElementById('curr_to_exchange_1');
let showExchange_1 = document.getElementById('exchange_1');
let showCurrTo_1 = document.getElementById('curr_to_1')

  let showOneCurr = document.getElementById('amou');
  let showCurrFrom = document.getElementById('curr_to_exchange');
  let showExchange = document.getElementById('exchange');
  let showCurrTo = document.getElementById('curr_to')

let requestURL = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json";
let method = "GET";
let ajax = new XMLHttpRequest();
 ajax.open(method, requestURL , true);
 ajax.send();
 //function loadDoc() {
    ajax.onreadystatechange = function() {
      var res;
      if(ajax.readyState === 4 && ajax.status === 200) {
        res = JSON.parse(this.responseText);
       // showExchangeRatesList(res);
        showCurrencies(res);
        //exchangeRatePlnToAnotherCurrenciesList(res);
        showCurrenciesFrom(res)
      }
    };
 // };
  //ajax.send();

  function showExchangeRatesList(res){
        let x = "";
        let y = "";
        let z = "";
          for (i in res[0].rates) 
            {
              x += "1 " + res[0].rates[i].code
              + " (" + res[0].rates[i].currency+ ")"
              + " = " 
              + res[0].rates[i].mid.toFixed(2)
              + " PLN"
              + "</br>";
              y += res[0].rates[i].code;
            }
        document.querySelector('#tester p').innerHTML = x;
  }

  
  function exchangeRatePlnToAnotherCurrenciesList(res){
    let x = "";
        let y = "";
        let z = "";
          for (i in res[0].rates) 
            {
              x += "1 PLN = " + (1/(res[0].rates[i].mid)).toFixed(2)
              + " " + res[0].rates[i].code
              + " (" + res[0].rates[i].currency+ ")"
              + "</br>";
              y += res[0].rates[i].code;
            }
        document.querySelector('#tester-2 p').innerHTML = x;
  }

  //button1.addEventListener('click', exchangeRatePlnToAnotherCurrenciesList());

  function showCurrencies(res){
    var select = document.getElementById("currency");
    for (i = 0; i<res[0].rates.length; i++){
      var optn = res[0].rates[i].code 
      var val = res[0].rates[i].mid
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = val.toFixed(4);
      select.appendChild(el);
    }
  
  }

  function showCurrenciesFrom(res){
    var select2 = document.getElementById("currency_2");
    for (i = 0; i<res[0].rates.length; i++){
      var optn1 = res[0].rates[i].code;
      var val = (1/(res[0].rates[i].mid))
      var el1 = document.createElement("option");
      el1.textContent = optn1;
      el1.value = val.toFixed(4);
      select2.appendChild(el1);
    }
  }

  function calculate(event, res){
    event.preventDefault();
    var amount = input.value;
    var from = currency1.value;

    var fromCurr = currency1;
    var i = fromCurr.selectedIndex;

    var to = currency_2;
    var result = 0;
    console.log(from, fromCurr.options[i].text)
    result = amount *  from;
  
    showNumber.innerHTML = amount;
    showCurrency.textContent = fromCurr.options[i].text;
    showResult.textContent = ' = ' + result.toFixed(2) + ' PLN';

    
    showCurrFrom_1.textContent = '1 ' + fromCurr.options[i].text + " = ";
    showExchange_1.textContent =  from + " PLN ";

    showOneCurr_1.textContent = '1 PLN = ' + to + " "
                                + fromCurr.options[i].text;
    //showCurrTo_1.textContent = 
    
  }


  
  btn.addEventListener('click', calculate)

  
  function calculateFromPln(event, res){
    event.preventDefault();
    var amount = input2.value;
    var from = currency_2.value;

    var fromCurr = currency_2;
    var i = fromCurr.selectedIndex;

    var to = currency_2;
    var result = 0;
    console.log(from, fromCurr.options[i].text)
    result = amount *  from;
  
    showNumber_2.innerHTML = amount + ' PLN';
    showResult_2.textContent = ' = ' + result.toFixed(2) ;
    showCurrency_2.textContent = to.options[i].text;

    showExchange.textContent = '1 PLN = ' + from;
    showCurrTo.textContent = to.options[i].text;
  }
  
  btnFrom.addEventListener('click', calculateFromPln)



