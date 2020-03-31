import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public get singleCalendarValue() {
    return this._singleCalendarValue;
  }
  public set singleCalendarValue(value: Date) {
    this._singleCalendarValue = value;
  }
  public get rangeCalendarValue() {
    return this._rangeCalendarValue;
  }
  public set rangeCalendarValue(value: Date) {
    this._rangeCalendarValue = value;
  }
  private _singleCalendarValue: Date;
  private _rangeCalendarValue: Date;
}
