function AjaxLib() {

    // GET REQUEST 
  this.get = (url) => {
        return fetch(url)
            .then(data => data.json())
            .catch(err => console.log(err))
    // 

  }

  
// POST REQUEST
this.post = (url, dog , callback) => {
    this.xhr.open("POST",url);
    this.xhr.setRequestHeader('Content-Type' , 'application/json');
    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            let data =  this.xhr.response;
            let postRequestData = JSON.parse(data);
            callback(postRequestData);
        } else {
            throw "The staus is not 200. That's too bad!"
        }
       
    }
    this.xhr.onerror = (err) =>{
        alert("An error occured with the status: ",err.currentTarget.status);
    }
    this.xhr.send(JSON.stringify(dog))
};





// PUT REQUEST
this.put = (url, updateddog , callback) => {
    this.xhr.open("PUT",url);
    this.xhr.setRequestHeader('Content-Type' , 'application/json');
    // defining  the ajax callback function
    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
        let data =  this.xhr.response;
        let putRequestData = JSON.parse(data);
        callback(putRequestData);
        } else {
            throw " The status was not 200! Bad."
        }
        
    }
    this.xhr.onerror = (err) => {
        alert("An error occured with status: ", + err.currentTarget.status);
    }

    this.xhr.send(JSON.stringify(updateddog));
};

// DELETE REQUEST
this.delete = (url, callback) => {
    this.xhr.open("DELETE",url);
    // defining  the ajax callback function
    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
        let data =  this.xhr.response;
        let deleteRequestData = JSON.parse(data);
        callback(deleteRequestData);
        } else {
            throw " The status was not 200! Bad."
        }
        
    }
    this.xhr.onerror = (err) => {
        alert("An error occured with status: ", + err.currentTarget.status);
    }

    this.xhr.send();
};








}

export {AjaxLib};