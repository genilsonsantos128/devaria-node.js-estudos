const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = "minha primeira constante";
    console.log(minhaPrimeiraConstanteString);

    let leituraDeCampo;
    readLine.question("informe sua idade ", input => {
            leituraDeCampo = input;
         console.log('o usuario digitou:',leituraDeCampo);
    });
        
    
        