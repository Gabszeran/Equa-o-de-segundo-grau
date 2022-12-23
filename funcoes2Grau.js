// ax² + bx + c = 0

function segundoGrau(a, b, c) {
  if (a == 0) {
    return "não é uma função de segundo grau";
  }
  var valor_fora_raiz = Math.pow(b, 2) - 4 * a * c;
  if (valor_fora_raiz < 0) {
    return "Não existe solução real";
  }
  var raiz = Math.sqrt(valor_fora_raiz);
  var x1 = (-b + raiz) / (2 * a);
  var x2 = (-b - raiz) / (2 * a);
  return "x1 = " + x1 + " e x2 = " + x2;
}
console.log(segundoGrau(10, 2, 80));
