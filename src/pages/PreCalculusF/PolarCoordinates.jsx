import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {PolartoRectangularEquations,GraphsofPolarEqautions,PolarCoordinatesF,PolarCoordinatesReview,PolarCoordinatesReview2,PolartoRectangular} from "./Preview"

const PolarCoordinates = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/precalculus'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
          
<File title='Polar Coordinates' img={PolarCoordinatesF} link='https://drive.google.com/file/d/1C_1njJXR6ec9CSRV3sow4HwN9QpR9G_0/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polar Coordinates Review' img={PolarCoordinatesReview} link='https://drive.google.com/file/d/12xdqR2xPR5QQeEhn29hCD5t7I42SZYEf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polar Coordinates Review 2' img={PolarCoordinatesReview2} link='https://drive.google.com/file/d/1_TYZ8-67U87sBFfpo0MftI65eti1fFCb/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polar to Rectangular' img={PolartoRectangular} link='https://drive.google.com/file/d/13B3U1PN9_g_m66scFoT4XLCrDflcjbRB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polar to Rectangular Equations' img={PolartoRectangularEquations} link='https://drive.google.com/file/d/1wd3LV1_9uiOiiOecG8d6U1O7GEcPW55D/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default PolarCoordinates;