import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import { ParentFunctions, ParentFunctions2, TransformationsofGraphs, TransformationsReview, TransformationsWorksheet3, TransformationWorksheet2, TransformingFunctionsWorksheet } from "./Preview";
// import {ParentFunctions,TransformationsofGraphs,TransformationsReview,ParentFunctions2,TransformationWorksheet2,TransformationsWorksheet3,TransformingFunctionsWorksheet} from "./Preview"

// import {ParentFunctions,ParentFunctions2,TransformationWorksheet2,TransformationsofGraphs,TransformationsReview,TransformationsWorksheet3, TransformingFunctionsWorksheet} from './Preview'

const TransformationsFunctions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra2'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>


        <File title='Parent Functions' img={ParentFunctions} link='https://drive.google.com/file/d/13s_qbsT7nE0A5JFs7k9v129EkJpNBKa8/view?usp=sharing' target='_blank' body = 'Download PDF' />
        <File title='Parent Functions' img={ParentFunctions2} link='https://drive.google.com/file/d/15wGGUBpyi7A6VZbjq17FcH82lQfs5FWD/view?usp=sharing' target='_blank' body = 'Download PDF' />
        <File title='Parent Functions' img={TransformationsWorksheet3} link='https://drive.google.com/file/d/104d6g-TOsSCVob3-HbdDBxcKQrD9x8Kd/view?usp=sharing' target='_blank' body = 'Download PDF' />
        <File title='Parent Functions' img={TransformationWorksheet2} link='https://drive.google.com/file/d/1xX-vS8i-eJOMzv3oR1g-OuUCAAvN2RwO/view?usp=sharing' target='_blank' body = 'Download PDF' />
        <File title='Parent Functions' img={TransformingFunctionsWorksheet} link='https://drive.google.com/file/d/1Jq1PhyBDT6r7RT1_pPyM4xTKZ0RWp-au/view?usp=sharing' target='_blank' body = 'Download PDF' />

<File title='Transformations of Graphs' img={TransformationsofGraphs} link='https://drive.google.com/file/d/1XhTAKRgA1MHNAIf9dXsHUl8E9kM1iV1c/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Transformations Review' img={TransformationsReview} link='https://drive.google.com/file/d/1RCE5A6sw41pHfdSIZOi2YwnXdV2-gmhB/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>
    
    </div>
    
)

export default TransformationsFunctions;