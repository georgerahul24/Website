var i=0;
var content='';


function nextMember(value) {
  i=i+value;
  if(i==0){
    content="Welcome!";
    document.getElementById("navbutton2").disabled = true;
  };
  if (i==1){
     content="Click the arrows to proceed"
     ;
   };
 if (i==2){
    content="George Rahul was born on September 24,2004 as a child to Rupesh George and Sajitha TA in Lucknow,UP.";
  };
  if (i==3){
    content="As a child itself, George was very capable of high level reaasoning as well as to grasp very high level concepts";
  };
  if (i==4){
    content="By the age of 10, he was well versed in all the subjects better than the reeaserchers and sceintists of his time";
  };
  if (i==5){
    content="The END";
  };
  document.getElementById("snippetPara").innerHTML =content;
}
