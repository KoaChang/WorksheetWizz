import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {TriangleSimilarityProofs2,SimilarTriangles,TriangleCongruenceReview2,TriangleSimilarityProofs,ProvingCongruence,TriangleCongruencepractice,TriangleCongruenceReview} from "./Preview"

const TriangleCongruence = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/geometry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>


        <File title='Proving Congruence' img={ProvingCongruence} link='https://drive.google.com/file/d/1J5g0Ko8IzesS4N3oPzjNO_XJCD-s448Z/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Triangle Congruence practice' img={TriangleCongruencepractice} link='https://drive.google.com/file/d/1X8mb7Thx45kh7ZHTu6gdx5ThUh9x-CPn/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Triangle Congruence Review' img={TriangleCongruenceReview} link='https://drive.google.com/file/d/1FB13CF7w8qZ-SyK4FQ5LLk9bYULAdB2b/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Triangle Congruence Review 2' img={TriangleCongruenceReview2} link='https://drive.google.com/file/d/1vy9Evf0QA_yqP0r-i5nGQk5YgBp19tPi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Similar Triangles' img={SimilarTriangles} link='https://drive.google.com/file/d/1mwb0JCUjWy8POglpQwXzGpkqlXLpAIKi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Triangle Similarity Proofs' img={TriangleSimilarityProofs} link='https://drive.google.com/file/d/11twECzVKUldvWTfIuODM_8LMQ8x2-QL7/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Triangle Similarity Proofs 2' img={TriangleSimilarityProofs2} link='https://drive.google.com/file/d/11twECzVKUldvWTfIuODM_8LMQ8x2-QL7/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>


    </div>
    
)

export default TriangleCongruence;