import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import { KineticsPracticeProblems, KineticsPracticeTest, KineticsReview } from "./Preview";
// import {KineticsReview,KineticsPracticeProblems,KineticsPracticeTest} from "./Preview"

const Kinetics = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            
<File title='Kinetics Practice Problems' img={KineticsPracticeProblems} link='https://drive.google.com/file/d/1Tkj3b0ksEdjd7CXsl9M2ipUnJzI9vlTH/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Kinetics Review' img={KineticsReview} link='https://drive.google.com/file/d/1_qqTIFceMS-EcnthfHbE-hdeQUB5b5xD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Kinetics Practice Test' img={KineticsPracticeTest} link='https://drive.google.com/file/d/13NoITCetwVDEXyrknECTdrYpEYsWHznP/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default Kinetics;