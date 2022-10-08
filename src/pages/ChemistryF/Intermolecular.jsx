import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {IdentifyingIntermolecularForces,TypesofIntermolecularForces,IntermolecularForcesReview} from "./Preview"

const Intermolecular = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        <File title='Identifying Intermolecular Forces' img={IdentifyingIntermolecularForces} link='https://drive.google.com/file/d/1cMcnhfHH2k0ilw4Mi6-UbIZwwnc71NRx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Types of Intermolecular Forces' img={TypesofIntermolecularForces} link='https://drive.google.com/file/d/150i8jjjn6a1BVyTOziaXWVW7mBAeLT8n/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Intermolecular Forces Review' img={IntermolecularForcesReview} link='https://drive.google.com/file/d/1WgeXfz7yZnDhWizCz7MM41ymfJ4lxR3J/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default Intermolecular;