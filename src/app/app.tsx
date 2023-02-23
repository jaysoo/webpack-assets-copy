// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <h1>Test</h1>
      <div className={styles['large']}>large</div>
      <div className={styles['small']}>small</div>
    </>
  );
}

export default App;
