// QUestão 1

function VerificadorPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let x = 2; x <= Math.sqrt(numero); x++) {
      if (numero % x === 0) {
        return false;
      }
    }
    return true;
  }
  
  let numero = parseInt(prompt("Digite um número:"));
  
  if (VerificadorPrimo(numero)) {
    console.log(numero + " é primo.");
  } else {
    console.log(numero + " não é primo.");
  }
  
  console.log("Segue a lista de números primos entre 1 e 1000:");
  for (let x = 1; x <= 1000; x++) {
    if (VerificadorPrimo(x)) {
      console.log(x);
    }
  }
  
  // Questão 2

  function verificarSenha() {
    let senha = prompt("Digite uma senha:");
  
    if (
      senha.length < 8 ||
      !/[A-Z]/.test(senha) ||
      !/[a-z]/.test(senha) ||
      !/[0-9]/.test(senha)
    ) {
      console.log("Senha inválida. Tente novamente. Lembre-se que sua senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número");
      verificarSenha();
    } else {
      console.log("Senha válida.");
    }
  }
  
  verificarSenha();

  // Questão 3
  
  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  function exibirFatoriais() {
    console.log("Segue a lista dos fatoriais de 1 a 10:");
    for (let x = 1; x <= 10; x++) {
      let resultado = calcularFatorial(x);
      console.log("O fatorial de", x, "é", resultado);
    }
  }
  
  function obterNumero() {
    let numero = prompt("Digite um número:");
  
    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
      obterNumero();
    } else {
      let resultado = calcularFatorial(parseInt(numero));
      console.log("O fatorial de", numero, "é", resultado);
      exibirFatoriais();
    }
  }
  
  obterNumero();
  
  // Questão 4

  function verificarQuadradoPerfeito() {
    let numero = prompt("Digite um número:");
  
    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
      verificarQuadradoPerfeito();
    } else {
      numero = parseInt(numero);
  
      if (Math.sqrt(numero) % 1 === 0) {
        console.log(numero + " é um quadrado perfeito.");
      } else {
        console.log(numero + " não é um quadrado perfeito.");
      }
    }
  }
  
  verificarQuadradoPerfeito();
  