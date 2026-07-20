const palavra = "JavaScript".toLowerCase();

const letras = palavra.split("");

const armazenarFrequencia = {};

console.log(letras);

for (let letra of letras) {
  if (!Object.hasOwn(armazenarFrequencia, letra)) {
    armazenarFrequencia[letra] = 1;
  } else {
    armazenarFrequencia[letra] += 1;
  }
}

let letraRepetida = "";
let maiorFrequencia = 0;

for (let letra in armazenarFrequencia) {
  let frequenciaAtual = armazenarFrequencia[letra];

  if (frequenciaAtual > maiorFrequencia) {
    maiorFrequencia = frequenciaAtual;
    letraRepetida = letra;
  }
}

console.log(
  `A letra que mais se repete é a letra ${letraRepetida.toUpperCase()}, ela se repete ${maiorFrequencia} vezes.`,
);
