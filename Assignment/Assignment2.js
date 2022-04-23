/*
There are two basketball teams, NepalA and NepalB. They played against each other 3 times. The team with the highest average score wins a trophy.
Your tasks:
1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the winner of the tournament, and print it to the console. (Can be draw as well)
3. Include a requirement for a minimum avergae score of 50 points. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 50 points.
4. Minimum score rule also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 50 points. Otherwise, no team wins the trophy
Test data:
-> Test Data 1: NepalA score 46, 58 and 39. NepalB score 48, 41 and 60
-> Test Data 2: NepalA score 47, 62 and 51. NepalB score 59, 45 and 73
-> Test Data 3: NepalA score 47, 62 and 51. NepalB score 59, 45 and 56

*/



// Score set of nepalA and nepalB
let nepalA = [46, 58, 39, 47, 62, 51, 47, 62, 51];
let nepalB = [48, 41, 60, 59, 45, 73, 59, 45, 56];

// Arrow function to calcute the average of a list
const average = (array) => array.reduce((a, b) => a + b) / array.length;

// 1. Calculating the average of each teams
let nepalAAverage = average(nepalA);
let nepalBAverage = average(nepalB);

console.log(`Average of nepalA is ${nepalAAverage}`);
console.log(`Average of nepalB is ${nepalBAverage}`);

// 2. Finding the best teams
// Conditional operator which returns the best team with it's average score.
// Average score is used in minimum score rule.
let bestTeam =  ( nepalAAverage == nepalBAverage ) ? ['draw', nepalAAverage] : (nepalAAverage > nepalBAverage) ? ['nepalA', nepalAAverage] : ['nepalB', nepalBAverage];
console.log(`The winner team is ${bestTeam[0]}`);

// 3 and 4. Adding mininum requirements 50 to win the tournament
if (bestTeam[1] >= 50) {
    console.log(`The winner team is ${bestTeam[0]}`);
}
else {
    console.log('No winner');
}
