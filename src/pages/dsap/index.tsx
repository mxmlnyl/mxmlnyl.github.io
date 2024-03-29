import parse from 'html-react-parser';
import Head from '@components/head';
import Layout from '@components/dsap/layout';
import {
  DsapTitle,
  QuestionCounterWrap,
  NextQuestionButton,
  QuestionPromptWrap,
  QuestionTitle,
} from '@components/dsap/primitives';
import EditorComponent from '@components/editor';
import questions from '@dsapPrompts';
import React from 'react';

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const DSAP = ({initialIdx}: {initialIdx: number}) => {
  const [currentIdx, setIdx] = React.useState<number>(initialIdx);
  const [seenQuestions, setSeenQuestion] = React.useState<Set<number>>(new Set([initialIdx]));

  const genNextQuestion = (): number | undefined => {
    const potential = randomIntFromInterval(0, questions.length);
    if (seenQuestions.has(potential)) {
      return genNextQuestion();
    }

    if (!seenQuestions.has(potential)) {
      return potential;
    }

    return undefined;
  };

  const onNextQuestion = () => {
    const nextIdx = genNextQuestion();
    if (nextIdx) {
      setIdx(nextIdx);
      setSeenQuestion(new Set([...Array.from(seenQuestions), nextIdx]));
    }
  };

  const CurrentQuestion = React.useMemo(() => {
    return questions[currentIdx];
  }, [currentIdx]);

  return (
    <>
      <Head title="Datastructure & Algorithm Practice" />
      <Layout>
        <div>
          <DsapTitle>DSAP</DsapTitle>
          <QuestionCounterWrap>
            <span>
              {seenQuestions.size} of {questions.length}
            </span>
            <NextQuestionButton onClick={onNextQuestion}>&#8677;</NextQuestionButton>
          </QuestionCounterWrap>

          <QuestionPromptWrap>
            <QuestionTitle>
              <span>Title:</span> {questions[currentIdx].title}
            </QuestionTitle>
            <QuestionTitle>
              <span>Prompt:</span> {parse(questions[currentIdx].prompt)}
            </QuestionTitle>
          </QuestionPromptWrap>
        </div>
        <div>
          <EditorComponent
            code={CurrentQuestion.boilerPlate ?? ''}
            testName={CurrentQuestion.boilerPlateFunctionName}
            testInputs={CurrentQuestion.testInputs}
            testExpects={CurrentQuestion.testExpects} test={false} height={'500px'}
          />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      initialIdx: randomIntFromInterval(0, questions.length - 1),
    },
  };
}
export default DSAP;
