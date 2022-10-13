import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
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

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/chemistry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            
<File title='Kinetics Practice Problems' img={KineticsPracticeProblems} link='https://drive.google.com/file/d/1Tkj3b0ksEdjd7CXsl9M2ipUnJzI9vlTH/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Kinetics Review' img={KineticsReview} link='https://drive.google.com/file/d/1_qqTIFceMS-EcnthfHbE-hdeQUB5b5xD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Kinetics Practice Test' img={KineticsPracticeTest} link='https://drive.google.com/file/d/13NoITCetwVDEXyrknECTdrYpEYsWHznP/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default Kinetics;