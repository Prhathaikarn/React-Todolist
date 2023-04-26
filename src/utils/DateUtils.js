

export const getFormattedDate = () => {

  const dayObj = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric' };

  let formattedDateStr = dayObj.toLocaleDateString(dayObj, options);

  return formattedDateStr;
};
