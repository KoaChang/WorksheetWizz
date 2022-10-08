import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Exam2012,PracticeExam1} from "./Preview"

const APExamsS = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        <File title='AP Statistics 2012 Exam' img={Exam2012} link='https://drive.google.com/file/d/1bZY_TlrFSHKD1LYaYOx_2u0zuqjFCnV4/view?usp=sharing' target='_blank' body='Download PDF'/>
        <File title='AP Statistics Practice Exam 1' img={PracticeExam1} link='https://drive.google.com/file/d/11BqINEuXq_Q_VdUqhOFa_eDa3TCICya_/view?usp=sharing' target='_blank' body='Download PDF'/>

        </div>

    </div>
    
)

export default APExamsS;