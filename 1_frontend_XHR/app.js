import { AjaxLib } from "./api/ajax_lib.js";


let para = document.getElementsByTagName('p')[0];
let table = document.getElementById('tableResults');
let getButton = document.getElementById('get');
let postButton = document.getElementById('post');


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
        id : 17,
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