import style from './ButtonContainer.module.css';

function ButtonContainer(){

    const buttonName = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];

    return (
    <div className={style.buttonContainer}>
        { buttonName.map((item)=>(
        <button className={`${style['button']} btn btn-secondary`}>{item}</button>)
        )}
        
        
      </div>        
    );
}

export default ButtonContainer;