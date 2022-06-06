const space = document.querySelector(".cursor")
const nameTable = [
    "Atnak Le Boyzer",
    "Mouhi Kpogbo",
    "Prince Charmant",
    "Mr Cartoon",
    "La Tchotchroni",
    "K developpeur"
]


let indexLettre = 0 ;
let indexMot= 0 ;

const generateLetter = ()=>
{
    const letter = document.createElement('span') ;
    space.appendChild(letter)

    letter.textContent = nameTable[indexMot][indexLettre] ;
    setTimeout(()=>{
        letter.remove()
    },2000)

    
}




const loop = () =>

{

    setTimeout(()=>{

        if(indexMot == nameTable.length)
      {
          indexMot = 0 ;
          indexLettre = 0 ;
          loop()
  
      }
      else if(indexLettre < nameTable[indexMot].length)
      {
          generateLetter()
          indexLettre++;
          loop()

         
      }
      else if(indexLettre >= nameTable[indexMot].length)
      {
          setTimeout(()=>{
          indexMot++ ;
          indexLettre = 0 ;
          loop() ;
          },2000)
      }
    },100)
 
}

loop()