import { parseISO, format } from "date-fns";
import { IDateFormatterProps } from '../interfaces'

export default function DateFormater({ dateString }: IDateFormatterProps) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
