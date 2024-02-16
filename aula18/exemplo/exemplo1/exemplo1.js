// O bloco try - catch é usado para lidar com exceções que podem ocorrer durante a execução
// de um bloco de código. O código dentro do bloco try é o código que pode gerar uma
// exceção. Se uma exceção ocorrer dentro do bloco try, o controle do programa será
// transferido para o bloco catch, onde você pode lidar com a exceção. Isso permite que você
// escreva código robusto que pode lidar com erros de forma elegante e controlada.
// Exemplo:
try {
  let x = y;
} catch (erro) {
  console.log("Ocorreu um erro:", erro);
}
// A sua estrutura funciona da seguinte forma:
try {
  Código;
} catch (erro) {
  // Código para caso dê errado
}
// Onde isso se aplica?
// caso de termos erros que inevitavelmente vão ser passíveis de ocorrer no código ou que
// você imagine que dê margem para erro, você pode aplicar esse código, que do contrário de
// dar um problema e parar todo o programa, ele apenas executa uma ação.
