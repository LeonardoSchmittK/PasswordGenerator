class Password {
 
   generate(size:number,extra?:string,place?:'beginning'|'ending'|'middle'):string|Error{

      try  {

     
            const numbers:string[] = ["1","2","3","4","5","6","7","8","9","10"];
            const upLetters:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            const lowLetters:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            const  possibleDigits:string[] = [...upLetters,...lowLetters,...numbers]


      const shuffleDigits = (digits:string[]):string =>{
         
         const password:string[] = [];

            for (let i = digits.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               const temp = digits[i];
               digits[i] = digits[j];
               digits[j] = temp;
               password.push(digits[i]);
            }

            if (extra && extra.length > size) 
               throw `${extra} has ${extra.length} letters and it's bigger than ${size}`
              
         
           
            !place && (place='beginning')
            place==='middle' && size++
            
               
            password.length= extra ? size - extra.length  :  size 


            const middle = Math.floor((password.length - 1) / 2);;
            
            place==='beginning' ? password.unshift(extra) : place==='middle' ?password[middle]=extra : password.push(extra);
       


         return password.join('')
      }

      return shuffleDigits(possibleDigits)


    }catch(err){
         return new Error(err)
         
      }
   }
}


 const myPassword = new Password().generate(10,'Leo','beginning')
 const mySecondPassword = new Password().generate(10);
 const myThirdPassword = new Password().generate(5,'T')

console.log({myPassword,mySecondPassword,myThirdPassword});
