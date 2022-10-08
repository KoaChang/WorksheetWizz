import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {RationalFunctionsEndBehavior,RationalFunctionsReview,RationalFunctionsEndBehavior2,RationalFunctionsWordProblems,DiscontinuitiesRationalFunctions,GraphingRationalFunctions,PartialFractionDecomposition,PropertiesofRationalFunctions} from "./Preview"

const RationalFunctions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>


        <File title='Rational Functions End Behavior' img={RationalFunctionsEndBehavior} link='https://drive.google.com/file/d/1gxLqvNaN0I1mxQmS_1JW-cHCIE6Qn7mf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rational Functions End Behavior 2' img={RationalFunctionsEndBehavior2} link='https://drive.google.com/file/d/1HUQD9NtZiPBmBrFnRrqag8A3QvWF8M2E/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rational Functions Review' img={RationalFunctionsReview} link='https://drive.google.com/file/d/1doUQ56QGD2GoDbaPpkQqdIV2E2jD_CI6/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rational Functions Word Problems' img={RationalFunctionsWordProblems} link='https://drive.google.com/file/d/1MZQVc6-XGvkQ4td_WgZDKwr1Ufu7y4ta/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Discontinuities Rational Functions' img={DiscontinuitiesRationalFunctions} link='https://drive.google.com/file/d/122qAuVh6wDt1B-nYyoIdzKdaFubbF9GW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Rational Functions' img={GraphingRationalFunctions} link='https://drive.google.com/file/d/1VeE0gCNMxFenTY3P98iiSxfc4wisPflZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Partial Fraction Decomposition' img={PartialFractionDecomposition} link='https://drive.google.com/file/d/1pUbqhMdEIhpx_X42e3dR0GA67-tfuq_D/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Rational Functions' img={PropertiesofRationalFunctions} link='https://drive.google.com/file/d/1vWdrnJXJ5axbzFVVURYc-K0ARDUZUHtC/view?usp=sharing' target='_blank' body = 'Download PDF' />
           
        </div>

    </div>
    
)

export default RationalFunctions;