import { format, parseISO } from 'date-fns';
import React, { useMemo } from 'react';

type Props = {
  dateString: string;
};

export const Date: React.FC<Props> = ({ dateString }) => {
  const formattedDate = useMemo<string>(() => {
    const date = parseISO(dateString);
    return format(date, 'LLLL d, yyyy');
  }, [dateString]);
  return <time dateTime={dateString}>{formattedDate}</time>;
};
