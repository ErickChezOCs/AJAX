let para = document.getElementsByClassName('p')[0];
let table = document.getElementById('tableResults');
let getButton = document.getElementById('get');


const SERVER_URL = 'http://127.0.0.1:4200/api';

// *********** GET REQUEST *************/

getButton.addEventListener('click', () => {
    fetchDogs();
} );

let fetchDogs = () => {
    let url = SERVER_URL + '/dogs';
    let method = 'GET';

    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
        if(xhr.status === 200) {
            let data = xhr.response;
            console.log(typeof(data));
            let dogs = JSON.parse(data); 
            console.log(typeof(dogs));
            let Dogs = (Object.values(dogs));
            let realDogs = Dogs[0];
            console.log(realDogs[0].name);
             
            let tableRows = '';
            for(const dog of realDogs) {
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

        }else {
            throw new Error('Your GET request did not succed!')
        }
    };
    
    
    //envoyez la requête au serveur
    xhr.send();
}