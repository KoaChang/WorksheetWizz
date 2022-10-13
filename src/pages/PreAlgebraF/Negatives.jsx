import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {MuliplyingandDividingIntegers,NegativeNumberOperations,IntegerWordProblems,AddingandSubtractingIntegers} from "./Preview"
import {Link} from 'react-router-dom'

const Negatives = () => (

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
        <File title='Multiplying and Dividing Integers' img={MuliplyingandDividingIntegers} link='https://drive.google.com/file/d/1qdyQBWhkAzILmaAlpQ6cI3A6kTkdl6n6/view?usp=sharing' target='_blank' body = 'Downlaod PDF' />

<File title='Negative Number Operations' img={NegativeNumberOperations} link='https://drive.google.com/file/d/1AD5UnttAIAUumo2EeSMh7cUW79CUwUN8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integer Word Problems' img={IntegerWordProblems} link='https://drive.google.com/file/d/1tXX3oCDeLibD9b7euUEm83mpMmKYSlBj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Adding and Subtracting Integers' img={AddingandSubtractingIntegers} link='https://drive.google.com/file/d/1Va8K_IQW0k1kfqu6xeOFXjCXrurrda-F/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Negatives;