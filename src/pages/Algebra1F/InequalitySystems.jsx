import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {InequalitiesWordProblems,InequalitiesWordProblems2,GraphingInequalities,SystemsofInequalities,InequalitiesReview} from './Preview'
import {Link} from 'react-router-dom'

const InequalitySystems = () => (

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
        <File title='Graphing Inequalities' img={GraphingInequalities} link='https://drive.google.com/file/d/1B6M6zZByHD3K1D0XHL3w20hKV2dFAVut/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inequalities Review' img={InequalitiesReview} link='https://drive.google.com/file/d/14SJq9UfxnQoUReXF05KoAiCUyIRF0KHI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inequalities Review' img={InequalitiesReview} link='https://drive.google.com/file/d/1txnVzCi6nAAR3X9eYgH-gcnhsM9y9zzA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inequalities Word Problems' img={InequalitiesWordProblems} link='https://drive.google.com/file/d/1rxiyFTfyq3THWvT8mLj1wLXuEtEPTcji/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems of Inequalities' img={SystemsofInequalities} link='https://drive.google.com/file/d/1Ctr-lwrDWHcQ3Mhtdd_TlH4JVy9wGQAY/view?usp=sharing' target='_blank' body = 'Download PDF' />      </div>

    </div>
    
)

export default InequalitySystems;