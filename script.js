

let input = document.getElementById('input');
let button = document.getElementById('btn');
let output = document.getElementById('out');



button.addEventListener('click' , async function () {
    

    async function getData(){
        const inputValue = input.value      
        let second = 0 ;
      let timer = setInterval(function(){
            output.innerHTML = `Waiting...${second++}`
        } , 3000)
        
         let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDqARF7CQqW8o_uVrT5joBGDJYgWxGIAcc" , {
          method : "POST" ,
          headers : {
             'Content-Type': 'application/json',
     
          },
          body : JSON.stringify({
             contents :  [{
                     parts : [{
                         text : `"Give me one only trending Instagram caption based on the topic: ${inputValue}` ,
                     }]
          }]
          })
          
         })
         let data = await response.json();
         console.log(data);
     
         const generatedText =  data.candidates?.[0]?.content?.parts?.[0]?.text ;
         console.log(generatedText);
         
        
         
         output.innerHTML = generatedText ;
         
         clearInterval(timer)
  
     }
     getData();
    
})

let ham = document.getElementById('ham')

