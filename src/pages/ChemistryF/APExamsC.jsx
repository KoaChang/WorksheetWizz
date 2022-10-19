import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {APChemistryPracticeExam,APChemistry2018FRQ} from "./Preview"

const APExamsC = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/chemistry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='AP Chemistry 2018 FRQ' img={APChemistry2018FRQ} link='https://drive.google.com/file/d/1bzeodscToeGClk-_44MaRnQ_GaV_hQA2/view?usp=sharing' target='_blank' body = 'Download PDF' />
        <File title='AP Chemistry Practice Exam' img={APChemistryPracticeExam} link='https://drive.google.com/file/d/1Ig1ztza_UeG7niyYTFB64V6IjvLgxmTZ/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default APExamsC;