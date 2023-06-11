import jwt_decode from 'jwt-decode';

import { JWTresponse } from '../../types/Global';
import dayjs from 'dayjs';

export function checkJwtStatus(token: string): string {
  const decodedToken: JWTresponse = jwt_decode(token);
  if (!decodedToken) {
    return 'invalid';
  }

  const expDate = dayjs(decodedToken.exp! * 1000);

  const now = dayjs();

  const diffInSeconds = expDate.diff(now, 'second');
  if (diffInSeconds <= 30) {
    return 'refreshable';
  } else if (diffInSeconds < 0) {
    return 'invalid';
  } else {
    return 'valid';
  }
}

export function renderDate(started_at: string, ended_at: string): string {
  const startedDate = dayjs(started_at);
  const endedDate = dayjs(ended_at);
  let dateToRender = '';

  if (startedDate.isSame(endedDate, 'day')) {
    dateToRender = `${startedDate.format('MM-DD h:mmA')} - ${endedDate.format(
      'h:mmA'
    )}`;
  } else {
    dateToRender = `${startedDate.format('MM-DD h:mmA')} - ${endedDate.format(
      'MM-DD h:mmA'
    )}`;
  }

  return dateToRender;
}
