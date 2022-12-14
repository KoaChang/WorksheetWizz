import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {ParametricEquationsFRQ,DifferentialEquationsFRQ,SeriesFRQ,PolarEquationsFRQ} from "./Preview"

const FRQBC = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/calculus2'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='Parametric Equations FRQ' img={ParametricEquationsFRQ} link='https://drive.google.com/file/d/1XkOXHSJYD97B-3TuYpSdyEr136Qko3FN/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differential Equations FRQ' img={DifferentialEquationsFRQ} link='https://drive.google.com/file/d/1MiJkhGeXez2zyFLp6zVvIHyRAwoVSIjK/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Series FRQ' img={SeriesFRQ} link='https://drive.google.com/file/d/10xEX-sGXQW-Q3drrLKsGFCu2Spt1Y03Z/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polar Equations FRQ' img={PolarEquationsFRQ} link='https://drive.google.com/file/d/1X5v0BTV8Gr6wvkilPS6X7t1lqpdrVFpR/view?usp=sharing' target='_blank' body = 'Download PDF' /> 
        </div>

    </div>
    
)

export default FRQBC;