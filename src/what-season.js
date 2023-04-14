const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 'no-date') {
  let seas = '';

  if (date === 'no-date') {
    return 'Unable to determine the time of year!'
  // } else if () {
  //   throw new Error('Invalid date!" on tricky moment');
  // } else if () {
  //   throw new Error('Invalid date!" on a very tricky moment');
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!" on a very tricky moment');
  } else if (Date.parse(date)){
    const season = ['winter', 'spring', 'summer', 'autumn']
    let month = date.getMonth()

    if(month === 11 || month === 0 || month === 1){
      seas += season[0] //'winter'
    } else if (month === 2 || month === 3 || month === 4){
      seas += season[1] //'spring'
    } else if (month === 5 || month === 6 || month === 7){
      seas += season[2] //'summer'
    } else if (month === 8 || month === 9 || month === 10){
      seas += season[3] //'autumn'
    }
    return seas;
  } else {
    return false
  }
}

module.exports = {
  getSeason
};
