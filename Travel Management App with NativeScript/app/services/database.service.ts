import { knownFolders } from '@nativescript/core';

export function initializeDatabase() {
  // Initialize local storage or SQLite here
  console.log('Database initialized');
}

export function saveData(key: string, value: any): void {
  try {
    const documents = knownFolders.documents();
    const file = documents.getFile(`${key}.json`);
    file.writeTextSync(JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

export function getData(key: string): any {
  try {
    const documents = knownFolders.documents();
    const file = documents.getFile(`${key}.json`);
    const content = file.readTextSync();
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading data:', error);
    return null;
  }
}