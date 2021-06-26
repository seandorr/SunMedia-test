import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
  static create(events, types) {
    const filteredEvents = events.filter(event => types.includes(event.type)).map(event => {
      const { second, type, message } = event;
      return new Event(second, type, message)
    });
      return new EventManager(filteredEvents);
  }
};