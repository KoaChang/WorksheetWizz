import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {CircularMotionF,CircularMotionandCentripetalAcceleration,UniversalLawofGravitation} from "./Preview"


const CircularMotion = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
       
<File title='Circular Motion' img={CircularMotionF} link='https://drive.google.com/file/d/1q7J2eJM5fg1Tdj2joM5FOq5-G3S0HG-b/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Circular Motion and Centripetal Acceleration' img={CircularMotionandCentripetalAcceleration} link='https://drive.google.com/file/d/1yeLog2y5aWJ9Bel0AE-q6AaN5MP1qPSu/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Universal Law of Gravitation' img={UniversalLawofGravitation} link='https://drive.google.com/file/d/1pZi5uW0107B9I5BXI_RV2c1maGGG7C4x/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default CircularMotion;