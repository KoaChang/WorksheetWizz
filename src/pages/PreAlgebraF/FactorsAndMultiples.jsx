import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {FactorTrees,Multiples,GreatestCommonFactoer,LeastCommonMultiple,Factors,PrimeFactorization} from "./Preview"

const FactorsAndMultiples = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/prealgebra'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
<File title='Factor Trees' img={FactorTrees} link='https://drive.google.com/file/d/1VNcIt_xKS24ohR2eIuH7bBEg6-GFEZT7/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiples' img={Multiples} link='https://drive.google.com/file/d/1q8GiS0zSBWUDo67bgnG5WwbFRqf8dmK8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Greatest Common Factor' img={GreatestCommonFactoer} link='https://drive.google.com/file/d/1knCYk3cpXqLgOHsHITGTWV1pifSr4z9P/view?usp=sharing' target='_blank' body = 'Downlaod PDF' />
<File title='Least Common Multiple ' img={LeastCommonMultiple} link='https://drive.google.com/file/d/1hb3tiGWrCkX8RVrz8M25FM4WYe8rf5pV/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Factors' img={Factors} link='https://drive.google.com/file/d/1l6w8d5Ta-WPrtpRsD7eHvIk03DPvsNMc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Prime Factorization' img={PrimeFactorization} link='https://drive.google.com/file/d/11kHj0XcUpDf8JAX44hmra2MNcaS5WghX/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default FactorsAndMultiples;