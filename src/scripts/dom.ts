import { MeetupEvent } from './types';

export const createLoadingSpinner = () =>
  `<div class="teaser-loading">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`;

const createCalendarIcon = (size = 24) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>
  </svg>`;

const formatTeaserDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
  });

export const createTeaser = (meetup: MeetupEvent) =>
  `<div class="teaser">
    <div class="teaser-date">
      ${createCalendarIcon(20)}
      ${formatTeaserDate(meetup.local_date)}
    </div>
    <h2 class="teaser-name">${meetup.name}</h2>
    <div class="teaser-description">${meetup.description}</div>
    <div class="teaser-footer">
      <a class="teaser-link" href="${meetup.link}" rel="nofollow">RSVP</a>
    </div>
  </div>`;
