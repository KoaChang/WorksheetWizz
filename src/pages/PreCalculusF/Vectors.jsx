import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {VectorDotProduct,VectorWordProblems,VectorsReview,VectorWordProblems2,VectorsIntroduction,VectorAddition,VectorOperations,VectorsComponentForm} from "./Preview"

const Vectors = () => (

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

        <File title='Vectors Introduction' img={VectorsIntroduction} link='https://drive.google.com/file/d/1yzpRB2BtsDJ_UHbsVUoLlSb9xOUZoqnj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vector Addition' img={VectorAddition} link='https://drive.google.com/file/d/1c3tVsd7o-9AMc9tTJaWEJbtKfdX35TbH/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vector Operations' img={VectorOperations} link='https://drive.google.com/file/d/1IK5k07QdTEj45K0TJeKbyPz5SmTeaSEO/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vectors Component Form' img={VectorsComponentForm} link='https://drive.google.com/file/d/1sWOWw-lP6kfmx2MDB_6M1BQ_EZmMPlla/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vector Dot Product' img={VectorDotProduct} link='https://drive.google.com/file/d/1CJNOVxQs_qHMJ3y6lo3wNX6gm7ih6PIO/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vector Word Problems' img={VectorWordProblems} link='https://drive.google.com/file/d/1pkRsCJNFtDLhtqSfojdz2k_OL9fv_5Li/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vector Word Problems 2' img={VectorWordProblems2} link='https://drive.google.com/file/d/1Hs_NBgA9U12AJuaIWqS0a9ooeV9NvNZc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Vectors Review' img={VectorsReview} link='https://drive.google.com/file/d/1AUMNREw1kv5-VhhPSVAccqeV-you-wtK/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Vectors;