import { useRef,useState } from "react"
import { CSSTransition } from "react-transition-group"
import Arrow from "../../images/icon-arrow.svg"
import "./Question.scss"


const Question = ({answer, question}) => {

    const imgRef = useRef(null)

    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const handleToggle = () =>{
        setIsAnswerVisible(prev=> !prev)
        imgRef.current.classList.toggle('img_Rotated')
    }

    return (
        <div className="question_Container">
            <div className="question" onClick={handleToggle}>
                {question}
                <img ref={imgRef} src={Arrow}  alt=""/>
            </div>
            <CSSTransition classNames="fadeIn" in={isAnswerVisible} unmountOnExit timeout={300}>
                <p className="text">
                {answer}
                </p>
            </CSSTransition>
        </div>
       
     );
}
 
export default Question;