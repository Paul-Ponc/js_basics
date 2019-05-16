
const floor = parseInt(window.prompt("Veuillez saisir un nombre."));

function pyramide(floor)
{
    while (floor != 0) {
    console.log(Array(floor).fill('*').join(''));
    floor--;
    }
    return Array;
}

pyramide(floor);
