import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-calendar',
  imports:[FormsModule, NgIf, NgFor],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {

  currentYear: number;
  currentMonth: number;
  daysInMonth: number[] = [];
  firstDayOfMonth: number = 0;
  selectedDate: string = '';

  showPopup = false;
  newEventTitle = '';
  newEventTime = '';
  newEventColor = '#4caf50';

  events: { [date: string]: { title: string; time: string; color: string }[] } = {};

  // Modifica eventi
  showEditPopup = false;
  editEventTitle = '';
  editEventTime = '';
  editEventColor = '';
  editDay: number = 0;
  editIndex: number = -1;

  currentUserEmail: string = '';

  constructor(private authService: AuthService) {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  ngOnInit(): void {
    this.currentUserEmail = this.authService.getUserEmail() || '';
    this.generateCalendar();
    this.loadEventsFromLocalStorage();
  }

  generateCalendar(): void {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
    this.firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
  }

  getDateString(day: number): string {
    const month = (this.currentMonth + 1).toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');
    return `${this.currentYear}-${month}-${dayStr}`;
  }

  getEventsForDay(day: number): { title: string; time: string; color: string }[] {
    const date = this.getDateString(day);
    return this.events[date] || [];
  }

  selectDay(day: number, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedDate = this.getDateString(day);
    this.newEventTitle = '';
    this.newEventTime = '';
    this.newEventColor = '#4caf50';
    this.showPopup = true;
  }

  onBackgroundClick(): void {
    this.showPopup = false;
    this.showEditPopup = false;
  }

  addEvent(): void {
    if (!this.newEventTitle || !this.newEventTime) return;

    const newEvent = {
      title: this.newEventTitle,
      time: this.newEventTime,
      color: this.newEventColor
    };

    if (!this.events[this.selectedDate]) {
      this.events[this.selectedDate] = [];
    }

    this.events[this.selectedDate].push(newEvent);
    this.saveEventsToLocalStorage();
    this.showPopup = false;
  }

  openEditPopup(day: number, index: number, event: MouseEvent): void {
    event.stopPropagation();
    const ev = this.getEventsForDay(day)[index];

    this.editDay = day;
    this.editIndex = index;
    this.editEventTitle = ev.title;
    this.editEventTime = ev.time;
    this.editEventColor = ev.color;
    this.showEditPopup = true;
  }

  closeEditPopup(): void {
    this.showEditPopup = false;
  }

  saveEditedEvent(): void {
    const dateStr = this.getDateString(this.editDay);
    const events = this.events[dateStr];

    if (events && this.editIndex > -1) {
      events[this.editIndex] = {
        title: this.editEventTitle,
        time: this.editEventTime,
        color: this.editEventColor
      };
      this.saveEventsToLocalStorage();
    }

    this.closeEditPopup();
  }

  deleteEvent(): void {
    const dateStr = this.getDateString(this.editDay);
    const events = this.events[dateStr];

    if (events && this.editIndex > -1) {
      events.splice(this.editIndex, 1);
      if (events.length === 0) {
        delete this.events[dateStr];
      }
      this.saveEventsToLocalStorage();
    }

    this.closeEditPopup();
  }

  deleteAllEvents(): void {
    const dateStr = this.getDateString(this.editDay);
    delete this.events[dateStr];
    this.saveEventsToLocalStorage();
    this.closeEditPopup();
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  loadEventsFromLocalStorage(): void {
    if (!this.currentUserEmail) return;
    const storageKey = `calendarEvents_${this.currentUserEmail}`;
    const savedEvents = localStorage.getItem(storageKey);
    if (savedEvents) {
      this.events = JSON.parse(savedEvents);
    }
  }

  saveEventsToLocalStorage(): void {
    if (!this.currentUserEmail) return;
    const storageKey = `calendarEvents_${this.currentUserEmail}`;
    localStorage.setItem(storageKey, JSON.stringify(this.events));
  }
}
