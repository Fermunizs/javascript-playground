const frase =
  "Este é um exercício de lógica com JavaScript , JavaScript é uma excelente linguagem!"
    .toLowerCase()
    .replace(/[,!]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const contador = {};

const palavras = frase.split(" ");

console.log(palavras);

for (const palavra of palavras) {
  if (!Object.hasOwn(contador, palavra)) {
    contador[palavra] = 1;
  } else {
    contador[palavra] += 1;
  }
}

console.log(contador);
