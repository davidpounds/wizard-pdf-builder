import PreviewPane from './components/PreviewPane';
import Wizard from './components/Wizard';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <PreviewPane />
      <Wizard />
    </div>
  );
}

export default App;
