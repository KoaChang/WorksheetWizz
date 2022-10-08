import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {MaclaurinandTaylorSeries,PowerSeries,DifferentiatingandIntegratingTaylorSeries,LagrangeErrorBound,AbsoluteandConditionConvergence,ConvergenceofTaylorSeries,ConvergenceTests,MonotoneSequences,Sequences, InfiniteSeriesFile, ComparisonRatioRootTest} from "./Preview"

const InfiniteSeries = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Sequences' img={Sequences} link='https://drive.google.com/file/d/1J4DenrxBU_J0rSt7SU-X7O6ZcfUQ47Om/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Monotone Sequences' img={MonotoneSequences} link='https://drive.google.com/file/d/1xx8FyT-hvs_PwA7wO5OL4bTdMipn-yao/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Infinite Series' img={InfiniteSeriesFile} link='https://drive.google.com/file/d/13Chq1JFpjKd2wotkWxyILFhSsRsEVswI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Convergence Tests' img={ConvergenceTests} link='https://drive.google.com/file/d/1pwB-mNYcG7dw7Uo0hyEAe3Z5WIs-H4fp/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Absolute and Conditional Convergence' img={AbsoluteandConditionConvergence} link='https://drive.google.com/file/d/1diXiFTb2uK50OIcnVQypas6UXr7JWPKe/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Maclaurin and Taylor Series' img={MaclaurinandTaylorSeries} link='https://drive.google.com/file/d/11Wgs3ZzZAo_Ica-AJRnP6WYcPoxAJSdq/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Convergence of Taylor Series' img={ConvergenceofTaylorSeries} link='https://drive.google.com/file/d/1P7kRd99Oyuh2p__mDR2uLVbQX5zMEq5q/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Power Series' img={PowerSeries} link='https://drive.google.com/file/d/1P5KKhatxS1WaWSrO5BslOR7eoa46otY2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differentiating and Integrating Taylor Series' img={DifferentiatingandIntegratingTaylorSeries} link='https://drive.google.com/file/d/108WJKbOuwpXI5tuG1uw8OcILyvssl9Kh/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Lagrange Error Bound' img={LagrangeErrorBound} link='https://drive.google.com/file/d/1KBT9-9M4e1FdjUa27qcEBZ9wwZ-PqgR8/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default InfiniteSeries;