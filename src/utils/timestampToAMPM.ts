export function timestampToAMPM(timestamp: number): string {
    const date = new Date(timestamp * 1000);

    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    return `${formattedHours} ${ampm}`;
}
