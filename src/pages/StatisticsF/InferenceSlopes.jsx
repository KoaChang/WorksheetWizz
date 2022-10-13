import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {ConfidenceIntervalsforSlope,TransformingtoAchieveLinearality,HypothesisTestforSlope} from "./Preview"


const InferenceSlopes = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/statistics'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='Confidence Intervals for Slope' img={ConfidenceIntervalsforSlope} link='https://drive.google.com/file/d/1gjpKm_c0gQdy0bdcMtaVkIq5lgbz3Bz-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Hypothesis Test for Slope' img={HypothesisTestforSlope} link='https://drive.google.com/file/d/1DqsAwzC0-EW-wbvA00q-2hi2YexhrAfo/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Transforming to Achieve Linearality' img={TransformingtoAchieveLinearality} link='https://drive.google.com/file/d/1dbbjv8KHKH8JIPWy0qf4rRghz3ax2ij6/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default InferenceSlopes;