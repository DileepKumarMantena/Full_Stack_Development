fetch('https://randomuser.me/api')  .
then(response => { if (!response.ok) 
    {  throw new Error('Network response was not ok');  } 
     return response.text();  })  
     .then(data => {  console.log('Response:', data); 
const jsondata = JSON.parse(data); 
 console.log('DATA:',data) 
 const firstName = jsondata.results[0].name.first; 
  console.log('FIRSTNAME:',firstName)  }) 
   .catch(error => { 
     console.error('Error fetching DATAM FROM API:', error);  });