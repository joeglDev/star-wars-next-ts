import style from './TextBody.module.css';

interface TextBodyProps {
    content: Array<string | JSX.Element>;
}

export const TextBody = (props: TextBodyProps) => {
    return <p className={style.TextBody_P}>{props.content}</p>
};