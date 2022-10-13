import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {DividingbyPowersof10,EvaluatingPowersof10,MultiplyingbyPowersof10,ScientificNotation2,ScientificNotation} from "./Preview"
import {Link} from 'react-router-dom'
const PowersOf10 = () => (

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

        <File title='Dividing by Powers of 10' img={DividingbyPowersof10} link='https://drive.google.com/file/d/1xXrYUoTAqwty2fC1nSUlJlVFusuK4FY8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Evaluating Powers of 10' img={EvaluatingPowersof10} link='https://drive.google.com/file/d/1wePd3LvG7lpphIeVepiqu9QfXCCnt6JP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying by Powers of 10' img={MultiplyingbyPowersof10} link='https://drive.google.com/file/d/1ql1pxyKeIVwGskc-cRZZXkUjTgwUzQyT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Scientific Notation' img={ScientificNotation} link='https://drive.google.com/file/d/1ZY2lmbaWm0ChhdGYVIeopITO5es1BjMH/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Scientific Notation 2' img={ScientificNotation2} link='https://drive.google.com/file/d/1e07FjvHpz_dpyW5VzEgkJ-l106Bl3Uye/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default PowersOf10;