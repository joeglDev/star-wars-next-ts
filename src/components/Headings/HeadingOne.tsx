import styles from './HeadingOne.module.css'

export const HeadingOne = (props: any) => {
  const content: (string | JSX.Element)[] = props.content;
  return <h1 className={styles.h1}>{content}</h1>;
};
