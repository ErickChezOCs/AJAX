import { AjaxLib } from "./api/ajax_lib.js";


let para = document.getElementsByTagName('p')[0];
let table = document.getElementById('tableResults');
let getButton = document.getElementById('get');
let postButton = document.getElementById('post');
let putButton = document.getElementById('put');
let deleteButton = document.getElementById('delete');


const SERVER_URL = 'http://127.0.0.1:4200/api';

// *********** GET REQUEST *************/

getButton.addEventListener('click', () => {
    //turning fetchDogs into a synchronous function
    fetchDogs();
    para.className = 'get';
    para.textContent = "GET request was successful!";
}); 

let fetchDogs = () => {
    let url = SERVER_URL + '/dogs';
    let xhr = new AjaxLib()
    xhr.get(url,(err,dogs) => {
        if(err) throw err;
        let tableRows = '';
            for(const dog of dogs) {
                tableRows += `
                    <tr>
                        <td>${dog.id}</td>
                        <td>${dog.name}</td>
                        <td>${dog.age}</td>
                        <td>${dog.gender}</td>
                        <td>${dog.notes}</td>
                    </tr>
                  `;
            };
           
            table.innerHTML = tableRows;

});           
   
};

// *********** POST REQUEST *************/

postButton.addEventListener('click', () => {
    
    let dog = {
        id : 10,
        name:"MickyMail",
        age : 3,
        gender:"Female",
        notes :"So pretty little chose de rien du tout "
    };
    let xhr = new AjaxLib();
    let url = SERVER_URL + '/dogs';
    xhr.post(url,dog, (responseData) => {
        fetchDogs();
        para.className = 'post';
        para.textContent = responseData.message;

    })
      
}); 


// *********** PUT REQUEST *************/
putButton.addEventListener('click', () => {
    // we want to update the dog with ID of 10
    let id = 10;
    let dog = {
        id : id,
        name:"WhyPatric",
        age : 2,
        gender:"Male",
        notes :"trois en un  "
    };
 // send the updated data to our serve and update it in our dogs array
    let xhr = new AjaxLib();
    let url = SERVER_URL + '/dogs/'+id;
    xhr.put(url,dog, (responseData) => {
        fetchDogs();
        para.className = 'put';
        para.textContent = responseData.message;

    })
      
}); 

// *********** DELETE REQUEST *************/
deleteButton.addEventListener('click', () => {
    // let delete the dog with ID of 10
    let id = 10;
    
 // send the updated data to our serve and update it in our dogs array
    let xhr = new AjaxLib();
    let url = SERVER_URL + '/dogs/'+id;
    xhr.delete(url, (responseData) => {
        fetchDogs();
        para.className = 'delete';
        para.textContent = responseData.message;

    })
      
}); 