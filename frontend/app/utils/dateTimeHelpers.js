export const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return (
    seconds == 60 ?
      (minutes + 1) + ':00' :
      minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  );
};

export const dateToYear = (date) => {
  const yearMonthDay = date.split('-');
  if (yearMonthDay.length > 0) {
    return yearMonthDay[0];
  } else {
    return '';
  }
};
