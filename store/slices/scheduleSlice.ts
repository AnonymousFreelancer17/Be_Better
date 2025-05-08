interface Reminder {
    id: string;
    type: 'meal' | 'workout' | 'hydration' | 'custom';
    message: string;
    time: string; // HH:mm
    repeat: 'daily' | 'weekly' | 'once';
  }
  
  interface ScheduledEvent {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    type: 'meal' | 'workout' | 'custom';
    description?: string;
    time: string;
  }
  
  interface ScheduleState {
    reminders: Reminder[];
    events: ScheduledEvent[];
  }
  
  const initialState: ScheduleState = {
    reminders: [],
    events: [],
  };
  