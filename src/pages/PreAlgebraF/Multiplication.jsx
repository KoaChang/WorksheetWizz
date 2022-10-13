import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {MultiplyingLargeNumbers,FourDigitMultiplication,TwoDigitMultiplication,TimesTables,MultiplicationWordProblems,MultiplicationTimesTables,ThreeDigitMultiplication} from "./Preview"
import {Link} from 'react-router-dom'

const Multiplication = () => (

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

        <File title='Times Tables' img={TimesTables} link='https://drive.google.com/file/d/1LSYkJDxjfUCo0yci3Py6QjxcowOAqcbz/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplication Times Tables' img={MultiplicationTimesTables} link='https://drive.google.com/file/d/1O3pnAKLedryxQEfLPARfppA9YN_UlP7a/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Two Digit Multiplication' img={TwoDigitMultiplication} link='https://drive.google.com/file/d/1zhJXkZXY9DpDfG5qM39F7r_XcJRJVGcA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Three Digit Multiplication' img={ThreeDigitMultiplication} link='https://drive.google.com/file/d/1rLqEdHZwQR1R2E2ZV5Ajjkib4Vx431Za/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Four Digit Multiplication' img={FourDigitMultiplication} link='https://drive.google.com/file/d/1v05RKcFfN1TuLtxTU-LdIytGb_tzEN2w/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying Large Numbers' img={MultiplyingLargeNumbers} link='https://drive.google.com/file/d/1BBaa8uSG-oTCfG1QICtmWGGbNJE0R8se/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplication Word Problems' img={MultiplicationWordProblems} link='https://drive.google.com/file/d/1aT7XW1gqf92sYMBdL6P3IAbQm6KkjB5b/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Multiplication;