const { MEETUP } = process.env;
if (!MEETUP) {
  throw Error(
    'No env variable called "MEETUP" set. Please run the "getUpcomingMeetup" script first.'
  );
}

module.exports = {
  locals: {
    meetup: JSON.parse(MEETUP),
  },
};
