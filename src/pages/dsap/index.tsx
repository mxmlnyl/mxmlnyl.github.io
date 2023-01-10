import Head from '@components/head';
import Layout from '@components/dsap/layout';
import { DsapTitle} from '@components/dsap/primitives';
import EditorComponent from '@components/editor';

const DSAP = () => {
  return (
    <>
    <Head title="Datastructure & Algorithm Practice"/>
    <Layout>
      <div>
        <DsapTitle>DSAP</DsapTitle>
      </div>
      <div>
        <EditorComponent code={'test()'} test height={'500px'} />
      </div>
    </Layout>
    </>
  );
};
export default DSAP;
