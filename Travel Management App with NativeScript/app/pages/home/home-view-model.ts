import { Observable } from '@nativescript/core';
import { tripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';

export class HomeViewModel extends Observable {
  trips: Trip[] = [];

  constructor() {
    super();
    this.loadTrips();
  }

  async loadTrips() {
    this.trips = await tripService.getTrips();
    this.notifyPropertyChange('trips', this.trips);
  }

  onAddTrip() {
    const frame = require('@nativescript/core').Frame;
    frame.topmost().navigate('pages/trip/add-trip-page');
  }
}