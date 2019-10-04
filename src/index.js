/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(
  focus = "family",
  knowsProgramming = true,
  config = { family: 4 },
  preferences = [focus]
) {
  let minLearn = 500;
  let basic = 800;
  let master = minLearn + basic;
  let speedConfig = config[preferences];
  let time = knowsProgramming ? basic : master;

  return Math.ceil(time / speedConfig);
};
