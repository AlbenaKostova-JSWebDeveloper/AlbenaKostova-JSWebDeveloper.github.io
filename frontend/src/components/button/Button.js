import './Button.scss';

export default function Button({ clickHandler, className, children}) {
    return (
        <button className={`btn ${className}`} onClick={clickHandler}>{children}</button>
    );
}