import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {PercentsReview,PercentWordProblems,PercentChange2,PercentsReview2,PercentChange,PercentProblems, FractionsDecimalsPercents} from "./Preview"
import {Link} from 'react-router-dom'
const Percentages = () => (

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
        <File title='Percents Review' img={PercentsReview} link='https://drive.google.com/file/d/1quDxOYSq2N-djY5O1B6HuY5ln1OaLppO/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Percent Word Problems' img={PercentWordProblems} link='https://drive.google.com/file/d/14SKCdq-5ke9dfL9ihs-Erz96gViY6r6e/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Percent Change 2' img={PercentChange2} link='https://drive.google.com/file/d/1GDXgXDlY23oHyh0bh2LwU1xlgb1f6iWP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Fractions, Decimals, and Percents' img={FractionsDecimalsPercents} link='https://drive.google.com/file/d/1SpYC_yJQOOFNZMRWpwdWbBtY0Wa_fD9r/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Percents Review 2' img={PercentsReview2} link='https://drive.google.com/file/d/17wNpmhxOaMGIGRiBlbFb8vAj1Qi-I94_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Percent Change' img={PercentChange} link='https://drive.google.com/file/d/1kQ8Lv6P-5iZPcINF93YsmA_R_klUNNzY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Percent Problems' img={PercentProblems} link='https://drive.google.com/file/d/1Wtx-MIfly12eR0O2NdRg7qwSkGd6G0YE/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Percentages;