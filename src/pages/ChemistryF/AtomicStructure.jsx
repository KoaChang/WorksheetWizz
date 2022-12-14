import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {AtomicStructureF,SigFigs,DimensionalAnalysis,PeriodicTrends} from "./Preview"
import { SketchignFunctions } from "../Calculus1F/Preview";


const AtomicStructure = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/chemistry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
        <File title='Dimensional Analysis' img={DimensionalAnalysis} link='https://drive.google.com/file/d/1lMuW0ljXqiD_AdG_jkRNDC06YVsrGU5r/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Atomic Structure' img={AtomicStructureF} link='https://drive.google.com/file/d/1Ix4dFQrC15dEdiS_XgswVQvo-kDzrZuo/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Periodic Trends' img={PeriodicTrends} link='https://drive.google.com/file/d/14y-t22w0hdLz9sNIgam1J6UNRWAZ3ziE/view?usp=sharing' target='_blank' body = 'Download PDF' />
            <File title='Significant Figures'  img={SigFigs} body='Download PDF' link='https://drive.google.com/file/d/1yPS0OskS7LoFA8GzytDZH-YJciHSnMR9/view?usp=sharing' target='_blank'/>
</div>

    </div>
    
)

export default AtomicStructure;