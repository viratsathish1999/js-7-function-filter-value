

/*var cost,value;
cost=[100,600,501,999,450,1020,490,750,870,960,1200,1340,888];
 
function findValue(a){
    if(a<1000 && a>500){
        return a;
    }
}
value=cost.filter(findValue);

document.write(value)*/



    var cost,value;
cost=[100,600,501,999,450,1020,490,750,870,960,1200,1340,888];

   value=cost.filter(function(get)
   { 
     return get<1000 && get>500;
   }) 
   document.write(value)