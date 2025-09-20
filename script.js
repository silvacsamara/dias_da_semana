/*Dia da semana com switch

- Pergunte ao usuário um número de 1 a 7.
- Mostre o dia correspondente da semana:
    - 1 → Segunda
    - 2 → Terça
    - 3 → Quarta
    - 4 → Quinta
    - 5 → Sexta
    - 6 → Sábado
    - 7 → Domingo
- Se o número for inválido, mostre `"Número inválido"`
*/

let dia = parseInt(prompt("Digite um número de 1 a 7: "))

switch(dia){
    case 1:
        console.log("Segunda")
        break;

    case 2:
        console.log("Terça")
        break;

    case 3:
        console.log("Quarta")
        break;
    
    case 4:
        console.log("Quinta")
        break;
    
    case 5:
        console.log("Sexta")
        break;
    
    case 6:
        console.log("Sábado")
        break;
    
    case 7:
        console.log("Domingo")
        break;

    default:
        console.log("valor inválido. Digite um número de 1 a 7.")
}

