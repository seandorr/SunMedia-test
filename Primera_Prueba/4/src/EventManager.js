export default class EventManager{
  constructor(filteredEvents) {
    this.filteredEvents = filteredEvents;
  }

  run() {
    this.filteredEvents.map(event => {
      event.logMessage();
    })
  }
};