import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {LawofSinesandCosinesWordProblems,LawofSinesCosines3,AngleofElevationandDepression,PythagoreanTheorem,LawofSinesandCosines2,RightTriangleTrigMissingSidesandAngles,SpecialRightTriangles,LawofSinesandCosinesWordProblems2,LawofSinesandCosines,RightTrangleTrigReview2,GeometricMean,RightTriangleTrigReview} from "./Preview"

const TrigonometryGeo = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
           

        <File title='Pythagorean Theorem' img={PythagoreanTheorem} link='https://drive.google.com/file/d/1UfEO-4aHTZupUPV5Os8okC8PAe1ToikQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Special Right Triangles' img={SpecialRightTriangles} link='https://drive.google.com/file/d/1A2vLsinYdOzxjCo41Zv0_Isoj88TPpMT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Right Triangle Trig Missing Sides and Angles' img={RightTriangleTrigMissingSidesandAngles} link='https://drive.google.com/file/d/1m4bjzx80BEkP67wohtJvjvYa8H7DfKA-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Right Triangle Trig Review' img={RightTriangleTrigReview} link='https://drive.google.com/file/d/1fN1FBQ4WhVpgnbeWftMQZp8cPs4ORWcs/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Mean' img={GeometricMean} link='https://drive.google.com/file/d/10TsEVWZ5o53E6k_Nk3R0YOSREmBASqr8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Angle of Elevation and Depression' img={AngleofElevationandDepression} link='https://drive.google.com/file/d/1zM0gDRPVxpBXYSMbcoQKBHeLqQbttN3W/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Law of Sines and Cosines' img={LawofSinesandCosines} link='https://drive.google.com/file/d/1x8xcLsu7w-e0eIshrllk3V5VQuqi6vo-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Law of Sines and Cosines 2' img={LawofSinesandCosines2} link='https://drive.google.com/file/d/1EVnjkuVXw-svxqr305aHJuliLcaoH0UX/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Law of Sines Cosines 3' img={LawofSinesCosines3} link='https://drive.google.com/file/d/1ouC1rn0TBBi-OoNkarcJGkySDQGplMGS/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Law of Sines and Cosines Word Problems' img={LawofSinesandCosinesWordProblems} link='https://drive.google.com/file/d/1eyD0ekFZc25j7cqybEH8x-7Mk3guQwpc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Law of Sines and Cosines Word Problems 2' img={LawofSinesandCosinesWordProblems2} link='https://drive.google.com/file/d/1OaIO1r4J7HmfRCqdIFo2vWWJLVvvgfhp/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default TrigonometryGeo;