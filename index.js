function calculator(string) {
    
    let array = string.split(" ");
    console.log(array[0], array[1], array[2]);

        let result = 0;
        let currentNumVal1 = 0;
        let currentNumVal3 = 0;
        let romNumber = false;
        let romNumber2 = false;

        let regNum = /\d|I|II|III|IV|V|VI|VII|VIII|IX|X|[+-/*]/g;
    
    
    if (array.length < 3 || array.length > 3) {

        throw Error ("недопустимая математическая операция");

    } else {

        let numRom = {
            "I": 1,
            "II": 2,
            "III": 3,
            "IV": 4,
            "V": 5,
            "VI": 6,
            "VII": 7,
            "VIII": 8,
            "IX": 9,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        };

        switch (array[0]) {

        case "I":
            currentNumVal1 += numRom["I"];
            romNumber = true;
            break;

        case "II":
            currentNumVal1 += numRom["II"];
            romNumber = true;
            break;

        case "III":
            currentNumVal1 += numRom["III"];
            romNumber = true;
            break;

        case "IV":
            currentNumVal1 += numRom["IV"];
            romNumber = true;
            break;

        case "V":
            currentNumVal1 += numRom["V"];
            romNumber = true;
            break;

        case "VI":
            currentNumVal1 += numRom["VI"];
            romNumber = true;
            break;

        case "VII":
            currentNumVal1 += numRom["VII"];
            romNumber = true;
            break;

        case "VIII":
            currentNumVal1 += numRom["VIII"];
            romNumber = true;
            break;

        case "VIII":
            currentNumVal1 += numRom["VIII"];
            romNumber = true;
            break;

        case "IX":
            currentNumVal1 += numRom["IX"];
            romNumber = true;
            break;

        case "X":
            currentNumVal1 += numRom["X"];
            romNumber = true;
            break;

        default:
            currentNumVal1 = `Что-то пошло не так`;
            break;

        };

        switch (array[2]) {

        case "I":
            currentNumVal3 += numRom["I"];
            romNumber2 = true;
            break;

        case "II":
            currentNumVal3 += numRom["II"];
            romNumber2 = true;
            break;

        case "III":
            currentNumVal3 += numRom["III"];
            romNumber2 = true;
            break;

        case "IV":
            currentNumVal3 += numRom["IV"];
            romNumber2 = true;
            break;

        case "V":
            currentNumVal3 += numRom["V"];
            romNumber2 = true;
            break;

        case "VI":
            currentNumVal3 += numRom["VI"];
            romNumber2 = true;
            break;

        case "VII":
            currentNumVal3 += numRom["VII"];
            romNumber2 = true;
            break;

        case "VIII":
            currentNumVal3 += numRom["VIII"];
            romNumber2 = true;
            break;

        case "VIII":
            currentNumVal3 += numRom["VIII"];
            romNumber2 = true;
            break;

        case "IX":
            currentNumVal3 += numRom["IX"];
            romNumber2 = true;
            break;

        case "X":
            currentNumVal3 += numRom["X"];
            romNumber2 = true;
            break;

        default:
            currentNumVal3 = `Что-то пошло не так`;
            break;

        };

        switch (array[1]) {

        case "+":
            result = (Number(array[0]) || Number(currentNumVal1)) + (Number(array[2]) || Number(currentNumVal3));
            break;

        case "-":
            result = (Number(array[0]) || Number(currentNumVal1)) - (Number(array[2]) || Number(currentNumVal3));
            break;

        case "/":
            result = (Number(array[0]) || Number(currentNumVal1)) / (Number(array[2]) || Number(currentNumVal3));
            result = Math.trunc(result);
            break;

        case "*":
            result = (Number(array[0]) || currentNumVal1) * (Number(array[2]) || currentNumVal3);
            break;

        default:
            result = `Что-то пошло не так`;
            break;
        };
        
        if (romNumber == false && romNumber2 == false) {
            
            return String(Math.round(result));

        } else if (romNumber == true && romNumber2 == true) {

            function convertRomNum (resultRom) {
                let resRom = "";

                for (let val in numRom) {

                    if(resultRom == numRom[val]) { 
                        resRom += val;
                    };
                };
    
                if (resRom <= 0) { resRom = "Тип пустая строка"}; 
                
                return resRom;
            };
    
            let rR = convertRomNum (result);
            return rR;
            

        } else { throw Error ("недопустимая математическая операция") };

    };
    
};

let res = calculator("VII / III");
console.log(res);


//console.log(res);


// function convertRomNum (resultRom) {
//     let resRom = ""
//     for (let val in numRom) {
        
//         while (numRom[val] <= resultRom) {
//             resRom += val;
            
//             resultRom = resultRom - numRom[val]
            
//         }
//     }
    
//     return resRom
// };