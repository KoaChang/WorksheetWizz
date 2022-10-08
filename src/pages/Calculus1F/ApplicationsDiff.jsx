import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {LinearMotion2,L_HospitalRuleReview,RelatedRates2,LocalLinearApproximation,L_HospitalRule,RelatedRatesReview,RelatedRates,L_HospitalRule2,LinearMotion} from "./Preview"

const ApplicationsDiff = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='LHospital Rule'    img={L_HospitalRule} body='Download PDF' link='https://drive.google.com/file/d/1ZtUd7dXKzj5i5Y-svimzy3Ln_CAehnTF/view?usp=sharing' target='_blank'/>
            <File title='LHospital Rule 2'    img={L_HospitalRule2} body='Download PDF' link='https://drive.google.com/file/d/1Pg4WaDXwuo3AM69hG8rlcb4Hgefdrkys/view?usp=sharing' target='_blank'/>
            <File title='LHospital Review'  img={L_HospitalRuleReview} body='Download PDF' link='https://drive.google.com/file/d/1RFzLVMIxfPiJT948xO_PAHPjSFoR0uLp/view?usp=sharing' target='_blank'/>

<File title='Linear Motion' img={LinearMotion} link='https://drive.google.com/file/d/17QK---rJX8ejfKQpo4bgePqlgOJxvWwL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Linear Motion 2' img={LinearMotion2} link='https://drive.google.com/file/d/1YhOL0II-nG7zzsztSKAXF77T6Tdgc4Ra/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Related Rates' img={RelatedRates} link='https://drive.google.com/file/d/1s4ob2Owys12nh_I540T3FbKiFYNKOITN/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Related Rates 2' img={RelatedRates2} link='https://drive.google.com/file/d/1H_DxOlVgfz3QPKjhhGLb-RxorYiLAgg4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Related Rates Review' img={RelatedRatesReview} link='https://drive.google.com/file/d/1F_STHkZvyvGSt6-idA5ocutNUImjX7fF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Local Linear Approximation' img={LocalLinearApproximation} link='https://drive.google.com/file/d/1KaHbBytBjNueb03S6SkFHMFfT6TvNj3E/view?usp=sharing' target='_blank' body = 'Download PDF' />
       
        </div>

    </div>
    
)

export default ApplicationsDiff;