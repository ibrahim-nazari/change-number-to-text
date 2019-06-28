/**

This app is hard coded from scratch,it is working properly and maybe I repeat some code,
in the future i will improve it and make it better. This app just translate number to 
Dari language and i will make the English version also in the future.
you can get in touch me via email at : ibrahimwebdesign22@gmail.com

**/

var number=document.querySelector("#dari");
var text=document.querySelector(".showWritten");
var error=document.querySelector("#error");
var character=[];
var char="";
var three="";
var per="";
var back=false;

 // This function print the text to the text box
  function changeToText(character){
   
    text.innerHTML="";
    for(var i=0;i<character.length; i++){

    	text.innerHTML +=" "+character[i];
    }


  }

  // we check here if the first digit is zero
  
	 function checkHundred(val){

		 if(val!=0){
			 character.push("صد");
		 }
	 }
	  
	 // we run this function when the length of the digits get to five
	  
  function findNumber5(val){
	  
   character=[];

   		 

 if(val[0] !=1){
 	//console.log(val[0]);
  if(val[0] ==2){
  	per="بیست";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
	
	//console.log(val[1]);
  }else if(val[0]==3){
  	per="سی";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }else if(val[0]==4){
  	per="چهیل";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }else if(val[0]==5){
  	per="پنجا";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }else if(val[0]==6){
  	per="شصت";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }else if(val[0]==7){
  	per="هفتاد";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }else if(val[0]==8){
  	per="هشتاد";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }else if(val[0]==9){
  	per="نود";
	character.push(per);
	findNumber4(val[1]+val[2]+val[3]+val[4]);
  }


 }else{
  	if(val[0]+val[1]==11){

  		char="یازده";
  		character.push(char);
		findNumber4(0+val[2]+val[3]+val[4]);
  	}else if(val[0]+val[1]==10){
       
  		char="ده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}else if(val[0]+val[1]==12){

  		char="دوازده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]); 		
  	}else if(val[0]+val[1]==13){

  		char="سیزده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}else if(val[0]+val[1]==14){

  		char="چهارده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}else if(val[0]+val[1]==15){

  		char="پانزده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}else if(val[0]+val[1]==16){

  		char="شانزده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}else if(val[0]+val[1]==17){

  		char="هفده";
  		character.push(char); 
        findNumber4(0+val[2]+val[3]+val[4]); 		
  	}else if(val[0]+val[1]==18){

  		char="هژده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}else if(val[0]+val[1]==19){

  		char="نوزده";
  		character.push(char);
        findNumber4(0+val[2]+val[3]+val[4]);  		
  	}
   


 }


changeToText(character);

  }
  
  // this function will run when the length of the digits get to four
function findNumber4(val){

  if(!number.value.length>4){
	 character=[]; 
  }else if(number.value.length==4){
	  character=[];
  }
	
	
   
   if(val[3]==0){
    four="";

    findNumber1(val[0]);
    character.push("هزار");
    

     if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);}      
  		//console.log(character);
 
  	}else if(val[3]==1){

    four="یک";
    findNumber1(val[0]);
    character.push("هزار");
     if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==2){

  	four="دو";
    findNumber1(val[0]);
    character.push("هزار");
     if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==3){

  	  four="سه";
      findNumber1(val[0]);
      character.push("هزار");
      if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==4){

  	  four="چهار";
      findNumber1(val[0]);
      character.push("هزار");
     if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==5){

  		four="پنج";
        findNumber1(val[0]);
        character.push("هزار");
        if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==6){

  		four="شش";
        findNumber1(val[0]);
        character.push("هزار");
        if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==7){

  		four="هفت";
        findNumber1(val[0]);
        character.push("هزار");
        if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==8){

  		four="هشت";
        findNumber1(val[0]);
        character.push("هزار");
        if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}else if(val[3]==9){

  		four="نو";
        findNumber1(val[0]);
        character.push("هزار");
        if(val[2]!=1){findNumber3(val[1]+val[2]+val[3]);}else{findNumber3(val[1]+val[2]+val[3]);} 
  		
  	}
   changeToText(character);
  }

   // This function run when the length of the digits get to three
  function findNumber3(val){

	if(!number.value.length>3){
	character=[]; 
	}else if(number.value.length==3){
	character=[];
	}
	
	//console.log(val.length);
   
   if(val[2]==0){
    three="";
    
   findNumber1(val[0]);  
     if(val[1]!=1){checkHundred(val[0]);findNumber2(val[1]); }else{checkHundred(val[0]);findNumber2(val[1]+val[2]);}
  		
 
  	}else if(val[2]==1){

  		three="یک";
         findNumber1(val[0]);
      checkHundred(val[0]);	  
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==2){

  		three="دو";
         findNumber1(val[0]); 
         checkHundred(val[0]);	 
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==3){

  		three="سه";
         findNumber1(val[0]); 
         checkHundred(val[0]);	  
         
         if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==4){

  		three="چهار";
         findNumber1(val[0]); 
         checkHundred(val[0]);	  
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==5){

  		three="پنج";
         findNumber1(val[0]); 
         checkHundred(val[0]);	
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==6){

  		three="شش";
         findNumber1(val[0]); 
         checkHundred(val[0]);	  
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==7){

  		three="هفت";
         findNumber1(val[0]); 
         checkHundred(val[0]);	
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==8){

  		three="هشت";
         findNumber1(val[0]); 
         checkHundred(val[0]);	   
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}else if(val[2]==9){

  		three="نو";
         findNumber1(val[0]); 
         checkHundred(val[0]);	 
          if(val[1]!=1){findNumber2(val[1]); character.push(three);}else{findNumber2(val[1]+val[2])}
  		
  	}
   changeToText(character);
    // console.log(character);
  }



  


  function findNumber2(val){
	  
	  if(!number.value.length>2){
		  character=[];  
	  }else if(number.value.length==2){
	  character=[];
	  }

   		 

 if(val[0] !=1){
 	//console.log(val[0]);
  if(val[0] ==2){
  	per="بیست";
	character.push(per);
	findNumber1(val[1]);
	//console.log(val[1]);
  }else if(val[0]==3){
  	per="سی";
	character.push(per);
	findNumber1(val[1]);
  }else if(val[0]==4){
  	per="چهیل";
	character.push(per);
	findNumber1(val[1]);
  }else if(val[0]==5){
  	per="پنجا";
	character.push(per);
	findNumber1(val[1]);
  }else if(val[0]==6){
  	per="شصت";
	character.push(per);
	findNumber1(val[1]);
  }else if(val[0]==7){
  	per="هفتاد";
	character.push(per);
	findNumber1(val[1]);
  }else if(val[0]==8){
  	per="هشتاد";
	character.push(per);
	findNumber1(val[1]);
  }else if(val[0]==9){
  	per="نود";
	character.push(per);
	findNumber1(val[1]);
  }


 }else{
  	if(val==11){

  		char="یازده";
  		character.push(char);
  	}else if(val==10){
       
  		char="ده";
  		character.push(char);  		
  	}else if(val==12){

  		char="دوازده";
  		character.push(char);  		
  	}else if(val==13){

  		char="سیزده";
  		character.push(char);  		
  	}else if(val==14){

  		char="چهارده";
  		character.push(char);  		
  	}else if(val==15){

  		char="پانزده";
  		character.push(char);  		
  	}else if(val==16){

  		char="شانزده";
  		character.push(char);  		
  	}else if(val==17){

  		char="هفده";
  		character.push(char);  		
  	}else if(val==18){

  		char="هژده";
  		character.push(char);  		
  	}else if(val==19){

  		char="نوزده";
  		character.push(char);  		
  	}
   


 }
 // console.log(character);

changeToText(character);

  }

  // This function run when we type the first digit
