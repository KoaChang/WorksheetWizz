import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {TwoDigitDivsionRemainder,MixedWordProblems2,DivisionwithRemainder,FourDigitDivision,MixedWordProblems,FourDigitDivisionRemainder,MentalDivision,ThreeDigitDivisionRemainder,ThreeDigitDivision,DivisionWordProblems,TwoDigitDivision} from "./Preview"


const Division = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        <File title='Two Digit Divsion Remainder' img={TwoDigitDivsionRemainder} link='https://drive.google.com/file/d/1WTigIXYwFfbkTQeXwvH2laIxkzKmKeQ4/view?usp=sharing' target='_blank' body = 'Downlaod PDF' />
        <File title='Mixed Word Problems 2' img={MixedWordProblems2} link='https://drive.google.com/file/d/1ru-9OPAa_KfJRMoBY7bOq_m1HJDUUIJc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Division with Remainder' img={DivisionwithRemainder} link='https://drive.google.com/file/d/19RDquexWfFkq8WK5BPS_vfqq7D83bb2X/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Four Digit Division' img={FourDigitDivision} link='https://drive.google.com/file/d/1yYHd43a3LS4doV-flr9Mbi8I7AUaoYnm/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Mixed Word Problems' img={MixedWordProblems} link='https://drive.google.com/file/d/1pmoouJPAr9SmHHq7hY2iro5sYx5kxDZy/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Four Digit Division Remainder' img={FourDigitDivisionRemainder} link='https://drive.google.com/file/d/1yYHd43a3LS4doV-flr9Mbi8I7AUaoYnm/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Mental Division' img={MentalDivision} link='https://drive.google.com/file/d/1mOp6h96u4NvriAlVx67Gld8m-OHPLZur/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Three Digit Division Remainder' img={ThreeDigitDivisionRemainder} link='https://drive.google.com/file/d/1PO6KLd6-8pN5dyqWgKjKNKwo5iN9MnqU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Three Digit Division' img={ThreeDigitDivision} link='https://drive.google.com/file/d/1xu57PPuDh-3BgR3VokTjYrQUB5GI9lQH/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Division Word Problems' img={DivisionWordProblems} link='https://drive.google.com/file/d/1hZ9chA2fPnpXNpZ1Pyk7s1_NVcPmPbXT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Two Digit Division' img={TwoDigitDivision} link='https://drive.google.com/file/d/1A4PB7LSFF0q5X8DtZt8uDd71ckV6FSqE/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default Division;