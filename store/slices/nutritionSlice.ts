interface Ingredient {
    name: string;
    quantity: string;
  }
  
  interface Meal {
    id: string;
    name: string;
    ingredients: Ingredient[];
    recipe: string;
    imageUrl: string;
    calories: number;
    macros: { carbs: number; protein: number; fat: number };
    prepTime: number; // minutes
  }
  
  interface DayMealPlan {
    breakfast: Meal[];
    lunch: Meal[];
    dinner: Meal[];
    snacks: Meal[];
  }
  
  interface NutritionState {
    mealPlans: Record<string, DayMealPlan>; // keyed by date
    foodLog: {
      date: string;
      entries: Meal[];
    }[];
    dailyGoals: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  }
  
  const initialState: NutritionState = {
    mealPlans: {},
    foodLog: [],
    dailyGoals: {
      calories: 2000,
      protein: 150,
      carbs: 200,
      fat: 70,
    },
  };
  