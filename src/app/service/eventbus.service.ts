import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventbusService {
  public formCanDectivateButton:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
}
