import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {FindingUnitRate,RatioandRates,RatiosandRatesWordProblems,UnitRate,UnitConversion,EquivalentRatios} from "./Preview"


const Ratios = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Finding Unit Rate' img={FindingUnitRate} link='https://drive.google.com/file/d/1F14lDbxP70Rq-FAbN2RDyS13cxS63O0s/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Ratio and Rates' img={RatioandRates} link='https://drive.google.com/file/d/1IwvLpHATXls9hqXx6jachVDmh9nNY0rP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Ratios and Rates Word Problems' img={RatiosandRatesWordProblems} link='https://drive.google.com/file/d/1bpXx0RZoNh0JFAg9WxG-9SIZHQVx3-DG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Unit Rate' img={UnitRate} link='https://drive.google.com/file/d/1EDa8Yrw45bknqZaJypouerzmMSnY12xx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Unit Conversion' img={UnitConversion} link='https://drive.google.com/file/d/1hSZP_gbP42WS5cuA1wBqfGMe5v3t0a29/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Equivalent Ratios' img={EquivalentRatios} link='https://drive.google.com/file/d/1GcdCrBsEXmU9tO-KAJ42vK6hByv3BU04/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Ratios;