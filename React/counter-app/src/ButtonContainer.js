import './App.css'
import Button from './Button';

const ButtonContainer = ({handleIncrement, handleDecrement}) => {
    return(
        <div className='buttons'>
            <Button text = {"Increment"} func={handleIncrement} as="inc"></Button>
            <Button text = {"Decrement"} func={handleDecrement} as="dec"></Button>
        </div>
    )
}
export default ButtonContainer;