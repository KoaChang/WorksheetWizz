import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import { FactoringPolynomialsReview, PolynomialIdentities, RationalRootTheorem, SumandDifferenceofCubes, SumandDifferenceofCubes2 } from "./Preview";
// import {FactoringPolynomialsReview,PolynomialIdentities,SumandDifferenceofCubes,RationalRootTheorem,SumandDifferenceofCubes2} from "./Preview"

// import { FactoringPolynomialsReview,PolynomialIdentities,SumandDifferenceofCubes,RationalRootTheorem,SumandDifferenceofCubes2 } from "./Preview";

const PolynomialFactorization = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra2'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='Polynomial Identities' img={PolynomialIdentities} link='https://drive.google.com/file/d/1ZANun6ScY5G1naswIWK5fGpcnJDe5g4k/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sum and Difference of Cubes' img={SumandDifferenceofCubes} link='https://drive.google.com/file/d/1_dPnn-FDesED0otfJO6p2Okb5_D7FDS_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sum and Difference of Cubes 2' img={SumandDifferenceofCubes2} link='https://drive.google.com/file/d/1WDuMnl4QB9ZjZOfJF0Dm31diK8JIBe6-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rational Root Theorem' img={RationalRootTheorem} link='https://drive.google.com/file/d/1qfEbrLxoFr5W-XN6SnUuq_vPKNsJD9fb/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default PolynomialFactorization;