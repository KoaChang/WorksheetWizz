import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {SimpleHarmonicMotion,SimpleHarmonicMotion2} from "./Preview"


const SMH = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Simple Harmonic Motion' img={SimpleHarmonicMotion} link='https://drive.google.com/file/d/1hrN1VmJOxeVLEzy-rzqR0QcB8pTVX2My/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Simple Harmonic Motion 2' img={SimpleHarmonicMotion2} link='https://drive.google.com/file/d/1qy5kNi-03BJG9QZuidoxDwEkBtfGNT9t/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default SMH;