import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
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

        <div className='cards'>


        <File title='Parent Functions' img={ParentFunctions} link='https://drive.google.com/file/d/13s_qbsT7nE0A5JFs7k9v129EkJpNBKa8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Transformations of Graphs' img={TransformationsofGraphs} link='https://drive.google.com/file/d/1XhTAKRgA1MHNAIf9dXsHUl8E9kM1iV1c/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Transformations Review' img={TransformationsReview} link='https://drive.google.com/file/d/1RCE5A6sw41pHfdSIZOi2YwnXdV2-gmhB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Square Root Equations' img={SquareRootEquations} link='https://drive.google.com/file/d/1zkf1BpmwErWnjqQqpupiyxNllmTpxEYZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Square Root Equations 2' img={SquareRootEquations2} link='https://drive.google.com/file/d/10d6MKVtQROjcVkYUkDvv6oyZD_9IlIQQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Square Root Equations 3' img={SquareRootEquations3} link='https://drive.google.com/file/d/16xpkkOegh8oPk7RmkSzZhkdzz40W40Wu/view?usp=sharing' target='_blank' body = 'Download PDF' />  </div>

    </div>
    
)

export default TransformationsFunctions;