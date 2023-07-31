import styles from './NotFound.module.css';

const NotFound = ({ errorText }) => {
  return (
    <main className={'container ' + styles.NotFound}>
      <h2>404 Not Found</h2>
    </main>
  );
};

export default NotFound;
