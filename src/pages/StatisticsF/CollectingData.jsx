import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {SamplingTechniques2,SamplingTechniques,ExperimentalDesign,Blocking,ExperimentalDesign3,BiasandSampling,ExperimentalDesign2} from "./Preview"

const CollectingData = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Sampling Techniques 2' img={SamplingTechniques2} link='https://drive.google.com/file/d/1UFTQKoeeGAdTstHl63EZPM3UZiM0_XKS/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sampling Techniques' img={SamplingTechniques} link='https://drive.google.com/file/d/1e_LTYDdxkiie59VIqT9H_jw7snPoSB_W/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Experimental Design' img={ExperimentalDesign} link='https://drive.google.com/file/d/1bF5hbcrgEO4zg7NynqI9eN1Qzlx6q6QI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Blocking' img={Blocking} link='https://drive.google.com/file/d/1uqOmA_leXAP5ckjprX8zukZ4-zT2cM0h/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Experimental Design 3' img={ExperimentalDesign3} link='https://drive.google.com/file/d/18N0Wa7fr3qKhHsb9FWhdL2HLLljpNXQ_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Bias and Sampling' img={BiasandSampling} link='https://drive.google.com/file/d/1rPQs9ZIpfAbeTrv7GKmEfxpy9uBorFvW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Experimental Design 2' img={ExperimentalDesign2} link='https://drive.google.com/file/d/1lsUBi7oh3NZa7fhibBZYZjBMJ8Pr4jvy/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default CollectingData;