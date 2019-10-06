const salon={
    name:"Paw Pet's",
    phone:"(760) 513-4545",
    address:{
        street:"Java Ave",
        number:"1200-N"
    },
    workingHours:{
        days:'Mon-Fri',
        open:'8:00 am',
        close:'5:00 pm'
    },
    pets:[],
    count:function(){
        // alert("you have registered " + this.pets.length);
    }
    
}

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.querySelector('.info').innerHTML=`<h1> Welcome to ${name} Salon </h1> <br> <p> Contact us ${phone}, ${street} ${number} <br> It is open from ${open} to ${close} (M-F) </p>`;

document.querySelector('footer .info').innerHTML=`<p> Contact us ${phone}, ${street} ${number} <br> It is open from ${open} to ${close} (M-F) </p>`;
var petc = 0;
class Pet {
    
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.hunger=10;
        this.happiness=5;
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;  
        this.id="pet"+petc;
        petc+=1; // increment 1 by 1
        // console.log(this.id);
    }
    status=function(){
        console.log("happiness:" + this.happiness + "hunger:"+this.hunger);
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding...");
    }
    ownerContact=function(){
        console.log("Owner Name: " +  this.ownerName + "\n" + "Contact phone:" + this.contactPhone);
    }
    
}
var txtname = document.getElementById('name');
var txtage = document.getElementById('age');
var txtType = document.getElementById('type');
var txtgender = document.getElementById('gender');
var txtBreed = document.getElementById('breed');
var txtService = document.getElementById('service');
var txtOwnerName = document.getElementById('ownerName');
var txtContactPhone = document.getElementById('contactPhone');


function register(){
    
    const thePet =new Pet(txtname.value,txtage.value,txtType.value,txtgender.value,txtBreed.value,txtService.value,
        txtOwnerName.value,txtContactPhone.value);
        
    salon.pets.push(thePet);
    clean();
    alert("You have registered a pet");
    displayTable(thePet);
}

function clean(){
    txtname.value="";
    txtage.value="";
    txtType.value="";
    txtgender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwnerName.value="";
    txtContactPhone.value="";
}

function displayTable(aPet){
    var tBody = document.getElementById('listBody');
    var row = 
    `<tr id="${aPet.id}">
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.type}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.contactPhone}</td>
    <td> <button onclick= "remove('${aPet.id}')"> x </button> </td>
    </tr>`;
    tBody.innerHTML+=row;
}


function remove(petId){
    console.log('You want to delete ' + petId);
    var tr = document.getElementById(petId);
    // var indexDelete=0;

    for(var i=0;i<salon.pets.length;i++)
    {
        var selectedPet = salon.pets[i];

        if(selectedPet.id==petId) // is the same pet?
        {
            indexDelete=i;
        }
        
    }
    salon.pets.splice(indexDelete,1);
    tr.remove();
}


function search(){
    var searchString = document.getElementById('inputSearch').value;

    for(var j=0;j<salon.pets.length;j++)
    {
        var searchedPet = salon.pets[j];

        if(searchedPet.id==searchString) // is the same pet?
        {
            theFoundedPet=j;
            document.getElementById('pet'+theFoundedPet).setAttribute
            ('class', 'selected');
            
            
        }
        
    }

}








salon.count();

// function display(aPet){
//     var list =document.getElementById('petList');
//     var li =document.createElement('li');
//     li.innerText=`${aPet.name}  ${aPet.age}  ${aPet.type}  ${aPet.breed}  ${aPet.service}`
//     li.setAttribute('class', 'list-group-item');
//     list.appendChild(li);
// }

// const pet1=  new Pet("Shaggy",5,"dog","Male","German Shepard","Hair cut","Oliver","0574875");
// const pet2 = new Pet("Ozzy",7,"dog","Male","boxer","shower","Samantha","987684");
// const pet3 = new Pet("Janis",2,"dog","female","boxer","shower","Sabrina","0490554");

// salon.pets.push(pet1);
// salon.pets.push(pet2);
// salon.pets.push(pet3);

//document.getElementById('petsInfo').innerHTML=`You have ${salon.pets.length} pets: ${salon.pets[0].name}, ${salon.pets[1].name}, ${salon.pets[2].name}`;



//pet1.status();
//pet1.feed();
//pet1.status();
//pet1.ownerContact();
//console.table(salon.pets);



// function search(){
//     var searchString = document.getElementById('inputSearch').value;

//     for(var j=0;j<salon.pets.length;j++)
//     {
//         var searchedPet = salon.pets[j];

//         if(searchedPet.id==searchString) // is the same pet?
//         {
//             theFounderPet=j;
//             document.getElementById('pet'+theFounderPet).setAttribute
//             ('class', 'selected');
//         }
//     }

// }

