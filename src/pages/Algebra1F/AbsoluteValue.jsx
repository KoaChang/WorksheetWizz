import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import {AbsoluteValueEquations,AbsoluteValueIntro} from './Preview'

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

        <div className='cards'>
        <File title='Absolute Value Equations' img={AbsoluteValueEquations} link='https://drive.google.com/file/d/1QXegcIenAi9z8uUGYsA-rCXuo-e5R9oD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Absolute Value Intro' img={AbsoluteValueIntro} link='https://drive.google.com/file/d/1UBLnjUr4F8HUXwncaklO47yI2Q1ztqQe/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default AbsoluteValue;