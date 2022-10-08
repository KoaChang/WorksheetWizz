import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import { UnitCircle,UnitCircleF,DegreestoRadians,AngleSumandDifferenceIdentities,DoubleHalfAngleIdentities,ProducttoSumIdentities,GraphingTrigIntro,GraphingTrigFunctions,GraphingTrigFunctions2,
    TrigEquations,TrigEquations2,TrigEquations3,InverseTrigW,TrigIdentities,TrigIdentities2,TrigIdentities3,TrigReview,TrigWordProblems} from "./Preview";

const TrigonometryAlg = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Unit Circle Review'  img={UnitCircle} body='Download PDF' link='https://drive.google.com/file/d/1v2UaLeYx1vgYSeVPrLpjuXaSBunslePR/view?usp=sharing' target='_blank'/>
            <File title='Unit Circle'   img={UnitCircleF} body='Download PDF' link='https://drive.google.com/file/d/1Uu9HQ3sEf7yapqdASSVANzP61qd9ln8c/view?usp=sharing' target='_blank'/>
            <File title='Degrees and Radians Conversion' img={DegreestoRadians} body='Download PDF' link='https://drive.google.com/file/d/1W4FWAQOGaLZNW0pydNsxF94X633uF5JG/view?usp=sharing' target='_blank'/>
            <File title='Angle Sum and Difference Identities' img={AngleSumandDifferenceIdentities} link='https://drive.google.com/file/d/1lcrTur5iDzz0dd_uK-kwnNpR9EqYcrdD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Product to Sum Identities' img={ProducttoSumIdentities} link='https://drive.google.com/file/d/1EHWpiBpg_2suJ82ZCCCXfGBarp9HOItk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Trig Intro' img={GraphingTrigIntro} link='https://drive.google.com/file/d/1nP_OgUcD6rEnDraneH4_yz849Kf7HvyC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Trig Functions 2' img={GraphingTrigFunctions} link='https://drive.google.com/file/d/1mAH43wnP2qweU1uaNStT9FpwpRbr1wFd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Equations' img={TrigEquations} link='https://drive.google.com/file/d/1whfKueir5DObOG5FUoBQDMB8rApzgdsZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Equations 2' img={TrigEquations2} link='https://drive.google.com/file/d/1wFGErNAShh-_7TJ6zYWPhRGj39oe_aYE/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Equations 3' img={TrigEquations3} link='https://drive.google.com/file/d/1NzX2uqdBLcyH7fUCpR3hb_ZZAYs195T1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inverse Trig' img={InverseTrigW} link='https://drive.google.com/file/d/1B9c0xOFsEAo5rnNocDAxVfFqv7FlyGfk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Identities' img={TrigIdentities} link='https://drive.google.com/file/d/1cuW_4dCoKXgIZjGY0UOUl1PqL6b9jqnA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Identities 2' img={TrigIdentities2} link='https://drive.google.com/file/d/1lD6vjdFHTCnfRVTT5fjykzibZxfjak_H/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Identities 3' img={TrigIdentities3} link='https://drive.google.com/file/d/1NzX2uqdBLcyH7fUCpR3hb_ZZAYs195T1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Review' img={TrigReview} link='https://drive.google.com/file/d/1F0V0LclT8zX5-31vjWPVQVEBkx-JXxNo/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Word Problems' img={TrigWordProblems} link='https://drive.google.com/file/d/1IkSft0ZgGYCYNGyMHXpWJs9W1_TFclC8/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default TrigonometryAlg;