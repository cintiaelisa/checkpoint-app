export interface Posicao {
  id?: string;
  properties?: {
    placa?: string,
    data_posicao?: Date,
    velocidade?: number,
    ignicao?: string
  };
  geometry?: {
    x?: number,
    y?: number
  }
}