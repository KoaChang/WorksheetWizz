import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {QuadrilateralsReview,PropertiesofRectangles,IsoscelesTrapezoids,AreaofQuadrilaterals,PropertiesofParallelograms,PropertiesofRhombus2,ClassifyingParallelograms,PropertiesofKites,KitesandTrapezoids,TrapezoidsReview,PropertiesofTrapezoids,PropertiesofRhombus} from "./Preview"


const Quadrilaterals = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Classifying Parallelograms' img={ClassifyingParallelograms} link='https://drive.google.com/file/d/1U_NPfp7j9lsxK_Mu0KJ9J6-9rhFkLoII/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Parallelograms' img={PropertiesofParallelograms} link='https://drive.google.com/file/d/1r_XE0YCxSYFcnD4cAgHQnyd332mtI-mf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Rectangles' img={PropertiesofRectangles} link='https://drive.google.com/file/d/1Xl40glJzQWEk2WWPnCKpH8JZGTyVGOka/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Rhombus' img={PropertiesofRhombus} link='https://drive.google.com/file/d/1hiBRnO9akj02kmY1Mi5FzocrAV5TAXH4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Rhombus 2' img={PropertiesofRhombus2} link='https://drive.google.com/file/d/1ysIZnkl7jBI8MWuJBvQxdCiO3PQXIXfj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Kites' img={PropertiesofKites} link='https://drive.google.com/file/d/1JeygMHfFQauB_OFlXdiXufSJxV3dAW1F/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Trapezoids' img={PropertiesofTrapezoids} link='https://drive.google.com/file/d/13w9kgnk5qMhmO1jR81tyQaTySwmRw1w_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Isosceles Trapezoids' img={IsoscelesTrapezoids} link='https://drive.google.com/file/d/1Ik5eR8TwBFuwrJQ7y2lk144LJFuEpf0D/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Kites and Trapezoids' img={KitesandTrapezoids} link='https://drive.google.com/file/d/1HCyj30IoO0cfFE2mpEW-gx_LHVNuv-Kk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trapezoids Review' img={TrapezoidsReview} link='https://drive.google.com/file/d/1BiPpf7mUmXIJOu5AH_ZSObqHO3bMyutF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadrilaterals Review' img={QuadrilateralsReview} link='https://drive.google.com/file/d/1L1B48RN7CianRaEv1mHRhd-y5ql52YMX/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Quadrilaterals;