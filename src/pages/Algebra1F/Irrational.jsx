import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {RationalIrrationalClassification,RationalIrrationalReview} from "./Preview"

const Irrational = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Rational and Irrational Classification'      img={RationalIrrationalClassification} body='Download PDF' link='https://drive.google.com/file/d/1xlrzaFEDnNlodq5MYRc456DzVVRBYV9s/view?usp=sharing' target='_blank'/>
            <File title='Rational and Irrational Review'     img={RationalIrrationalReview} body='Download PDF' link='https://drive.google.com/file/d/10Atk3FRzZ7dvlo7KSjaDCfQw3fYt9Qj0/view?usp=sharing' target='_blank'/>
        </div>

    </div>
    
)

export default Irrational;