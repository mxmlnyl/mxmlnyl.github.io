import Layout from '../../components/layouts';
import EditorComponent from '../../components/editor';
const DSAP = () => {
  return (
    <Layout>
      <div>
        <h2>DSAP</h2>
      </div>
      <div>
        <EditorComponent code={'test()'} test height={'500px'} />
      </div>
    </Layout>
  );
};
export default DSAP;
