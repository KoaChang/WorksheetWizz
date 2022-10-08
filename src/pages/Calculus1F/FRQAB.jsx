import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {AccumationFunctionsFRQ,ImplicitDifferentiationFRQ,ReimannSumsFRQ,RelatedRatesFRQ,AreasofVolumesFRQ,RateofChangeFRQ,ParticleMotionFRQ,ChartsofFFRQ,FunctionsFRQ,AnalyzingGraphsofFFRQ} from "./Preview"
import { IntegrationAccumulation } from ".";


const FRQAB = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Accumulation Functions FRQ'     img={AccumationFunctionsFRQ} body='Download PDF' link='' target='_blank'/>      <File title='Analyzing Graphs of F FRQ' img={AnalyzingGraphsofFFRQ} body='Download PDF' link='https://drive.google.com/file/d/1jV7ehGQ9W_LIqgSNju49NI2C8mRSdNae/view?usp=sharing' target='_blank'/>
            <File title='Areas and Volumes FRQ'   img={AreasofVolumesFRQ} body='Download PDF' link='https://drive.google.com/file/d/1ApmARNDIWOr3PsFledzZPaJwPR5oqTuc/view?usp=sharing' target='_blank'/>
<File title='Analyzing Graphs of F FRQ' img={AnalyzingGraphsofFFRQ} link='https://drive.google.com/file/d/1ojP2yV0JE9EP62b29Vl1lBrCsA5sLeRs/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Charts of F FRQ' img={ChartsofFFRQ} link='https://drive.google.com/file/d/1_rxuvqi8fHuSTr1fm6KYyyZf--Bk6bx8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Functions FRQ' img={FunctionsFRQ} link='https://drive.google.com/file/d/1G6If6w2KS80NB5_nyr6-3hzhWu625SSq/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Implicit Differentiation FRQ' img={ImplicitDifferentiationFRQ} link='https://drive.google.com/file/d/1FH-wr_vg1o65Xn1hsjMk17uyQZ_ErxlZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Particle Motion FRQ' img={ParticleMotionFRQ} link='https://drive.google.com/file/d/1vk28NTkITklBbgmfzq9EQN4VPQhiqzTj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rate of Change FRQ' img={RateofChangeFRQ} link='https://drive.google.com/file/d/1MpLr9W3v9FwDEmeP7B1GnC3j-X1ZCzI_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Reimann Sums FRQ' img={ReimannSumsFRQ} link='https://drive.google.com/file/d/1aDQqvG-vPV1lf-rSdNGN4nu8-etZi9p6/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Related Rates FRQ' img={RelatedRatesFRQ} link='https://drive.google.com/file/d/1wAYwegApfuwBdDTGvURTWMzxNrLByXiO/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default FRQAB;