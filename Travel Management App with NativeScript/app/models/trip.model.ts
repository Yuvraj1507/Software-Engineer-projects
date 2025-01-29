export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  location: Location;
  date: Date;
  duration: number; // in minutes
  cost: number;
}

export interface Trip {
  id: string;
  userId: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  destination: Location;
  activities: Activity[];
  budget: number;
  totalSpent: number;
  images: string[];
}