let lista = [];

while (true) {
  let opcao_usuario = Number(
    prompt(
      'O que você quer fazer? Para adicionar nomo a lista digite "1"\nPara chamar pessoa digite "2"'
    )
  );
  if (opcao_usuario == 1) {
    var nome = prompt("Digite o nome:");
    lista.push(" " + nome);
    alert(lista);
    if (lista == 20) {
      alert(`Sua lista esta cheia com 20 pessoas\n${lista}`);
      break;
    }
  } else if (opcao_usuario == 2) {
    lista.pop();
    alert(lista);
    if (lista == 0) {
      alert("Sua lista não tem ninguém!");
      break;
    }
  }
}
