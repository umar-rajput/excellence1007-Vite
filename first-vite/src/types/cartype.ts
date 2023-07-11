export type Cars = {
  id: number;
  name: string;
  engine: Engine[];
};

export type Engine = {
  name: string;
  power: number;
  type: string;
};
