import {Prompt} from '../types';

const implementArray: Prompt = {
  title: 'Implement an array',
  prompt: `
  This array should implement the following methods : <br /><br />
  <code>
  length: returns the length of an array <br /><br />
  push:  adds element to the end of an array <br /><br />
  pop: removes the item at the end of an array and returns it<br /><br />
  unshift: adds an item at the begining of an array
  shift: removes the item at the beginning of an array and returns it

  </code>
  `,
  solution: '',
};

export default implementArray;
