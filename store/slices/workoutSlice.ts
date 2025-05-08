interface Exercise {
    id: string;
    name: string;
    sets: number;
    reps: number;
    restTime: number; // in seconds
    equipment: string[];
    videoUrl?: string;
  }
  
  interface WorkoutPlan {
    id: string;
    title: string;
    description: string;
    type: string; // e.g., "strength"
    durationMinutes: number;
    daysPerWeek: number;
    level: string;
    exercises: Exercise[];
  }
  
  interface WorkoutState {
    plans: WorkoutPlan[];
    currentPlanId: string | null;
    completedWorkouts: string[]; // workout IDs
  }
  
  const initialState: WorkoutState = {
    plans: [],
    currentPlanId: null,
    completedWorkouts: [],
  };
  