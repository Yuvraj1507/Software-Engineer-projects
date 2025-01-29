import { Application } from '@nativescript/core';
import { initializeDatabase } from './services/database.service';

// Initialize the database when the app starts
initializeDatabase();

Application.run({ moduleName: 'app-root' });