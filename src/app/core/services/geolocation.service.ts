import { Injectable } from '@angular/core';
import { Cafe } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  /*
   * This function takes a callBack function as a parameter,
   * attempts to get the browser's current location,
   * then calls onSuccess or onError functions based on response received
   */
  requestLocation(onSuccess: any, onError: any): void {
    // W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('[Request location] Success ', position.coords);
        onSuccess(position.coords);
      },
      error => {
        console.error('[Request location] Error ', error);
        onError(null);
      }
    );
  }

  public getAdressFromCoords(lat: number, lng: number): void {


  }

  /*
   * This function takes a Cafe as a parameter
   * Checks if it made of numeric coordinates or address & city
   * Based on which returns a string query formatted for a URL
   * ex: <a href="htpps://maps.google.com/?q=Eiffel+Tower">
   * ex: <a href="htpps://maps.google.com/?q=34.44,56.44">
   */
  public getUnformattedMapUrlFrom(location: Cafe): string {
    // Check if location is made from name OR coodinates
    if (location.latitude && location.longitude) {
      return `${location.latitude},${location.longitude}`;
    } else if (location.address && location.city) {
      return `${location.address}, ${location.city}`;
    } else {
      return null;
    }
  }

  /*
   * This function takes a Cafe as a parameter,
   * checks the type of the location,
   * checks the type of browser/platform the app is on
   * returns the correct map URL based on the previous
   * ex: <a href="htpps://maps.google.com/?q=34.44,56.44">
   * ex: <a href="htpps://maps.apple.com/?q=34.44,56.44">
   */
  getFormattedMapUrlFrom(location: Cafe): string {
    const query = this.getUnformattedMapUrlFrom(location);

    // Check if location is made from name OR coodinates
    // Check if microsoft/android/apple device
    if (/iPad|iPhone|iPod|safari/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }
  }
}