function findNumber1(val){
   
	if(back && number.value.length< 2){
	character=[];
	}else if(number.value.length==1){
	character=[];
	}	   

	if(val==0){
	if(number.value.length>1){

	}else{
	char="صفر";
	character.push(char);      	
	}



  	}else if(val==1){

  		char="یک";
  		character.push(char);  		
  	}else if(val==2){

  		char="دو";
  		character.push(char);  		
  	}else if(val==3){

  		char="سه";
  		character.push(char);  		
  	}else if(val==4){

  		char="چهار";
  		character.push(char);  		
  	}else if(val==5){

  		char="پنج";
  		character.push(char);  		
  	}else if(val==6){

  		char="شش";
  		character.push(char);  		
  	}else if(val==7){

  		char="هفت";
  		character.push(char);  		
  	}else if(val==8){

  		char="هشت";
  		character.push(char);  		
  	}else if(val==9){

  		char="نه";
  		character.push(char);  		
  	}
   changeToText(character);
    // console.log(character);
  }




// This function check the length of the value and run specific function
function readNumber(val){
  var length=val.length;
  


	if(length==1){

	findNumber1(val);	

	}else if(length==2){
	findNumber2(val);	
	}else if(length==3){
	findNumber3(val);
	}else if(length>=4 && length <5){
	findNumber4(val);
	}else if(length>=5 && length<=6){

	findNumber5(val);
	}
	}

  // If we need to count above on hundred thousand we will need it we make some condition here
function conditions(val){
	var length=val.length;

	// console.log(length);

	// change font size

	// if(length>13){
	// number.style.fontSize="30px";
	// }else{
	// number.style.fontSize="40px";
	// }
	// if the user type above one trillions

	// if(length>15){
	// number.value= number.value.substring(0,15);
	// }

	readNumber(val);

}

// When we key up this function run 
function checkAll(e){
  var val=this.value;
 

 if(val=="100000"){
	 text.innerHTML="یک صد هزار";
	 return false;
 }else if(isNaN(val)){
  error.innerHTML="Hey please enter a valid number";
  return false;
 }else if(val.length>5){
 	if(number.value.substring(0,6)=="100000"){
       number.value= number.value.substring(0,6);
       	 error.innerHTML="Hey this application only count to one hundered thousands,if you need it to count above one hundered thousands Email me at ibrahimnazaryweb@gmail.com";
 	}else{
	  number.value= number.value.substring(0,5);
	 error.innerHTML="Hey this application only count to one hundered thousands,if you need it to count above one hundered thousands Email me at ibrahimnazaryweb@gmail.com";
 	}

	 return false;
 }else if(val[0]==0){
  error.innerHTML="Hey please enter a valid number";
  return false;
 }else{
 	error.innerHTML="";
 }
  

  //console.log(e.keyCode);
  if(e.keyCode==8){
  	back=true;
  	findNumber1(val);
  }else{
  	back=false;
  }

  if(val.length==0){
  	text.innerHTML="";
  	character=[];
  }


  
  conditions(val);
}

number.addEventListener("keyup",checkAll);
