import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import { GreatestIntegerFunction, GreatestIntegerFunction2 } from "./Preview";

// import { GreatestIntegerFunction, GreatestIntegerFunction2 } from "./Preview";

const GreatestInteger = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            
        <File title='Greatest Integer Function' img={GreatestIntegerFunction} link='https://drive.google.com/file/d/1xhzPGmiApZ9gvilPmsvv85dd5EFUkuLn/view?usp=sharing' />
            <File title='Greatest Integer Function2'       img={GreatestIntegerFunction2} body='Download PDF' link='https://drive.google.com/file/d/180hvlK9UseKZgH2RtK3-F-kTn8QOVQpq/view?usp=sharing' target='_blank'/>
        </div>

    </div>
    
)

export default GreatestInteger;