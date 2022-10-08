import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {NormalDistributions,CalculatingVarianceandStandardDeviation,MarginalandConditionalDistribution,CalculatingStandardDeviation,DisplayingCategoricalData,DisplayingQuantitativeData,CategoricalData,StemandLeafPlot,LocationinDistribution,HistogramandBoxWhiskerPlot,DisplayingQuantitativeData2,TransformingDataandDensityCurves,DisplayingandDescribingCategoricalData, HistogramBarGraphTable} from "./Preview"


const OneVars = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        

        <File title='Categorical Data' img={CategoricalData} link='https://drive.google.com/file/d/1oR16KQkwCX_D83QbeMV7djwQALpshPUl/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Displaying Categorical Data' img={DisplayingCategoricalData} link='https://drive.google.com/file/d/1kzikqZGK223AzNjcPyk62n7EAC4H8Gab/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Marginal and Conditional Distribution' img={MarginalandConditionalDistribution} link='https://drive.google.com/file/d/1XLpBgel94gyqDBRy9cGvgyv2GXPosSb5/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Displaying and Describing Categorical Data' img={DisplayingandDescribingCategoricalData} link='https://drive.google.com/file/d/184-hwz-v8Rj6t-VApoTaLcCDDPh-INEA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Displaying Quantitative Data' img={DisplayingQuantitativeData} link='https://drive.google.com/file/d/1aWCuCeiRjQnKv43H1r5b-sLOkJ1Rgsgy/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Displaying Quantitative Data 2' img={DisplayingQuantitativeData2} link='https://drive.google.com/file/d/14Pc7GeSIgSm6B_YELGArjW16ouiXRfAg/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Stem and Leaf Plot' img={StemandLeafPlot} link='https://drive.google.com/file/d/1ISl1PnV-COjSXFfaWGM9py6cIJPSAHkQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Histogram and Box Whisker Plot' img={HistogramandBoxWhiskerPlot} link='https://drive.google.com/file/d/1i0MF56cro6KCb_DODV7mT2k0qqm2VzGX/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Histogram, Bar Graph, Table' img={HistogramBarGraphTable} link='https://drive.google.com/file/d/1K4xFdLFDbQ_RoF4p3myapOQMxPGbN8tl/view?usp=sharing' target='_blank' body = 'Download PDF' />

<File title='Normal Distributions' img={NormalDistributions} link='https://drive.google.com/file/d/17P5_WEb0GIXVcooedDmpVsgyDdvDTEMP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Location in Distribution' img={LocationinDistribution} link='https://drive.google.com/file/d/19clgj3osXP74kmj_db2wNdcieUw9k3J3/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Transforming Data and Density Curves' img={TransformingDataandDensityCurves} link='https://drive.google.com/file/d/13SImPVkxy38-WwPMpOGtIXS1QjhXqeBp/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Calculating Variance and Standard Deviation' img={CalculatingVarianceandStandardDeviation} link='https://drive.google.com/file/d/1mDczRb-Ver0AJ8Ni-9rVjnSjtq3VmGJf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Calculating Standard Deviation' img={CalculatingStandardDeviation} link='https://drive.google.com/file/d/167ecOvU1roT2lkHtOe3eVRMAXcA-94yw/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default OneVars;