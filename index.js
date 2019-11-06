// Add your code here
function submitData(uName,uEmail)
{
  let dataObj = {name:uName,email:uEmail};
  let configObj ={
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
    body: JSON.stringify(dataObj);
  };
  
}

