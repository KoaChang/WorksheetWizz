import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import {CompoundInequalities,InequalitiesReview,InequalitiesReview2,MultiStepInequalities,OneStepInequalities,VariablesBothSides} from './Preview'
import "../Product.css"
import {Link} from 'react-router-dom'


const EquationsInequalities = () => (

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
      
<File title='Compound Inequalities' img={CompoundInequalities} link='https://drive.google.com/file/d/1zHP6kv7FVLz76D_u5pTZiOX49WQai3kU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inequalities Review' img={InequalitiesReview} link='https://drive.google.com/file/d/14SJq9UfxnQoUReXF05KoAiCUyIRF0KHI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inequalities Review' img={InequalitiesReview} link='https://drive.google.com/file/d/1txnVzCi6nAAR3X9eYgH-gcnhsM9y9zzA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multi-Step Inequalities'   img={MultiStepInequalities} body='Download PDF' link='https://drive.google.com/file/d/1ly8xnNwcowhIqyk2O2Mbzw1BKbkR9XG0/view?usp=sharing' target='_blank'/>  
            <File title='One-Step Inequalities'  img={OneStepInequalities} body='Download PDF' link='https://drive.google.com/file/d/1tIak5hEulSf3m8A8F-NsQ5yCpsk3GdYh/view?usp=sharing' target='_blank'/>  
<File title='Variables Both Sides' img={VariablesBothSides} link='https://drive.google.com/file/d/1Q_OnBw4YJbNr2cXw0kV3OPauGQTocZMS/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default EquationsInequalities;