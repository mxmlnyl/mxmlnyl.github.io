import Head from '@components/head';
import Layout from '@components/dsap/layout';
import {
  DsapTitle,
  QuestionCounterWrap,
  NextQuestionButton,
} from '@components/dsap/primitives';
import EditorComponent from '@components/editor';
import questions from '@questions/index';

const DSAP = () => {
  return (
    <>
      <Head title="Datastructure & Algorithm Practice" />
      <Layout>
        <div>
          <DsapTitle>DSAP</DsapTitle>
          <QuestionCounterWrap>
            <span>1 of 3</span>
            <NextQuestionButton>&#8677;</NextQuestionButton>
          </QuestionCounterWrap>
        </div>
        <div>
          <EditorComponent question={questions[0]} test height={'500px'} />
        </div>
      </Layout>
    </>
  );
};
export default DSAP;
