import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {AcidsBasesandpH,AcidsandBasesIntro,AcidBasePairs,TitrationsProblems} from "./Preview"


const AcidBase = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

<File title='Acids and Bases Intro' img={AcidsBasesandpH} link='https://drive.google.com/file/d/1jOBlV9rMUfhIKDHikz04FHraJimFGByq/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Acid Base Pairs' img={AcidBasePairs} link='https://drive.google.com/file/d/1KUR8nptuJ0k2Z-zpce7QDCPl8XtBrDml/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Acids and Bases pH' img={AcidsBasesandpH} body='Download PDF' link='https://drive.google.com/file/d/1pfCmouoikDPyWxuHhu9jr30G2fB_iPfE/view?usp=sharing' target='_blank'/>
<File title='Titration Problems'  img={TitrationsProblems} body='Download PDF' link='https://drive.google.com/file/d/1gvqN0k3yS7mRxC06XOf2p6gOdWx_Qvfh/view?usp=sharing' target='_blank'/>
        
        </div>

    </div>
    
)

export default AcidBase;