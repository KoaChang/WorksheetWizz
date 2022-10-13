import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {MultiplyingRationalExpressions,SimplifyingRationalExpressions,AddingSubtractingRationalExpressions,SolvingRationalEquations,MultiplingDividingRationalExpressions,SolvingRationalEquations2,SolvingRationalEquations3,RationalExpressionsReview} from "./Preview"


const RationalExpressions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            <File title='Adding and Subtracting Rational Expressions'     img={AddingSubtractingRationalExpressions} body='Download PDF' link='https://drive.google.com/file/d/1L5ptQtxJT-usP7kDBom0xHydKaD50d3-/view?usp=sharing' target='_blank'/>
            <File title='Multiplying and Dividing Rational Expressions'      img={MultiplingDividingRationalExpressions} body='Download PDF' link='https://drive.google.com/file/d/1XHskePjWh3wJnwJ1yXAE5_lNzxC6I15_/view?usp=sharing' target='_blank'/>

     
<File title='Multiplying Rational Expressions' img={MultiplyingRationalExpressions} link='https://drive.google.com/file/d/1hG9yiDMblnrQ5OYu0ykuum3yRBIEatUJ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rational Expressions Review' img={RationalExpressionsReview} link='https://drive.google.com/file/d/14iNyH9YoADsMvH3iBQHjIvvG2sykqvKY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Simplifying Rational Expressions' img={SimplifyingRationalExpressions} link='https://drive.google.com/file/d/1297YzTuOcLT5vAi1QElnAp4N0h58MOID/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Rational Equations' img={SolvingRationalEquations} link='https://drive.google.com/file/d/1zaNz0h_yZf2oSVs3t68-D2WCzmAeIbqH/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Rational Equations 2'    img={SolvingRationalEquations2} body='Download PDF' link='https://drive.google.com/file/d/1pc9_xRWw2XRhUuplMHGgYoxzI8mew1hx/view?usp=sharing' target='_blank'/> 
            <File title='Solving Rational Equations 3'      img={SolvingRationalEquations3} body='Download PDF' link='https://drive.google.com/file/d/16Z2s7dYzC4Tjczzre3Qg5IcuDtUj0Ysc/view?usp=sharing' target='_blank'/>
       
        </div>

    </div>
    
)

export default RationalExpressions;