// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

/*function findMatching(drivers, name) {
  return drivers.filter(driver =>
    driver.toLowerCase() === name.toLowerCase()
  );
}*/

const fuzzyMatch = (drivers, beginLetters) => drivers.filter(driver => driver.startsWith(beginLetters));

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

const matchName = (drivers, name) => drivers.filter(driver => driver.name === name);

