//Print the country that uses US dollars as currency.

var file = new XMLHttpRequest();
file.open("GET","https://restcountries.com/v2/all");
file.send();
file.onload=function(){
    var res=JSON.parse(file.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }