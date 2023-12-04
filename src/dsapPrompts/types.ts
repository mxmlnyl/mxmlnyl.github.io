export type Prompt = {
  title: string;
  prompt: string;
  solution: string;
  testInputs?: Array<any>;
  testExpects?: Array<any>;
  boilerPlate?: string;
  boilerPlateFunctionName?: string;
};
