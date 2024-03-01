import styles from './page.module.css';
import { Button } from '@inklens/ui'

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome inklens-app-web 👋
            </h1>
            <Button />
          </div>
        </div>   
      </div>
    </div>
  );
}
