import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {IntervalsofIncreaseandDecrease,SketchignFunctions,OptimizationWordProblems,AnalysisofFunctionsReview,FirstDerivativeTest,CriticalPoints,AbsoluteExtrema,ExtremaReview,ConcavityandPointsofInflection2,MeanValueTheorem,AnalysisandSketchingFunctionsReview,ConcavityandPointsofInflection,SecondDerivativeTest,RelativeExtrema,MeanValueTheoremReview,ExtremeValueTheorem} from "./Preview"

const DiffToAnalyze = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/calculus1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

<File title='Intervals of Increase and Decrease' img={IntervalsofIncreaseandDecrease} link='https://drive.google.com/file/d/1dQJ5or0sO1QzvVDACJSpO1jpzdW0DYg4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Critical Points' img={CriticalPoints} link='https://drive.google.com/file/d/1Iz4qAAA3dYwyxpkucCuGTl1NNT9_wmbQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Extreme Value Theorem' img={ExtremaReview} link='https://drive.google.com/file/d/102sCs8ERznXnAO8dYALKYKHiooMWA9HC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Concavity and Points of Inflection' img={ConcavityandPointsofInflection} link='https://drive.google.com/file/d/17cFf6f8X0DCv1YEtXIe7atXROyZNtBn9/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Concavity and Points of Inflection 2' img={ConcavityandPointsofInflection2} link='https://drive.google.com/file/d/1IG_PxW9a-UpWlpLns6YtZ7-Nd7D9yeGT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='First Derivative Test' img={FirstDerivativeTest} link='https://drive.google.com/file/d/1ceIPoA5hOXcstDoGfGSH_wAx189jSlAI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Second Derivative Test' img={SecondDerivativeTest} link='https://drive.google.com/file/d/1Hm3zsBw_-xwqxV7zVbwnTldz6JS1sPPt/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Relative Extrema' img={RelativeExtrema} link='https://drive.google.com/file/d/1O-a7mFSuS_ZSHjsWoQVrQXDqhryJcdwV/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Absolute Extrema' img={AbsoluteExtrema} link='https://drive.google.com/file/d/11eAgl4r6qNfFKMZAqDTT0Z_jWQkY0lwJ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Extrema Review' img={ExtremaReview} link='https://drive.google.com/file/d/13JiW6ZPVPZGRiUfkKlErQVZIcKLEb1s9/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Mean Value Theorem' img={MeanValueTheorem} link='https://drive.google.com/file/d/18xyZ90t-z7PNW1UtRmsyIyhF8mN6SKq4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Mean Value Theorem Review' img={MeanValueTheoremReview} link='https://drive.google.com/file/d/18xyZ90t-z7PNW1UtRmsyIyhF8mN6SKq4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sketching Functions' img={SketchignFunctions} link='https://drive.google.com/file/d/1MKqrk4P2GFyt7OvnizjrDtUGMqfez-Vl/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Analysis of Functions Review' img={AnalysisofFunctionsReview} link='https://drive.google.com/file/d/1OOuorpFm8oEj1bJdn7eUi7yqEg-UbKyF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Analysis and Sketching Functions Review' img={AnalysisandSketchingFunctionsReview} link='https://drive.google.com/file/d/1fUs9leSub-ybVPtRxfc-A7fUMUVbYCbt/view?usp=sharing' target='_blank' body = 'Download PDF' />

<File title='Optimization Word Problems' img={OptimizationWordProblems} link='https://drive.google.com/file/d/1PtykvAulG9tmpYWY8gzCtSf1lCKeIFo_/view?usp=sharing' target='_blank' body = 'Download PDF' />    

        </div>

    </div>
    
)

export default DiffToAnalyze;