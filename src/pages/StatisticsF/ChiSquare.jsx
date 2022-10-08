import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {ChiSquareHomogeneityTest,ChiSquareTestsReview,ChiSquareGoodnessofFitandIndependence,ChiSqureGoodnessofFit} from "./Preview"

const ChiSquare = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        <File title='Chi Square Homogeneity Test' img={ChiSquareHomogeneityTest} link='https://drive.google.com/file/d/1wLlNGMrQFNiZj9DJT_XGsMP0HL0wG7vx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Chi Square Goodness of Fit and Independence' img={ChiSquareGoodnessofFitandIndependence} link='https://drive.google.com/file/d/1cMfnxnKO-aA3uyMKkY7t1l5u-3NPkS6I/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Chi Squre Goodness of Fit' img={ChiSqureGoodnessofFit} link='https://drive.google.com/file/d/1gWtZcdpavrxxDojblp6pZyPTyNEM6krW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Chi Square Tests Review' img={ChiSquareTestsReview} link='https://drive.google.com/file/d/1KJKXg2w1jwwG3JWivpGkcuFDitZgk5v5/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default ChiSquare;