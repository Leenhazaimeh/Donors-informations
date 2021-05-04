'use strict';

let donaForm =document.getElementById('donaForm');
let table =document.getElementById('table');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let objectArray = [];
  let id =0 ;
   function Donar (dId, donar ,amount ){
       this.dId=dId;
    //    this.sName=this.spE[0];
       this.donar=donar;
       this.don=this.randomDon;
       this.amount=amount;
       objectArray.push(this);
   }

Donar.prototype.randomDon=function(){
    return this.getRandomInt(18, 30);
};

donaForm.addEventListener('submit', addDONer);
let total = 0 ;
function addDONer(event){
    event.preventDefault();
    id++;
    new Donar ( id ,sname.value,parseInt(samount.value) );
    savObj();
    getObj ();
    result ();

}

function result (){
for  (let i = 0 ; i< objectArray.length; i ++){
let trElemant = document.createElement('tr');
table.appendChild(trElemant);

let td1Element = document.createElement('td');
trElemant.appendChild(td1Element);
td1Element.textContent=objectArray[i].dId;

let td2Element = document.createElement('td');
trElemant.appendChild(td2Element);
td2Element.textContent=objectArray[i].donar;

let td3Element = document.createElement('td');
trElemant.appendChild(td3Element);
td3Element.textContent=objectArray[i].amount;

total=parseInt(total)+parseInt(objectArray[i].amount);

}
let totals =document.getElementById('totals');
totals.textContent=`Total=${total}`;
}

getObj ();
result ();

function savObj(){
    let Save = JSON.stringify(objectArray);
    let allDonar = localStorage.setItem('allDonar',Save);
}

function getObj (){
    let gittingObj = localStorage.getItem('allDonar');
    let donObj = JSON.parse(gittingObj);
    if (donObj){
        objectArray=donObj;
    }
}