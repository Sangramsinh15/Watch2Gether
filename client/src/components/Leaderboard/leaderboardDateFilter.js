/**
 * The function is to filter date ranges
 * @param {*} data - The parameters include the dateFilter and data from container
 * @param {*} dateFilter - The parameters include the dateFilter and data from container
 * @returns The function returns the filtered date ranges and scores.
 */
function dateFilter(data, dateFilter) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (dateFilter + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    let duration = parseInt(dateFilter);
    if (duration === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
/**
 * The component is being exported as dateFilter 
 * so that this component can be imported into other modules.
 */
export default dateFilter;
