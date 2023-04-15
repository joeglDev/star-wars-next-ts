import styles from './Heading.module.css';

interface HeadingProps {
  content: Array<string | JSX.Element>
}

export const HeadingOne = (props: HeadingProps) => {
  const content: (string | JSX.Element)[] = props.content;
  console.log(props)
  return <h1 className={styles.h1}>{content}</h1>;
};
