import NormalButton from "../NormalButton"
import "./Faq.scss"
import Question from "./Question"
const Faq = () => {
    return ( 
        <div className="faq_Container">
           <h2>Frequently Asked Questions</h2> 
           <p className="text">Here are some of our FAQs. If you have any questions you'd like answered please feel free to email us.</p>
        <div className="questions">
        <Question question={'What is Bookmark?'} answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem voluptates iure possimus vel autem perferendis, cupiditate quas. Explicabo dignissimos cumque ad veritatis omnis quibusdam optio autem sunt nostrum ullam?'} />

        <Question question={'How can I request a new browser?'} answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem voluptates iure possimus vel autem perferendis, cupiditate quas. Explicabo dignissimos cumque ad veritatis omnis quibusdam optio autem sunt nostrum ullam?'} />

        <Question question={'Is there a mobile app?'} answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem voluptates iure possimus vel autem perferendis, cupiditate quas. Explicabo dignissimos cumque ad veritatis omnis quibusdam optio autem sunt nostrum ullam?'} />

        <Question question={'What about other Chromium browsers?'} answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem voluptates iure possimus vel autem perferendis, cupiditate quas. Explicabo dignissimos cumque ad veritatis omnis quibusdam optio autem sunt nostrum ullam?'} />

        </div>
        <NormalButton>More Info</NormalButton>

      
        
        </div>
     );
}
 
export default Faq;