import { parseISO, format } from 'date-fns';
import { DateFormatterProps } from '../types'

export default function DateFormater({ dateString }: DateFormatterProps) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
}
