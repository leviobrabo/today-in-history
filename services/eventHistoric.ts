import { HistoricalEvents } from "@/types/historicalEvents"
import { apiService } from "./client"

export const eventHistoricService = {
    async getPhases():Promise<HistoricalEvents> {
        const response = await apiService.get('https://raw.githubusercontent.com/leviobrabo/histeventsbot/main/historicalevents/data/events.json')
        return response.data
    }
}