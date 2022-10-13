import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {ExponentsandDivision,ExponentsandMultiplication,ExponentsReview,PowersofProductsandQuotients,PropertiesofExponents,SimplifyingExponents} from './Preview'

const Exponents = () => (

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
  
<File title='Exponents and Division' img={ExponentsandDivision} link='https://drive.google.com/file/d/1ZK64bMmKCzHyll3IvTK5aSN3HSYsfVbF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Exponents and Multiplication' img={ExponentsandMultiplication} link='https://drive.google.com/file/d/1149N3igpiljeA-F8muCvJHSz4B8HOUmr/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Exponents Review' img={ExponentsReview} link='https://drive.google.com/file/d/1JAnqCdOaHigEQhPUqVhC1vGHKjDyu-sc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Powers of Products and Quotients' img={PowersofProductsandQuotients} link='https://drive.google.com/file/d/1coFFsHrT9hB3oQX4kN9cXWLdDCMppPjp/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Exponents' img={PropertiesofExponents} link='https://drive.google.com/file/d/1_PrHxvOk7JY01JW11OjMbjrAvrxabF9m/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Simplifying Exponents' img={SimplifyingExponents} link='https://drive.google.com/file/d/1PxDQudXOqFX1K-4A1EkENTAZ6pUufpQS/view?usp=sharing' target='_blank' body = 'Download PDF' />     </div>

    </div>
    
)

export default Exponents;