const converterPontos = require('../src/converterPontos');

describe('converterPontos', () => {
  test('converte valores positivos corretamente', () => {
    expect(converterPontos(5)).toBe(50);
    expect(converterPontos(0)).toBe(0);
  });

  test('retorna 0 para valores negativos', () => {
    expect(converterPontos(-1)).toBe(0);
    expect(converterPontos(-100)).toBe(0);
  });
});
