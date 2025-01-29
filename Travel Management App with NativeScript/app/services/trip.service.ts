import { Observable } from '@nativescript/core';
import { Trip, Activity } from '../models/trip.model';

class TripService extends Observable {
  private static instance: TripService;
  private trips: Trip[] = [];

  private constructor() {
    super();
  }

  public static getInstance(): TripService {
    if (!TripService.instance) {
      TripService.instance = new TripService();
    }
    return TripService.instance;
  }

  async getTrips(): Promise<Trip[]> {
    // Simulate API call
    return this.trips;
  }

  async createTrip(trip: Omit<Trip, 'id'>): Promise<Trip> {
    const newTrip = {
      ...trip,
      id: Date.now().toString()
    };
    this.trips.push(newTrip);
    return newTrip;
  }

  async updateTrip(tripId: string, updates: Partial<Trip>): Promise<Trip | null> {
    const index = this.trips.findIndex(t => t.id === tripId);
    if (index === -1) return null;

    this.trips[index] = { ...this.trips[index], ...updates };
    return this.trips[index];
  }

  async deleteTrip(tripId: string): Promise<boolean> {
    const index = this.trips.findIndex(t => t.id === tripId);
    if (index === -1) return false;

    this.trips.splice(index, 1);
    return true;
  }

  async addActivity(tripId: string, activity: Omit<Activity, 'id'>): Promise<Activity | null> {
    const trip = this.trips.find(t => t.id === tripId);
    if (!trip) return null;

    const newActivity = {
      ...activity,
      id: Date.now().toString()
    };
    trip.activities.push(newActivity);
    return newActivity;
  }
}

export const tripService = TripService.getInstance();