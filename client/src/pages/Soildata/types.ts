// types.ts
export interface Sample {
  id: number;
  moisture: {
    analog: number;
    moisture: number;
    message: string;
  };
  N: {
    level: number;
  };
  P: {
    level: number;
  };
  K: {
    level: number;
  };
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}
