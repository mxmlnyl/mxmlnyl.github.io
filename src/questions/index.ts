export type Question = {
  title: string;
  prompt: string;
  testName: string;
  boilerPlate: string;
  testInputs: any[][];
  tests: any[];
};
// multiple params
const sampleQuestion: Question = {
  title: 'Sample Question',
  prompt: 'Fill out a sample question',
  testName: 'test',
  boilerPlate: ` const test = (s: string) => {

  }`,
  testInputs: [['yo', ['test']]],
  tests: ['yo'],
};

// single param with array
const sampleQuestion2: Question = {
  title: 'Sample Question with a pretty long title',
  prompt: `Fill out a sample question and have the result be this long thing
    where the value turns out to be an even longer thing. Sometimes its
     not a longer thing and sometimes its a bit shorter <code>Test</code>
      and heres some more example <br /><br /> hey theree `,
  testName: 'test',
  boilerPlate: ` const test = (s: string) => {

  }`,
  testInputs: [[[1, 2, 3]]],
  tests: [[1, 2, 3]],
};

const questions: Question[] = [sampleQuestion, sampleQuestion2, sampleQuestion];

export default questions;
