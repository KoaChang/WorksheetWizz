import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {PolarEquations,ParametricEquations,ParametricEquationsReview,ParametricTangentLinesandArcLength} from "./Preview"

const ParametricPolar = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
<File title='Parametric Equations' img={ParametricEquations} link='https://drive.google.com/file/d/1Ggoi3bjSsdTIif7E4VyImeFlGxqmcA2L/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parametric Equations Review' img={ParametricEquationsReview} link='https://drive.google.com/file/d/1drs0cKee7AHSqSiQGkqmxCdXqydAzC6u/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parametric Tangent Lines and Arc Length' img={ParametricTangentLinesandArcLength} link='https://drive.google.com/file/d/1-UHxa9uyElejz9nij_rGatoQQHKVE1th/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polar Equations Tangent Lines and Arc Length' img={PolarEquations} body='Download PDF' link='https://drive.google.com/file/d/1lIE-l72jH_PsEnfPCaHKsOTqiB5WXsIW/view?usp=sharing' target='_blank'/>
       
        </div>

    </div>
    
)

export default ParametricPolar;