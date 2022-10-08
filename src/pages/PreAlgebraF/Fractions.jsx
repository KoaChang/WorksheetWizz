import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {FractionWordProblems3,MultiplyMixedNumbers,FractionWordProblems2,MultiplyingFractionsReview,DividingFractionsReview,AddUnlikeFractions,DividingMixedNumbers,FractionWordProblems,AddMixedNumbers,SubtractLikeFractions,SubtractMixedNumbers,AddLikeFractions,MultiplyingFractions,SubtractUnlikeFractions} from "./Preview"


const Fractions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Fraction Word Problems 3' img={FractionWordProblems3} link='https://drive.google.com/file/d/1v-y72mfG-2lblGBmL9DBtOcniWO2fvZ4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiply Mixed Numbers' img={MultiplyMixedNumbers} link='https://drive.google.com/file/d/1wlr9P2p1TwOLV56a48uChCEV9sUoTQle/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Fraction Word Problems 2' img={FractionWordProblems2} link='https://drive.google.com/file/d/1-nGTXrGfBzntnmZY-V8bhDauXWzb_lEP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying Fractions Review' img={MultiplyingFractionsReview} link='https://drive.google.com/file/d/1c5rD9xaR4x_y1FSadmqwOvaxGDS9gKQu/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Dividing Fractions Review' img={DividingFractionsReview} link='https://drive.google.com/file/d/10TJZHpdw7tgGBrsBWdzkZrtxKR35rwFi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Add Unlike Fractions' img={AddUnlikeFractions} link='https://drive.google.com/file/d/1dlmtaBcVy8murQqnXDd2qg553-aHl_CU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Dividing Mixed Numbers' img={DividingMixedNumbers} link='https://drive.google.com/file/d/1Ky7yz6GB8JiV8h0G7YYY9J08TfLtHEFb/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Fraction Word Problems' img={FractionWordProblems} link='https://drive.google.com/file/d/1hEBUgtoIo5V6OSIGw5Emst9OqK9BZFLQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Add Mixed Numbers' img={AddMixedNumbers} link='https://drive.google.com/file/d/1mwvar-zjvTLGoPqQ6g22djab-FLp866g/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Subtract Like Fractions' img={SubtractLikeFractions} link='https://drive.google.com/file/d/1vYR6ZtI4qbYXphLn8LgyjodofgC_ezT-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Subtract Mixed Numbers' img={SubtractMixedNumbers} link='https://drive.google.com/file/d/1Jjtw_QcHOzwfwWn-78odm5YhhwVPWrli/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Add Like Fractions' img={AddLikeFractions} link='https://drive.google.com/file/d/14A7gCxuS826ECzUTW8pP6lhcm0dcRvqJ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying Fractions' img={MultiplyingFractions} link='https://drive.google.com/file/d/1Yhh3ho-vy10W4UInqzILJj7C-08kKutF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Subtract Unlike Fractions' img={SubtractUnlikeFractions} link='https://drive.google.com/file/d/1nErdtXIQROMRbWpVAs6Lv2_bYUy-rR4D/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Fractions;