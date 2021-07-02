```function calculaPrecoTotal(quantidade) {
  const valor1 = 1.30
  const valor2 = 1
  if (quantidade < 12) {
    return valor1 * quantidade
  } else {
    return valor2 * quantidade
  }
}```