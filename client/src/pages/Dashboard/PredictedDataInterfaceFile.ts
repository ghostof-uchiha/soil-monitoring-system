// Create an interface for the prediction object
interface Prediction {
  crop: string;
  probability: number;
  _id: string;
}

// Create an interface for the predictedSoilData object
interface PredictedSoilData {
  _id: string;
  userId: string;
  N_level: number;
  P_level: number;
  K_level: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
  predictions: Prediction[];
  timestamp: string;
  __v: number;
}

export type { PredictedSoilData, Prediction };