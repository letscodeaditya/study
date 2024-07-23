import style from './Container.module.css'

//props is the object containing all property sended from parent , children is the default one
const Container = (props,name)=> {
    return <div className={style.Container}>{props.children}{props.name}</div>
};

export default Container;