interface ProgressEntry {
    date: string;
    weight?: number;
    steps?: number;
    distanceKm?: number;
    workoutsCompleted?: number;
    notes?: string;
  }
  
  interface ProgressState {
    entries: ProgressEntry[];
  }
  
  const initialState: ProgressState = {
    entries: [],
  };
  