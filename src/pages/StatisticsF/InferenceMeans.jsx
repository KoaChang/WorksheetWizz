import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {Type1and2Error,ConfidenceIntervalsforMeans,ConfidenceIntervalsforMeans2,HypothesisTesting2,Type1and2Errors,InferenceProportionsandMeansReview,HypothesisTestingMeans} from "./Preview"


const InferenceMeans = () => (

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
<File title='Confidence Intervals for Means' img={ConfidenceIntervalsforMeans} link='https://drive.google.com/file/d/1x5g_LwfqKEDfslzndX6-byt9yJfPdH5H/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Confidence Intervals for Means 2' img={ConfidenceIntervalsforMeans2} link='https://drive.google.com/file/d/1wnXWB9hxWIDLZRUCwsLKuZHfe3aUqUxQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Hypothesis Testing Means' img={HypothesisTestingMeans} link='https://drive.google.com/file/d/1Q0saFOq2c9q-qrAWb__tBeGEkRrzkndb/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Hypothesis Testing 2' img={HypothesisTesting2} link='https://drive.google.com/file/d/109UdVRZQFj80ojeIcricuEiH0BPoH9ym/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inference Proportions and Means Review' img={InferenceProportionsandMeansReview} link='https://drive.google.com/file/d/1pTL1ofHX-olj1FdMk_e9OEKZaE4t13NB/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default InferenceMeans;