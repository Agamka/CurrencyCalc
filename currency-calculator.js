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
        showExchangeRatesList(res)
        showCurrencies(res);
      }
    };
 // };
  //ajax.send();

  //document.querySelector('#tester button').addEventListener('click', loadDoc);

  function showExchangeRatesList(res){
        let x = "";
        let y = "";
        let z = "";
          for (i in res[0].rates) 
            {
              x += "1 " + res[0].rates[i].code
              + " (" + res[0].rates[i].currency+ ")"
              + " = " 
              + res[0].rates[i].mid
              + " PLN"
              + "</br>";
              y += res[0].rates[i].code;
            }
        document.querySelector('#tester p').innerHTML = x;
  }

  function showCurrencies(res){
    var select = document.getElementById("currency");
    var select2 = document.getElementById("currency-2");
    for (i = 0; i<res[0].rates.length; i++){
      var optn = res[0].rates[i].code 
      var val = res[0].rates[i].mid
      //+ " " + res[0].rates[i].mid;
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = val;
      select.appendChild(el);
    }
   /* for (i = 0; i<res[0].rates.length; i++){
      var optn = res[0].rates[i].code;
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      select2.appendChild(el);
    }*/
  }
  

  var btn = document.getElementById('btn');
  var input = document.getElementById('amount');
  var currency1 = document.getElementById('currency');
  var currency2 = document.getElementById('currency-2');
  var showNumber = document.getElementById('number');
  var showCurrency = document.getElementById('curr');
  var showResult = document.getElementById('result');
  var showCurrency2 = document.getElementById('curr-2');

  function calculate(event, res){
    event.preventDefault();
    var amount = input.value;
    var from = currency1.value;
    var fromCurr = currency1.text;
    var to = currency2.value;
    var result = 0;
    console.log(from, fromCurr)
    result = amount *  from;

    /*var x = document.getElementById("currency").options.length;
    console.log(x)*/
  
    showNumber.innerHTML = amount;
    showCurrency.textContent = fromCurr;
    showResult.textContent = ' = ' + result;
    showCurrency2.textContent = to;
  }
  

  btn.addEventListener('click', calculate)


