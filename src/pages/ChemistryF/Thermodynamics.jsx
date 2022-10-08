import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {ThermodynamicsReview,FirstLawofThermodynamics,SecondLawofThermodynamics,ThirdLawofThermodynamics} from "./Preview"


const Thermodynamics = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='1st Law of Thermodynamics' img={FirstLawofThermodynamics} body='Download PDF' link='https://drive.google.com/file/d/1_szqEOFI6yHdmDANhAXOv9uxSuSds4Cu/view?usp=sharing' target='_blank'/>
            <File title='2nd Law of Thermodynamics'  img={SecondLawofThermodynamics} body='Download PDF' link='https://drive.google.com/file/d/11lr_J8bPzoaEGe9gFZSO71oGpRrkIcG_/view?usp=sharing' target='_blank'/>
            <File title='3rd Law of Thermodynamics'  img={ThirdLawofThermodynamics} body='Download PDF' link='https://drive.google.com/file/d/1WVmuV2vvr3uF1v4ldpRlbukbGgv4Kt8T/view?usp=sharing' target='_blank'/>
            <File title='Thermodynamics Review' img={ThermodynamicsReview} link='https://drive.google.com/file/d/1SZnKi9FePGAqUcdPRuS4ZD6acGYzmyOc/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Thermodynamics;