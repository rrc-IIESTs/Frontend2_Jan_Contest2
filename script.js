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
        renderTable();
        // e.preventDefault();
    }else{
        arr.push({
            Name: name1.value,
            Profession: profession.value,
            Age: age.value
        
        });
        message.style.color= "green";
        message.innerHTML="Success : Employee Added!"
        renderTable();
        // e.preventDefault();
       
         }
    }

    function renderTable(){
        let tab = document.getElementById('tab');
        let i =0;
        arr.forEach(element => {
            i++;
            var row = tab.insertRow();
            let id = row.insertCell();
            id.innerHTML = i+".";
            let name = row.insertCell();
            name.innerHTML=element.Name;
            let profession = row.insertCell();
            profession.innerHTML = element.Profession;
            let age = row.insertCell();
            age.innerHTML = element.Age;
            let deletebtn = document.createElement("button");
            deletebtn.setAttribute('id', 'deletebtn'+i);
            deletebtn.innerText = "Delete";
            document.getElementById("deletebtn"+i).appendChild(deletebtn);
            deletebtn.addEventListener('click',deleteElement(i-1));
        });
    }

    function deleteElement(i){
        arr.splice(i,1);
        renderTable();
    }



