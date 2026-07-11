//Imagine que você recebeu uma lista de IDs de usuários, mas alguns aparecem mais de uma vez.
//Como retornar apenas os valores únicos?

const ids = [1, 2, 3, 2, 4, 5, 1, 6, 7, 7, 3];

const result = [...new Set(ids)];

console.log(result);
