import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {SubtractionWordProblems,FiveDigitSubtraction,TwoDigitSubtraction,ThreeDigitSubtraction,LargeNumberSubtraction,FourDigitSubtraction} from "./Preview"

const Subtraction = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Two Digit Subtraction' img={TwoDigitSubtraction} link='https://drive.google.com/file/d/1DluC1TUvAzJpYuEhjom3bhuFpEMSbOZR/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Three Digit Subtraction' img={ThreeDigitSubtraction} link='https://drive.google.com/file/d/1_Vect-uWckUfPf8Atj3CuBm-6y1W7aaD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Four Digit Subtraction' img={FourDigitSubtraction} link='https://drive.google.com/file/d/14WZaX_xBt_y88SerKFqnbZJ2iZv_tWk2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Five Digit Subtraction' img={FiveDigitSubtraction} link='https://drive.google.com/file/d/1y_cwJWY35npw_SZ9QHL9UMwvzObrv-7H/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Large Number Subtraction' img={LargeNumberSubtraction} link='https://drive.google.com/file/d/1y6U4n02uSgVQOLxkrRkm9tW4-N6DKBOL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Subtraction Word Problems' img={SubtractionWordProblems} link='https://drive.google.com/file/d/1LJpcnXFJ7i97swD7xWlakfRFn_f9ZRXI/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Subtraction;