import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import { QuadraticSystems, QuadraticSystems2, QuadraticSystems3, QuadraticSystemsReview, SquareRootEquations, SquareRootEquations2, SquareRootEquations3 } from "./Preview";
// import {QuadraticSystems,SquareRootEquations2,SquareRootEquations3,SquareRootEquations,QuadraticSystemsReview,QuadraticSystems3,QuadraticSystems2} from "./Preview"

// import {QuadraticSystems,QuadraticSystems2,QuadraticSystems3,QuadraticSystemsReview,SquareRootEquations,SquareRootEquations2,SquareRootEquations3} from './Preview'

const SolvingEquations = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Square Root Equations'     img={SquareRootEquations} body='Download PDF' link='https://drive.google.com/file/d/1zkf1BpmwErWnjqQqpupiyxNllmTpxEYZ/view?usp=sharing' target='_blank'/>
            <File title='Square Root Equations 2'     img={SquareRootEquations2} body='Download PDF' link='https://drive.google.com/file/d/10d6MKVtQROjcVkYUkDvv6oyZD_9IlIQQ/view?usp=sharing' target='_blank'/>
            <File title='Square Root Equations 3'     img={SquareRootEquations3} body='Download PDF' link='https://drive.google.com/file/d/16xpkkOegh8oPk7RmkSzZhkdzz40W40Wu/view?usp=sharing' target='_blank'/>
<File title='Quadratic Systems' img={QuadraticSystems} link='https://drive.google.com/file/d/1796XKy9obWu4a5xnjqDVeUm6bJfSem58/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Systems 2' img={QuadraticSystems2} link='https://drive.google.com/file/d/1rKURg2hAE2UrhN_pN4-fp9zP7Liz2WD1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Systems 3' img={QuadraticSystems3} link='https://drive.google.com/file/d/1tLdcBonyKqOCbHquNdWnCekW1Ydx1o56/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Systems Review' img={QuadraticSystemsReview} link='https://drive.google.com/file/d/1tqg4Bqqrta458yIKOhbtWKjstl6INM0A/view?usp=sharing' target='_blank' body = 'Download PDF' />
       
       </div>

    </div>
    
)

export default SolvingEquations;