const users = [
    { nome: 'Juca', idade: 25, cargo: 'front-end' },
    { nome: 'Márcia', idae: 23, cargo: 'back-end' },
    { nome: 'Victória', idade: 28, cargo: 'designer' },
    { name: 'Fábio', idade: 32, cargo: 'back-end' },
    { nome: 'Renata', idade: 21, cargo: 'front-end' },
  ]
  function generateInfo(user) {
    return `${user.nome} tem ${user.idade} anos e é ${user.job}.`
  }
  for (let i = 0; i < users.length; i++) {
    console.log(generateInfo(users[i]))
  }