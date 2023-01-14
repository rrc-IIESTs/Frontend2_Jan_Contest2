const arr=[];
let i=0;


    
    
    function addDetailsToArray(){
        let name1 = document.getElementById('name');
        let profession = document.getElementById('profession')
        let age = document.getElementById("age")
        let message = document.getElementById("message")
        clearTable();
        
    if(name1.value=="" || profession.value=="" || age.value=="" ){
        message.style.color="red";
        message.innerHTML="Error : Please make sure all the fields are filled before adding in an employee!"
        i=0;
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
        i=0;
        renderTable();
        // e.preventDefault();
       
         }
    }
    function clearTable(){
        let tab = document.getElementById('tab');
        arr.forEach(element => {
            tab.deleteRow(1);
        });
    }

    function renderTable(){
        let tab = document.getElementById('tab');
        
        arr.forEach(element => {
            i=i+1;
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
            deletebtn.setAttribute('id', i);
            deletebtn.innerText = "Delete";
            row.appendChild(deletebtn);
            deletebtn.addEventListener('click',function(){deleteElement(i-1)});
        });
    }

    function deleteElement(x){
        clearTable();
        arr.splice(x,1);
        i=0;
        renderTable();
    }



