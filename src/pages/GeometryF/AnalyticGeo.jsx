import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {PointsofConcurency,CoordinateGeometryandtheCentroid,CoordinateGeometryReview,TheMidpointFormula,TheDistanceFormula} from "./Preview"

const AnalyticGeo = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

            <File title='The Distance Formula' img={TheDistanceFormula} link='https://drive.google.com/file/d/1RxtsrgABsfrBeGCdkPg1fbTKd6NTflyq/view?usp=sharing' target='_blank' body = 'Download PDF' />
            <File title='The Midpoint Fornula' img={TheMidpointFormula} body='Download PDF' link='https://drive.google.com/file/d/1dHUCJ5wuR3zfgnB-_j1JF3Kf1eqH4-Qf/view?usp=sharing' target='_blank'/>
            <File title='Points of Concurrency' img={PointsofConcurency} body='Download PDF' link='https://drive.google.com/file/d/1lPJKrEM7HH1O_8C-5VUjSm8CInsR8rh5/view?usp=sharing' target='_blank'/>
<File title='Coordinate Geometry Review' img={CoordinateGeometryReview} link='https://drive.google.com/file/d/1EQqi4RR_W6MHARqxnfJJFRZGe2GGJ2OB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Coordinate Geometry and the Centroid' img={CoordinateGeometryandtheCentroid} link='https://drive.google.com/file/d/1y6WiocLwVWjLpVSp7Nd-x-BrOOcipIS2/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>
    </div>
    
)

export default AnalyticGeo;