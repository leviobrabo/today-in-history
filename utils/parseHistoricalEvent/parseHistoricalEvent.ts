import { HistoricalEvent } from "@/types/historicalEvents";

/**
 * Parses a list of historical event strings and extracts the date and phrase from each.
 *
 * @param eventStrings - A list of strings representing historical events, each formatted as "[DD/MM/YYYY] • Event description".
 * @returns A list of objects, each containing the extracted Date and the event description.
 *
 * @throws Will throw an error if any event string is not in the expected format.
 *
 * @example
 * const eventStrings = [
 *   "<b>[1/1/1945]</b> • A França é admitida às Nações Unidas.",
 *   "<b>[15/8/1947]</b> • A Índia se torna independente do domínio britânico."
 * ];
 * const parsedEvents = parseHistoricalEvent(eventStrings);
 * console.log(parsedEvents[0].date); // Outputs: Mon Jan 01 1945
 * console.log(parsedEvents[0].phrase); // Outputs: "A França é admitida às Nações Unidas."
 */
export function parseHistoricalEvent(eventStrings: string[]): HistoricalEvent[] {
    return eventStrings.map(eventString => {
        try {
            const datePattern = /\[([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})\]/;
            const dateMatch = eventString.match(datePattern);

            if (dateMatch) {
                const day = parseInt(dateMatch[1], 10);
                const month = parseInt(dateMatch[2], 10) - 1; // Month is 0-indexed in JavaScript
                const year = parseInt(dateMatch[3], 10);

                // Basic validation of date format
                if (day < 1 || day > 31 || month < 0 || month > 11 || year < 1) {
                    throw new Error(`Invalid date components: day=${day}, month=${month}, year=${year}`);
                }

                // Check if the date is valid using the Date object
                const eventDate = new Date(year, month, day);
                if (eventDate.getDate() !== day || eventDate.getMonth() !== month || eventDate.getFullYear() !== year) {
                    throw new Error(`Invalid date: ${eventDate}`);
                }

                // Extracting the phrase after the "•" symbol
                const splitString = eventString.split('•');
                if (splitString.length < 2) {
                    throw new Error(`No valid event description found in string: ${eventString}`);
                }
                const eventPhrase = splitString[1].trim();

                return {
                    date: eventDate,
                    event: eventPhrase
                };
            } else {
                throw new Error(`Date pattern not found in string: ${eventString}`);
            }
        } catch (error) {
            console.error("Error parsing event string:", eventString);
            throw error;
        }
    });
}
