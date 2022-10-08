import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {ChemicalEqualibriumReview,EqualibriumConstants,LeChateliersPrinciple} from "./Preview"


const Equalibrium = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Le Chateliers Principle' img={LeChateliersPrinciple} body='Download PDF' link='https://drive.google.com/file/d/1pJcNhxmHK4ZZ5Eqse0RmrCC_yvK_ZTZ9/view?usp=sharing' target='_blank'/>
            <File title='Solving Equalibrium Constants'  img={EqualibriumConstants} body='Download PDF' link='https://drive.google.com/file/d/1oChuAK9NA8XkV8iAQd_h6lrrebR_Qz6q/view?usp=sharing' target='_blank'/>
            <File title='Chemical Equalibrium Review' img={ChemicalEqualibriumReview} link='https://drive.google.com/file/d/1fzn47G6xgbRDHAeTZACQAKhQc_BmEgis/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default Equalibrium;