import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import { GraphingPiecewiseFunctions, GraphingPiecewiseFunctions2, PiecewiseDomainandRange, PiecewiseFunctionsReview, PiecewiseWordProblems } from "./Preview";
// import {PiecewiseFunctionsReview,PiecewiseWordProblems,PiecewiseDomainandRange,GraphingPiecewiseFunctions,GraphingPiecewiseFunctions2} from "./Preview"

// import { GraphingPiecewiseFunctions,GraphingPiecewiseFunctions2,PiecewiseDomainandRange,PiecewiseFunctionsReview,PiecewiseWordProblems } from "./Preview";

const Piecewise = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Graphing Piecewise Functions' img={GraphingPiecewiseFunctions} link='https://drive.google.com/file/d/1eTsqnivT45wU3pa462rrahxWgfiAbtd1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Piecewise Functions 2' img={GraphingPiecewiseFunctions2} link='https://drive.google.com/file/d/1HB9dD7ZNWc_SwzL2oimfvKR7PSCreOJk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Piecewise Domain and Range' img={PiecewiseDomainandRange} link='https://drive.google.com/file/d/13_6n-9OmGRWk8mz92U7rr_vBFwN93Vak/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Piecewise Functions Review' img={PiecewiseFunctionsReview} link='https://drive.google.com/file/d/1Abv9NZg1A2spE_RImkyck8Ru80okxd5u/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Piecewise Word Problems' img={PiecewiseWordProblems} link='https://drive.google.com/file/d/1n2sBEM48CGH99xlQ_t5udxzw0TVxOMOE/view?usp=sharing' target='_blank' body = 'Download PDF' />  </div>

    </div>
    
)

export default Piecewise;