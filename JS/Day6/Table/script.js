'use strict';

let arr = [
    {
        name:'Airi Satou',
        position:'Accountant',
        office:'Tokyo',
        age:33,
        start_date:'2008/11/28'
    },
    {
        name:'Caesar Vance',
        position:'Pre-Sales Support',
        office:'New York',
        age:21,
        start_date:'2011/12/12'
    },
   
    {
        name:'Bradley Greer',
        position:'Software Engineer',
        office:'San Francisco',
        age:28,
        start_date:'2011/06/07'
    },
    {
        name:'Angelica Ramoas',
        position:'CEO',
        office:'London',
        age:66,
        start_date:'2009/10/09'
    },
    

]

let body = document.querySelector('.body')

const addRow = function(arr){
    body.innerHTML = '';
    for(const obj of arr){
        let html = `
        <tr class="row">
        <td>${obj.name}</td>
        <td>${obj.position}</td>
        <td>${obj.office}</td>
        <td>${obj.age}</td>
        <td>${obj.start_date}</td>
        </tr>
    `
    body.insertAdjacentHTML('beforeend', html)
    }

}

addRow(arr)



const sortNameAscend = document.querySelector('.nameAscend')
const sortPositionAscend = document.querySelector('.positionAscend')
const sortOfficeAscend = document.querySelector('.officeAscend')
const sortAgeAscend = document.querySelector('.ageAscend')
const sortDateAscend = document.querySelector('.dateAscend')


sortNameAscend.addEventListener('click',function(){
    arr.sort((a, b) => a.name.localeCompare(b.name));
    
    addRow(arr)
})

sortPositionAscend.addEventListener('click',function(){
    arr.sort((a, b) => a.position.localeCompare(b.position));
    addRow(arr)
})

sortOfficeAscend.addEventListener('click',function(){
    arr.sort((a, b) => a.office.localeCompare(b.office));
 
    addRow(arr)
})

sortAgeAscend.addEventListener('click', function() {
    arr.sort((a, b) => a.age - b.age); 
    addRow(arr);
  });

sortDateAscend.addEventListener('click',function(){
    arr.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    addRow(arr)
})


const sortNamedescend = document.querySelector('.namedescend')
const sortPositiondescend = document.querySelector('.positiondescend')
const sortOfficedescend= document.querySelector('.officedescend')
const sortAgedescend = document.querySelector('.agedescend')
const sortDatedescend = document.querySelector('.datedescend')


sortNamedescend.addEventListener('click',function(){
    arr.sort((a, b) => b.name.localeCompare(a.name));
    
    addRow(arr)
})

sortPositiondescend.addEventListener('click',function(){
    arr.sort((a, b) => b.position.localeCompare(a.position));
    addRow(arr)
})

sortOfficedescend.addEventListener('click',function(){
    arr.sort((a, b) => b.office.localeCompare(a.office));
 
    addRow(arr)
})

sortAgedescend.addEventListener('click', function() {
    arr.sort((a, b) => b.age - a.age); 
    addRow(arr);
  });

  sortDatedescend.addEventListener('click',function(){
    arr.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    addRow(arr)
})


const add = document.querySelector('.add');
const close = document.querySelector('.close');
const submit = document.getElementById('submit');
const form = document.querySelector('.form')
const overlay = document.querySelector('.overlay')



add.addEventListener('click',function(){
    form.classList.remove('hidden')
   overlay.classList.remove('hidden')
})

close.addEventListener('click',function(){
     form.classList.add('hidden')
   overlay.classList.add('hidden')
})

overlay.addEventListener('click',function(){
     form.classList.add('hidden')
   overlay.classList.add('hidden')
})
 
submit.addEventListener('click',function(e){
    e.preventDefault();
    const obj = {}
    obj.name = document.getElementById('name').value;
    obj.position = document.getElementById('position').value;
    obj.office = document.getElementById('office').value;
    obj.age = Number(document.getElementById('age').value);
    obj.start_date = document.getElementById('date').value;
    arr.push(obj)
    console.log(arr)
    addRow(arr)
    form.classList.add('hidden')
   overlay.classList.add('hidden')
})







