# Contador de Frequência de Palavras

## Descrição

A contagem de frequência de palavras é uma técnica amplamente utilizada em mecanismos de busca, análise de textos, processamento de linguagem natural (NLP) e mineração de dados.

Neste desafio, o objetivo é percorrer uma frase e contabilizar quantas vezes cada palavra aparece, armazenando o resultado em um objeto JavaScript.

Além da resolução do problema principal, a solução realiza uma etapa de normalização da string para tornar a contagem mais confiável, ignorando diferenças entre letras maiúsculas e minúsculas, removendo pontuações e tratando múltiplos espaços consecutivos.

---

## Problema

Você recebeu uma frase e precisa descobrir quantas vezes cada palavra aparece.

Essa lógica é muito utilizada em buscas, análise de texto e processamento de dados.

### Entrada

```javascript
const frase =
  "Este é um exercício de lógica com JavaScript , JavaScript é uma excelente linguagem!";
```

### Saída Esperada

```javascript
{
  este: 1,
  é: 2,
  um: 1,
  exercício: 1,
  de: 1,
  lógica: 1,
  com: 1,
  javascript: 2,
  uma: 1,
  excelente: 1,
  linguagem: 1
}
```

---

## Regras

- Utilizar JavaScript.
- Não utilizar bibliotecas externas.
- Ignorar diferenças entre letras maiúsculas e minúsculas.
- Resolver o desafio em até 20 minutos.

---

## Soluções Implementadas

### 1. Normalização da string

Antes da contagem, a frase é preparada para garantir um processamento consistente.

Foram utilizadas as seguintes operações:

- `toLowerCase()` para converter todas as palavras para letras minúsculas.
- `replace(/[,!]/g, "")` para remover caracteres de pontuação.
- `replace(/\s+/g, " ")` para substituir múltiplos espaços consecutivos por apenas um espaço.
- `trim()` para remover espaços no início e no final da string.

Essa etapa evita inconsistências durante a contagem das palavras.

### 2. Separação das palavras

Após a normalização, a frase é convertida em um array utilizando:

```javascript
split(" ");
```

Cada posição do array representa uma palavra da frase.

### 3. Contagem utilizando um objeto

Foi utilizado um objeto JavaScript como estrutura de dados para armazenar a frequência das palavras.

Durante a iteração:

- Caso a palavra ainda não exista no objeto, ela é inicializada com valor `1`.
- Caso já exista, seu contador é incrementado.

A verificação da existência da propriedade foi realizada utilizando:

```javascript
Object.hasOwn(contador, palavra);
```

Essa abordagem torna a solução simples, eficiente e de fácil manutenção.

---

## Complexidade

| Solução             | Complexidade de Tempo | Complexidade de Espaço |
| ------------------- | --------------------- | ---------------------- |
| Objeto + `for...of` | **O(n)**              | **O(n)**               |

Onde **n** representa a quantidade de palavras presentes na frase.

---

## Objetivos de Aprendizado

Durante este desafio foram praticados os seguintes conceitos:

- Manipulação de strings.
- Normalização de dados antes do processamento.
- Expressões regulares (Regex).
- Conversão de string para array utilizando `split()`.
- Estruturas de dados com objetos.
- Propriedades dinâmicas em objetos.
- Loops utilizando `for...of`.
- Implementação de um contador de frequência.
- Boas práticas de tratamento de entrada.

---

## Estrutura do Projeto

```text
contador-de-palavras/
│
├── solution.js
└── README.md
```

---

## Como Executar

Certifique-se de possuir o Node.js instalado.

No terminal, execute:

```bash
node solution.js
```

---

## Resultado Esperado

### Array de palavras

```javascript
[
  "este",
  "é",
  "um",
  "exercício",
  "de",
  "lógica",
  "com",
  "javascript",
  "javascript",
  "é",
  "uma",
  "excelente",
  "linguagem",
];
```

### Contagem de frequência

```javascript
{
  este: 1,
  "é": 2,
  um: 1,
  "exercício": 1,
  de: 1,
  "lógica": 1,
  com: 1,
  javascript: 2,
  uma: 1,
  excelente: 1,
  linguagem: 1
}
```

---

## Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo, prática de lógica de programação e aperfeiçoamento dos conhecimentos em JavaScript.
