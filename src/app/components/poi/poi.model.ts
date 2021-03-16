export interface Poi {
  id?: string;
  properties?: {
    nome?: string,
    raio?: number
  };
  geometry?: {
    x?: number,
    y?: number
  }
}