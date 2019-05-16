n = prompt("rentrer ta factorielle");

function factorial(n) 
{ 
    if (n<0) { 
        alert ("Veuillez Saisir Un Entier Positif ou null"); 
        return "Error"; 
    } 
    
    if (n == 0) { 
        return 1; 
    }        

    else { 
        return n * factorial (n-1); 
    } 
} 
console.log("ta factorielle est "+factorial(n));
