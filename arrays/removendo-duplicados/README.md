# Removendo Duplicados de um Array

## Descrição

Em diversas aplicações é comum receber listas contendo valores duplicados, como IDs de usuários, produtos ou registros. O objetivo deste desafio é encontrar uma forma de retornar apenas os valores únicos de um array utilizando JavaScript.

Este exercício tem como foco o desenvolvimento da lógica de programação e a exploração de diferentes abordagens para resolver o mesmo problema.

---

## Problema

Imagine que você recebeu uma lista de IDs de usuários, mas alguns aparecem mais de uma vez.

Como retornar apenas os valores únicos?

### Entrada

```javascript
const ids = [1, 2, 3, 2, 4, 5, 1, 6, 3];
```

### Saída esperada

```javascript
[1, 2, 3, 4, 5, 6];
```

---

## Regras

- Utilizar JavaScript.
- Resolver o desafio sem bibliotecas externas.
- Tentar concluir a solução em até 20 minutos.
- Sempre que possível, implementar mais de uma abordagem.

---

## Soluções Implementadas

Este repositório apresenta três formas diferentes de resolver o problema:

### 1. Utilizando `Set`

A solução mais simples e moderna, aproveitando a estrutura de dados `Set`, que não permite valores duplicados.

### 2. Utilizando `filter()` e `indexOf()`

Percorre o array mantendo apenas a primeira ocorrência de cada elemento.

### 3. Utilizando `includes()`

Constrói um novo array verificando se o valor já foi adicionado antes de inseri-lo.

---

## Complexidade

| Solução          | Complexidade de Tempo | Complexidade de Espaço |
| ---------------- | --------------------- | ---------------------- |
| Set              | O(n)                  | O(n)                   |
| filter + indexOf | O(n²)                 | O(n)                   |
| includes         | O(n²)                 | O(n)                   |

---

## Objetivos de Aprendizado

Durante este desafio foram praticados os seguintes conceitos:

- Manipulação de arrays.
- Estruturas de dados (`Set`).
- Métodos nativos do JavaScript.
- Comparação entre diferentes abordagens.
- Análise de legibilidade e complexidade de algoritmos.

---

## Estrutura do Projeto

```
removendo-duplicados/
│
├── solution_1.js
|__ solution_2.js
|__ solution_3.js
└── README.md
```

---

## Como executar

Certifique-se de possuir o Node.js instalado.

No terminal, execute:

```bash
node solution_1.js
```

---

## Resultado esperado

```javascript
[1, 2, 3, 4, 5, 6];
```

---

## Licença

Este projeto foi desenvolvido para fins de estudo e prática de lógica de programação.
