/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api.getway";

class eventService {
  async createEvent(createEventData: any): Promise<any> {
    try {
      const { data } = await api.post("/create-event", createEventData);
      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
  async getEvents(): Promise<any> {
    try {
      const { data } = await api.get("/get-all-events");
      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
  async updateEvent(updateEventData: any): Promise<any> {
    try {
      const { data } = await api.put("/update-event", updateEventData);
      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
  async deleteEvent(eventId: number): Promise<any> {
    try {
      const { data } = await api.delete("/delete-event", {
        data: { id: eventId },
      });
      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
}

export default new eventService();
