import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {PascalsTriangle2,BinomialTheorem2,PascalsTriangle3,PascalsTriangle,BinomialExpansionReview,BinomialTheorem} from "./Preview"

const BinomialExpansion = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/precalculus'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='Pascals Triangle' img={PascalsTriangle} link='https://drive.google.com/file/d/1w9CDitf5eG8_miR3D1bIuyIZIGwzhc0B/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Pascals Triangle 2' img={PascalsTriangle2} link='https://drive.google.com/file/d/1DODITq7POMcqC6aznvHWBUXTWUcSCOHz/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Pascals Triangle 3' img={PascalsTriangle3} link='https://drive.google.com/file/d/1lSspc3-qNggxIFBKf3eZSF8Egm0w3EQA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Binomial Theorem' img={BinomialTheorem} link='https://drive.google.com/file/d/1ATwRNdS24n0K9lmIt0xaF0V3vTvbI7sU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Binomial Theorem 2' img={BinomialTheorem2} link='https://drive.google.com/file/d/1Avsx2tDccuq3genQUrnuKxtDryGsnAJE/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Binomial Expansion Review' img={BinomialExpansionReview} link='https://drive.google.com/file/d/1ScWnnCuq8Vvs09MCc4sEnbXv9k45hgZU/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default BinomialExpansion;