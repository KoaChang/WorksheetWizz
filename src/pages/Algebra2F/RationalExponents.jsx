import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import { RadicalsandRationalExponents, RationalExponents_RadicalsReview, SimplifyingRationalExponents } from "./Preview";
// import {RationalExponents_RadicalsReview,RadicalsandRationalExponents,SimplifyingRationalExponents} from "./Preview"

// import { RationalExponentsRadicalsReview,SimplifyingRationalExponents,RadicalsandRationalExponents } from "./Preview";

const RationalExponents = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Rational Exponents'    img={RadicalsandRationalExponents} body='Download PDF' link='https://drive.google.com/file/d/1pu4Wd0fXe072_eDZ1jeY_NHOgndcft2j/view?usp=sharing' target='_blank'/>
            <File title='Simplifying Rational Exponents' img={SimplifyingRationalExponents} link='https://drive.google.com/file/d/1_RwyZ2qYrf98jtNVjABOCgBcDIr0OyCh/view?usp=sharing' target='_blank' body = 'Download PDF' />
            <File title='Rational Exponents and Radicals Review'   img={RationalExponents_RadicalsReview} body='Download PDF' link='https://drive.google.com/file/d/1hL57G4wXF0C3c6HIlREPSqNvKhlJLa14/view?usp=sharing' target='_blank'/>
        </div>

    </div>
    
)

export default RationalExponents;