import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {SimplifyingRadicals,DividingRadicals,SimplifyingRadicalsReview,MultiplyingRadicalExpressions,AddingSubtractingRadicals} from "./Preview"

const Radicals = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
<File title='Simplifying Radicals' img={SimplifyingRadicals} link='https://drive.google.com/file/d/1sVG5q5DkLRzaDaffo-BqJkYPuTAnOQRi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Simplifying Radicals Review' img={SimplifyingRadicalsReview} link='https://drive.google.com/file/d/18iw3e2sW6EQGhfjHB84UhdkHhU4rvjmg/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Adding and Subtracting Radicals'     img={AddingSubtractingRadicals} body='Download PDF' link='https://drive.google.com/file/d/19MWFr29iUu0OX6HLX4tr9Y0qPoMLB1T8/view?usp=sharing' target='_blank'/>
            <File title='Multiplying Radicals'     img={MultiplyingRadicalExpressions} body='Download PDF' link='https://drive.google.com/file/d/1wVmos3VNF5raL1emb4a3QkZ2i03hRzzL/view?usp=sharing' target='_blank'/>
<File title='Dividing Radicals' img={DividingRadicals} link='https://drive.google.com/file/d/1LeD4dnSKszki28WC-mjTK97iF3ySn2QC/view?usp=sharing' target='_blank' body = 'Download PDF' />
       
        </div>

    </div>
    
)

export default Radicals;