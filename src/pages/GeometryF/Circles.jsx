import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {InscribedandCircumscribedShapes,ArcsandCentralAngles,CirclesPowerTheorem,TangentstoCircles,AreaandCircumfrence,ArcLengthandSectorArea,InscribedAngles,CirclesandAngles,CirclesandAngles2} from "./Preview"


const Circles = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        <File title='Area and Circumfrence' img={AreaandCircumfrence} body='Download PDF' link='https://drive.google.com/file/d/1kjHjwU9pTAFW0QxkPWsm_UrDPxGNJM76/view?usp=sharing' target='_blank'/>
<File title='Arc Length and Sector Area' img={ArcLengthandSectorArea} link='https://drive.google.com/file/d/11lr14t1Jl7h9UYi_9bMp2Hz9XvxeGuK7/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Arcs and Central Angles' img={ArcsandCentralAngles} link='https://drive.google.com/file/d/1w0QlbXcXLB3rNnt9LEn969l5N943P7cu/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inscribed Angles' img={InscribedAngles} link='https://drive.google.com/file/d/12D9KlnnhdRSY8pn6GepyKO3f0MknMyiU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Circles and Angles' img={CirclesandAngles} link='https://drive.google.com/file/d/1hs8kynewogJoWjm0Gbm8TJh1aX2VzNm8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Circles and Angles 2' img={CirclesandAngles2} link='https://drive.google.com/file/d/1aiRlpjboft5Th8p8L-EGQdGvdgdAL_l3/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Circles Power Theorem' img={CirclesPowerTheorem} link='https://drive.google.com/file/d/1eYQdQqhvZdKrBZwMgNs8CclUSokRWN87/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inscribed and Circumscribed Shapes' img={InscribedandCircumscribedShapes} link='https://drive.google.com/file/d/1zvWrDDhH5ywweILeO4OjoTZCacTrMwwk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Tangents to Circles' img={TangentstoCircles} link='https://drive.google.com/file/d/12fPvSNgtFtEa94ASBudX2Td-jRQ92NBM/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Circles;