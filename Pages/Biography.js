var i=0;
var content='';


function nextMember(value) {
  i=i+value;
  if(i==0){
    content="Welcome! Click the arrows to proceed...";
    document.getElementById("navbutton2").disabled = true;
  };
  if (i==1){
     content="READY? Lets Start....";
   };
 if (i==2){
    content="George Rahul was born on September 24,2004 as a child to Rupesh George and Sajitha TA in Lucknow,UP.";
  };
  if (i==3){
    content="As a child itself, George was very capable of high level reaasoning as well as to grasp very high level concepts";
  };
  if (i==4){
    content="By the age of 10, he was well versed in all the subjects better than the researchers and sceintists of his time";
  };
  if (i==5){
    content="To be CONTINUED";
  };
  document.getElementById("snippetPara").innerHTML =content;
}
