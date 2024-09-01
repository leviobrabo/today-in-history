import { formatDateToUSFormat } from './formatDateToUSFormat';

describe('formatDateToUSFormat', () => {
    test('should format a date correctly for January', () => {
        const date = new Date(2024, 0, 1); // 1st January 2024
        const formattedDate = formatDateToUSFormat(date);
        expect(formattedDate).toBe('January 1, 2024');
    });

    test('should format a date correctly for August', () => {
        const date = new Date(2024, 7, 25); // 25th August 2024
        const formattedDate = formatDateToUSFormat(date);
        expect(formattedDate).toBe('August 25, 2024');
    });

    test('should format a date correctly for December', () => {
        const date = new Date(2023, 11, 31); // 31st December 2023
        const formattedDate = formatDateToUSFormat(date);
        expect(formattedDate).toBe('December 31, 2023');
    });

    test('should format a date correctly for a single-digit day', () => {
        const date = new Date(2024, 3, 5); // 5th April 2024
        const formattedDate = formatDateToUSFormat(date);
        expect(formattedDate).toBe('April 5, 2024');
    });
});
