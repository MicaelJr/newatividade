//função exercicio 1 - restaurante
function calcularpratos() {
    //DECLARANDO AS VARIAVEIS
    var frmkilo = parseFloat(kilo.value);
    var frmpeso = parseFloat(peso.value);
    var resultado;
    
    
    //calculo do VALOR DO PRATO
    resultado = frmkilo * frmpeso

    
    //div onde o resultado vai aparecer
    valorfinalprato.innerHTML = `
        <h1>R$ ${resultado}</h1>
    `
}
//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularpratos
btnCalcularprato.addEventListener('click', calcularpratos)


//função exercicio 2 - Lan House
function calcularuso() {
    //DECLARANDO AS VARIAVEIS
    var frmValormnt = parseFloat(valormnt.value);
    var frmTempuso = parseFloat(tempuso.value);
    var resultado;
    
    

    //recebe o tempo e divide por 15
    resultado = frmTempuso / 15
    //acrescenta uma casa decimal no resultado da divisão  
    valorfish = Math.ceil(resultado)
    //multiplica o valor arredondado pelo valor dos 15mnts
    finishvalor = valorfish * frmValormnt  
      
      
    //div onde o resultado vai aparecer
    valorfinaluso.innerHTML = `
    <h1>R$ ${finishvalor}</h1>
`
}
//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularuso
btnCalcularmnt.addEventListener('click', calcularuso)

//função exercicio 3 - Lan House
function calcularimparpar() {
    //DECLARANDO AS VARIAVEIS
    var frmnmr = parseInt(nmr.value);
        
    
    //verificar se é impar ou par
    if(frmnmr & 1){
        resultado = ("Impar");
    } else {
        resultado = ("Par");
    }
        
       
    //div onde o resultado vai aparecer
    result.innerHTML = `
    <h3>Seu número é: ${resultado}</h3>
`
}
//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularimparpar
btnVerificar.addEventListener('click', calcularimparpar)


//função exercicio 4 - Farmacia
function calcularporcentagem() {
    //DECLARANDO AS VARIAVEIS
    var frmname = namemedc.value;
    var frmvalor = valormedc.value;
    var percentual = 0.60;
    var resultado;
    
    

    //calculo do valor de 1 unidade - somando o valor da segunda com desconto
    resultado = frmvalor * percentual
    result2und = parseFloat(resultado) + parseFloat(frmvalor)


    
    //div onde o resultado vai aparecer
    valorfinal.innerHTML = `
        <p>${frmname} R$:${frmvalor}</p>
        <p>Promoção de 40% OFF na 2ª unidade.</p>
        <p><strong>Duas unidades na PROMOÇÃO de R$${result2und}</strong></p>
    `
}
//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularporcentagem
btnCalcularfarmed.addEventListener('click', calcularporcentagem)


//função exercicio 5 - Infração de Trânsito
function calcularinfracao() {
    //DECLARANDO AS VARIAVEIS
    var frmveloperm = parseInt(velper.value);
    var frmvelomot = parseInt(velmot.value);
    
     
    //calculo para tirar a porcentagem e difinir multa leve/multa grave   
    calcmultaleve = parseInt(frmveloperm * 0.20) + parseInt(frmveloperm)

    //condições das infrações
    if(frmvelomot <= frmveloperm){
        resultado = ("Sem Multa");
    }
    else if (frmvelomot <= calcmultaleve) {
        resultado = ("Multa leve");
    } else {
        resultado = ("Multa Grave");
    }
            
    
    //div onde o resultado vai aparecer
    infrafinal.innerHTML = `
        <h1>${resultado}</h1>
    `
}
//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularinfracao
btnCalcularinfra.addEventListener('click', calcularinfracao)