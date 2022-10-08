import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {LimitsatInfinity,ContinuityReview,TypesofDisconitnuities,EvaluatingLimitsFromTables,EvaluatingLimits,Continuity,IntermidiateValueTheorem,LimitsReview,LimitsGraphically,LimitsReview2,LimitsTest} from "./Preview"

const Limits = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>


        <File title='Limits Graphically' img={LimitsGraphically} link='https://drive.google.com/file/d/1ID-_MRTEiqhv4jHYQiYdkyPL5915KSZM/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Evaluating Limits From Tables' img={EvaluatingLimitsFromTables} link='https://drive.google.com/file/d/18XHtO5yGBrnX170Vd6uXplHtUgR3I9Ro/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Evaluating Limits' img={EvaluatingLimits} link='https://drive.google.com/file/d/1EQmraUFbjH6xl4tqNx9B2WsjPryJbFJL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Limits at Infinity' img={LimitsatInfinity} link='https://drive.google.com/file/d/1tGY7oFUuGJLV7VySY1Ak86fikDXle-G2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Limits Review' img={LimitsReview} link='https://drive.google.com/file/d/1KXP1xc0ms1mHD4Gt7iuEdlyQOMnsm0mP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Limits Review 2' img={LimitsReview2} link='https://drive.google.com/file/d/1ghIhsgdcN8h0ABrSbbcZdpGHqJ-mRAGM/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Limits Test' img={LimitsTest} link='https://drive.google.com/file/d/17aY3btewz2cHwu2Kc2Jtw4PAvUL3ugKe/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Continuity' img={Continuity} link='https://drive.google.com/file/d/18IBY83HkZThds9-0Ak2mwWAJyZ5pxPWO/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Continuity Review' img={ContinuityReview} link='https://drive.google.com/file/d/1_P1_NKeLwk6UAYMoyAl_YkfKtED8vmii/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Intermidiate Value Theorem' img={IntermidiateValueTheorem} link='https://drive.google.com/file/d/11aFrNqvrzgU5dpXg5lbSgnaRXVKzkIQh/view?usp=sharing' target='_blank' body = 'Download PDF' />
            
        </div>

    </div>
    
)

export default Limits;