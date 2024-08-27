let resultado = calcular (105, 100)

if(resultado <=10){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Ferro")
}
else if((resultado >=11) && (resultado <=20)){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Bronze")
}
else if((resultado >=21) && (resultado <=50)){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Prata")
}
else if((resultado >=51) && (resultado <=80)){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Ouro")
}
else if((resultado >=81) && (resultado <=90)){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Diamante")
}
else if((resultado >=91) && (resultado <=100)){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Lendário")
}
else if(resultado >=101){
    console.log("o Herói tem de saldo " + resultado + " está no nível de Bronze")
}
else{
    console.log()
}

function calcular(numA, numB){
    return numA - numB
}
