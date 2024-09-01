/**
 * Formats a given Date object to a string in the US format "MMMM DD, YYYY".
 *
 * @param date - The Date object to be formatted.
 * @returns A string representing the formatted date in the US format.
 *
 * @example
 * ```typescript
 * const date = new Date(2024, 7, 25); // 25th August 2024
 * const formattedDate = formatDateToUSFormat(date);
 * console.log(formattedDate); // "August 25, 2024"
 * ```
 */
export function formatDateToUSFormat(date: Date): string {
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
