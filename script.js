const arr=[];


// let details = {
    //     Name: name1.value,
    //     Profession: profession.value,
    //     Age: age.value
    // }
    
    
    function addDetailsToArray(){
        let name1 = document.getElementById('name');
        let profession = document.getElementById('profession')
        let age = document.getElementById("age")
        let message = document.getElementById("message")
        
    if(name1.value=="" || profession.value=="" || age.value=="" ){
        message.style.color="red";
        message.innerHTML="Error : Please make sure all the fields are filled before adding in an employee!"
        // e.preventDefault();
    }else{
        arr.push({
            Name: name1.value,
            Profession: profession.value,
            Age: age.value
        
        });
        message.style.color= "green";
        message.innerHTML="Success : Employee Added!"
        // e.preventDefault();
       const lis= document.createElement("li");
       lis.innerHTML=name1.value+profession.value+age.value;
       document.getElementById("list").appendChild(lis);
    }
}


