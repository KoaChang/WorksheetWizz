import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {ABExam,CalculusABExam} from "./Preview"


const APExamsAB = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/calculus1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            
<File title='2012 Calculus AB Exam' img={CalculusABExam} link='https://drive.google.com/file/d/1y3Bgt1h6fSVUNR8eqEcUoJHyZjDbkmKZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='2020 AB Exam' img={ABExam} link='https://drive.google.com/file/d/1EMdoiwliak_GV7YbDFhQgopc4mvDvPo0/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default APExamsAB;