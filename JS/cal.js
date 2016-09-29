 function monthName(){
  var today = new Date();
  var thisMonth = today.getMonth();
  return thisMonth;
}
var store;
var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function nextMonthName(){
  var nextMonth = monthName();
  //console.log(nextMonth);
  if(store != null){
    nextMonth = store;
  }
  nextMonth += 1;
  store = nextMonth;
  //console.log(nextMonth);
  if(nextMonth < 12){
    document.getElementById("monthjs").innerHTML = a[nextMonth];
  }
  else {
    store = 0;
    nextMonth = store;
    document.getElementById("monthjs").innerHTML = a[nextMonth];
  }
}

function previousMonthName(){
  var lastMonth = monthName();
  //console.log(nextMonth);
  if(store != null){
    lastMonth = store;
  }
  lastMonth -= 1;
  store = lastMonth;
  //console.log(nextMonth);
  if(lastMonth >= 0){
    document.getElementById("monthjs").innerHTML = a[lastMonth];
  }
  else {
    store = 11;
    nextMonth = store;
    document.getElementById("monthjs").innerHTML = a[nextMonth];
  }
  }

function monthSelector(){
  var today = new Date();
  var thisMonth = today.getMonth();
  //console.log(typeof(thisMonth));
  var m = monthName();
  if(thisMonth == m){
    if(m<13){
      document.getElementById("monthjs").innerHTML = a[m];
    }
  }

}

 function dayName(){
   //var day = dayName();
   var d = document.getElementsByTagName("td");
   var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   for(var i=0; i<7; i++){
   d[i].innerHTML = weekDays[i];
   }
 }

 function monthDates(){
   var currentDate = new Date();
   var currentMonth = currentDate.getMonth();
   var firstDay = currentDate.setDate(1);
   var start = new Date(firstDay).getDay();
   var currentDate2 = new Date();
   var nextMonth = currentDate2.getMonth() + 1;
   var lastDay = currentDate2.setDate(0);
   var end = new Date(lastDay).getDate();
   var i = 1;
   var k = 1;
   var m;
   start += 1;
   m = "<table align='center'><tr>";
   //console.log(day);
   if(start > 1){
     for (var j = 1; j < start; j++, k++){
       m += "<td class='dates'>";
       //m += j;
       m += "</td>";
     }
     //m += "</tr><tr>";
   }
   for( i = i; i < end; i++, k++)
   {
     m += "<td class='dates'>";
     m += i;
     m +="</td>";
     if(k%7 === 0){
       m += "</tr><tr>";
     }
   }
 m += "</tr></table>";
 //console.log(m);
 document.getElementById("dates").innerHTML = m;
}

function monthDates1(){
  if(store != null){
  var currentDate = new Date();
  currentDate.setMonth(store);
  var firstDay = currentDate.setDate(1);
  var start = new Date(firstDay).getDay();
  //console.log(store);
  var one = store + 1;
  currentDate.setMonth(one);
  //var nextMonth = currentDate.getMonth() + 1;
  var lastDay = currentDate.setDate(0);
  var end = new Date(lastDay).getDate();
  var i = 1;
  var k = 1;
  var m;
  start += 1;
  m = "<table align='center'><tr>";
  //console.log(day);
  if(start > 1){
    for (var j = 1; j < start; j++, k++){
      m += "<td class='dates'>";
      //m += j;
      m += "</td>";
    }
    //m += "</tr><tr>";
  }
  for( i = i; i <= end; i++, k++)
  {
    m += "<td class='dates'>";
    m += i;
    m +="</td>";
    if(k%7 === 0){
      m += "</tr><tr>";
    }
  }
m += "</tr></table>";
//console.log(m);
document.getElementById("dates").innerHTML = m;
}
}
function next(){
  nextMonthName();
  monthDates1();
}

function previous(){
  previousMonthName();
  monthDates1();
}

 function loadingFunc(){
   monthName();
   monthSelector();
   dayName();
   monthDates();
 }
