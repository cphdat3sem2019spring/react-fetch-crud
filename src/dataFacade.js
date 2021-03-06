let URL = "http://localhost:3456/api";

// The two methods below, are the utility-methods given here (use them if you like, and if you do, bookmark the 
// document)://https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing 

function makeOptions(method, body) {
  var opts =  {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  }
  if(body){
    opts.body = JSON.stringify(body);
  }
  return opts;
 }

function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
}
 
class DataFacade {
  
  /*
  OBSERVE-1: This returns a promise, NOT the actual data, You must handle asynchronicity in your client code
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketched in the example below*/
    
  // In order to use await, a method must be "marked" with async
  // async getPersons() {
  //   return await fetch(URL).then(handleHttpErrors)
  // }
  
 }

export default new DataFacade();
