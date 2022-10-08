import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {ConfidenceIntervalsforProportions,Type1and2Error,Type1and2Errors,ConfidenceIntervalsforProportions2,InferenceProportionsandMeansReview,TwoPopulationHypothesisTesting,OneProportionHypothesisTesting,InferenceProportionsReview} from "./Preview"


const InferenceProp = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Type 1 and 2 Error' img={Type1and2Error} link='https://drive.google.com/file/d/1k2EqRE1dMTM1EOmAMK9rt09NTZ0j3tx-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Confidence Intervals for Proportions' img={ConfidenceIntervalsforProportions} link='https://drive.google.com/file/d/1lqBqQ-zCqqcHn55e_NKdH-Tii2kojZky/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Confidence Intervals for Proportions 2' img={ConfidenceIntervalsforProportions2} link='https://drive.google.com/file/d/1xaYKE4CPu_PD_59X2YvACuAfrvXJw6_G/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='One Proportion Hypothesis Testing ' img={OneProportionHypothesisTesting} link='https://drive.google.com/file/d/1nbXLyZ7idhp-PePJYk244sCBr8lHO_c0/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Two Population Hypothesis Testing' img={TwoPopulationHypothesisTesting} link='https://drive.google.com/file/d/1-egVvAbs1fwBn-bGGYaSpQb8mPGyMcBJ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inference Proportions Review' img={InferenceProportionsReview} link='https://drive.google.com/file/d/1NdAYWXmro8i8h_6KU2YIAq-5PYEC50xv/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inference Proportions and Means Review' img={InferenceProportionsandMeansReview} link='https://drive.google.com/file/d/1PZ-9N-F-hh2dY0LrV6ylklvrCZcoxY4L/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default InferenceProp;