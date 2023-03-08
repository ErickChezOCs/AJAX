function AjaxLib() {
 this.xhr = new XMLHttpRequest();
    // GET REQUEST 
  this.get = (url,callback) => {
    // setting the third argument of xhr.open to false turns it into a synchronous function 
        this.xhr.open('GET',url,false);

        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                let data = this.xhr.response;
                let realDogs = JSON.parse(data); 
                 let Dogs = (Object.values(realDogs));
                 let dogs = Dogs[0];
               callback(null,dogs);
            } else {
                callback('Error has occured with a GET request');
            }
        }
        this.xhr.send();
  }

  
// POST REQUEST
this.post = (url, dog , callback) => {
    this.xhr.open("POST",url);
    this.xhr.setRequestHeader('Content-Type' , 'application/json');
    this.xhr.onload = () => {
        let data =  this.xhr.response;
        let postRequestData = JSON.parse(data);
        callback(postRequestData);
    }
    this.xhr.send(JSON.stringify(dog))
};









}

export {AjaxLib};