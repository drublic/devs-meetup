#!/usr/bin/env node
const got = require('got');

// Config
// ---------------
const url = 'https://api.meetup.com/Devsmeetup-Freiburg/events';
const query = {
  page: 1,
  status: 'upcoming',
};

// Helper
// ---------------
const queryToString = o =>
  '?' +
  Object.entries(o)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

const formatDate = value => {
  const [month, day, year] = new Date(value)
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .split(' ');
  return {
    day,
    month,
    year,
  };
};

// Main
// ---------------
(async () => {
  try {
    const response = await got(`${url}${queryToString(query)}`, { json: true });
    const meetup = response.body[0];

    /**
     * NOTE: Use `stdout.write` so the result is blocking. Node sometimes
     *       truncates the output (especially when using `console.log`).
     *       For more info:
     *
     *       - https://github.com/nodejs/node/issues/6456
     *       - https://github.com/nodejs/node/issues/19218
     */
    process.stdout.write(
      JSON.stringify({
        ...meetup,
        ...formatDate(meetup.local_date),
      })
    );
  } catch (err) {
    console.log('💀 Something went wrong fetching the upcoming meetup!');
    console.log(err);
  }
})();
