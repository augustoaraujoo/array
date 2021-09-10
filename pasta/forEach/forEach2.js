const jogadores = [
  "augusto",
  "pedro",
  "carla",
  "lucas",
  "arthur",
  "josé",
  "antony",
];

jogadores.forEach(function (nome, indice) {
  console.log(`(${indice + 0})  ${nome} `);
});

// jogadores.forEach(nome=>console.log(`seu nome é ${nome}`.replace('é','É')))
