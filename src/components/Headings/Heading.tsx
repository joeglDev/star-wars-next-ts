import styles from './Heading.module.css';

interface HeadingProps {
  content: Array<string | JSX.Element>;
  hierarchy: number;
}

export const Heading = (props: HeadingProps) => {
  const content: (string | JSX.Element)[] = props.content;
return props.hierarchy === 1 ? <h1 className={styles.h1}>{content}</h1> : <h2 className={styles.h1}>{content}</h2>;
};
