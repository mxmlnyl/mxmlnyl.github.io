export type Question = {
  title: string;
  prompt: string;
  testName: string;
  boilerPlate: string;
  testInputs: any[][];
  tests: any[];

}
// multiple params
const sampleQuestion: Question = {
  title: 'Sample Question',
  prompt: 'Fill out a sample question',
  testName: 'test',
  boilerPlate: ` const test = (s: string) => {

  }`,
  testInputs: [ [ 'yo', ['test'] ] ] ,
  tests: ['yo']
}

// single param with array
const sampleQuestion2: Question = {
  title: 'Sample Question',
  prompt: 'Fill out a sample question',
  testName: 'test',
  boilerPlate: ` const test = (s: string) => {

  }`,
  testInputs: [ [ [1,2,3] ] ] ,
  tests: [[1,2,3]]
}

const questions: Question[] = [
  sampleQuestion2
]

export default questions;