let CC, YY, MM, DD, d, dateNumber;
let dateNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function validate(){
	let sex=document.getElementsByName("gender");
	if(document.fillForm.year.value==""|| document.fillForm.year.value.length !=4 || document.fillForm.year.value>2200 || document.fillForm.year.value <=1800){
		alert("Invalid year of birth! eg 1999");
		document.fillForm.year.focus();
		return false;
	}
	else if(document.fillForm.month.value=="" || isNaN(document.fillForm.month.value) ||
	document.fillForm.month.value.length !=2 || document.fillForm.month.value>12 || document.fillForm.month.value<=0){
		alert("Invalid month! must be between 1 and 12");
		document.fillForm.month.focus();
		return false;
	}
	else if(document.fillForm.date.value=="" || isNaN(document.fillForm.date.value) ||
	document.fillForm.month.value.length !=2 || document.fillForm.date.value>31 || document.fillForm.date.value<=0){
		alert("Invalid day! must be between 1 and 31");
		document.fillForm.date.focus();
		return false;
	}
	else if(sex[0].checked==false && sex[1].checked==false){
		alert("Invalid input! must be between male and female");
		return false;
	}
	else{
		return true;
	}

}
function mathDayNumber(){
	year=document.getElementById("year").value;
	CC=parseInt(year.substring(0,2));
	YY=parseInt(year.substring(2,4));
	MM=parseInt(document.getElementById("month").number);
	DD=parseInt(document.getElementById("date").number);	
	d=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7
	console.log(d);
	return(Math,floor(d));
}

function knowGender(){
	let genders =document.getElementsByName("gender");
	if(genders[0].checked==true){
		let gender="male";
	}
	else if (genders[1].checked==true){
		let gender="female";
	}
	else{
		return false;
	}
	switch(gender){
	  case "male":
	    if (dayNumber== 1){
	      alert("Birthdate is " +dateNames[0] + "and Given akan name is" +maleNames[0]+".");
	}
	else if(dayNumber== 2){
	      alert("Birthdate is " +dateNames[1] + "and Given akan name is" +maleNames[1]+".");
	}
	else if(dayNumber== 3){
	      alert("Birthdate is " +dateNames[2] + "and Given akan name is" +maleNames[2]+".");
	}
	else if(dayNumber== 4){
	      alert("Birthdate is " +dateNames[3] + "and Given akan name is" +maleNames[3]+".");
	}
	else if(dayNumber== 5){
	      alert("Birthdate is " +dateNames[4] + "and Given akan name is" +maleNames[4]+".");
	}
	else if(dayNumber== 6){
	      alert("Birthdate is " +dateNames[5] + "and Given akan name is" +maleNames[5]+".");
	}
	else if(dayNumber== -0){
	      alert("Birthdate is " +dateNames[6] + "and Given akan name is" +maleNames[6]+".");
	}
	break;
	case "female":
	 if (dayNumber== 1){
             alert("Birthdate is " +dateNames[0] + "and Given akan name is" +femaleNames[0]+".");
	}
	else if(dayNumber== 2){
	     alert("Birthdate is " +dateNames[1] + "and Given akan name is" +femaleNames[1]+".");
	}
	else if(dayNumber== 3){
	     alert("Birthdate is " +dateNames[2] + "and Given akan name is" +femaleNames[2]+".");
	}
	else if(dayNumber== 4){
	     alert("Birthdate is " +dateNames[3] + "and Given akan name is" +femaleNames[3]+".");
	}
	else if(dayNumber== 5){
	     alert("Birthdate is " +dateNames[4] + "and Given akan name is" +femaleNames[4]+".");
	}
	else if(dayNumber== 6){
	     alert("Birthdate is " +dateNames[5] + "and Given akan name is" +femaleNames[5]+".");
	}
	else if(dayNumber== -0){
	     alert("Birthdate is " +dateNames[6] + "and Given akan name is" +femaleNames[6]+".");
	}
      break
      default:

	}
}
function searchName(){
	dayNumber=mathDayNumber();
	knowGender();
}