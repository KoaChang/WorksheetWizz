import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import { GraphingCubeRoots, GraphingCubeRoots2, GraphingRadicals, GraphingRadicals2, RadicalsReview } from "./Preview";
// import {GraphingCubeRoots,RadicalsReview,GraphingRadicals,GraphingCubeRoots2,GraphingRadicals2} from "./Preview"

// import { GraphingCubeRoots,GraphingCubeRoots2,GraphingRadicals,GraphingRadicals2,RadicalsReview } from "./Preview";

const RadicalFunctions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            
<File title='Graphing Radicals' img={GraphingRadicals} link='https://drive.google.com/file/d/1Dk3rrimYx5h52i4Tq0Nk_gHZYukXvRXE/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Cube Roots' img={GraphingCubeRoots} link='https://drive.google.com/file/d/1i3d5OpaimuuZ7YRipqw7VGM5OdXKEmGT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Radicals Review' img={RadicalsReview} link='https://drive.google.com/file/d/1tOhXR0JvQ-k2TRuup4u782c5Kh2i6YIP/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>
        

    </div>
    
)

export default RadicalFunctions;