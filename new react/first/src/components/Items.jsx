import style from "./Item.module.css";

const Item = ({Foods}) => {
    return (
        <li className={`${style['kg-item']} list-group`}>
            <span className={style['kg-span']}>{Foods}</span>
        </li>
    );
}

export default Item;