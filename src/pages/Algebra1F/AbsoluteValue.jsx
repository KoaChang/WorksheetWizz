import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import {AbsoluteValueEquations,AbsoluteValueIntro} from './Preview'
import {Link} from 'react-router-dom'
import "../Product.css"

const AbsoluteValue = () => (

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
        <File title='Absolute Value Equations' img={AbsoluteValueEquations} link='https://drive.google.com/file/d/1QXegcIenAi9z8uUGYsA-rCXuo-e5R9oD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Absolute Value Intro' img={AbsoluteValueIntro} link='https://drive.google.com/file/d/1UBLnjUr4F8HUXwncaklO47yI2Q1ztqQe/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default AbsoluteValue;