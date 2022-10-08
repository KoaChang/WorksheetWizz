import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets';
import "../Product.css";
import { DividingPolynomials, DividingPolynomials2, FactorTheorem, LongDivisionPolynomials, RemainderFactorTheorem, SyntheticDivision, TheRemainderTheorem } from "./Preview";
// import {SyntheticDivision,LongDivisionPolynomials,RemainderFactorTheorem,DividingPolynomials2,DividingPolynomials,FactorTheorem,TheRemainderTheorem} from "./Preview"

// import { DividingPolynomials,DividingPolynomials2,FactorTheorem,LongDivisionPolynomials,RemainderFactorTheorem,SyntheticDivision,TheRemainderTheorem } from "./Preview";

const PolynomialDivision = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Long Division Polynomials' img={LongDivisionPolynomials} link='https://drive.google.com/file/d/1sNc1EZFQ4Fhc11ZE-Hw-bjLGqWtAmnoz/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Synthetic Division' img={SyntheticDivision} link='https://drive.google.com/file/d/1WwvayJFHs5GuxuTSMaj5XJi4kduLwesR/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Dividing Polynomials' img={DividingPolynomials} link='https://drive.google.com/file/d/1p3DDYC2R7fbFR3zOxE1UkgZwMsiDpu7p/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Dividing Polynomials 2' img={DividingPolynomials2} link='https://drive.google.com/file/d/1xIvg3RQDh3ZG4XY_rAXqz3mQMJVJ4g1B/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Factor Theorem' img={FactorTheorem} link='https://drive.google.com/file/d/1r1mZ5TnS1g3444I-PhJG2-JH6qeNGSBk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Remainder Factor Theorem' img={RemainderFactorTheorem} link='https://drive.google.com/file/d/1uVy5sDjpglI8WGcaeQhcZ5hMD_6CyCx4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='The Remainder Theorem' img={TheRemainderTheorem} link='https://drive.google.com/file/d/1Hppc6v8dsQyH0U6f9gFo1c7GQhxIFbKn/view?usp=sharing' target='_blank' body = 'Download PDF' />   </div>

    </div>
    
)

export default PolynomialDivision;