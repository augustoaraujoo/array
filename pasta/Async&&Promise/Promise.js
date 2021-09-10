const pro = new Promise((resolve) => {
  resolve({ idadePermitida: 18 });
});

pro.then((value) => {
  const usuario = 18;
  if (usuario < value.idadePermitida) {
    return console.log("negado"), getIdadeMenor(usuario);
  } else {
    console.log("acesso ok"), getIdadeMaior(usuario);
  }
});
function getIdadeMenor(usuario) {
  const obj = {
    idadeUser: [],
  };
  obj.idadeUser.push(usuario);
  return console.log(obj);
}
const getIdadeMaior = (usuario) => {
  return console.log(`${usuario}`);
};
