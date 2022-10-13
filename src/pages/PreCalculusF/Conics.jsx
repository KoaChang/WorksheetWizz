import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {Hyperbolas,ClassifyingConicSections,ConicSectionsReview,Circles,ConicSectionsWordProblems,Ellipses,ConicSectionsReview2,Parabolas} from "./Preview"

const Conics = () => (

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

        <File title='Circles' img={Circles} link='https://drive.google.com/file/d/1KJNZtOeVipm6ApMZYChc3AQ4qMm4OE9Y/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Ellipses' img={Ellipses} link='https://drive.google.com/file/d/1iDmPYqaz_6IeYKS0k1GF92-8nIDICoVG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Hyperbolas' img={Hyperbolas} link='https://drive.google.com/file/d/1NGkyHSEjSB1CR6Njq9eKcKHrwma3Q1rl/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parabolas' img={Parabolas} link='https://drive.google.com/file/d/1Az544HN3Dbcd1Geckm6ClMijQ3apkCY1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Classifying Conic Sections' img={ClassifyingConicSections} link='https://drive.google.com/file/d/1qpfsx7VVwNqgSgDDsNioHU7-j7CjUJq9/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conic Sections Review' img={ConicSectionsReview} link='https://drive.google.com/file/d/1CIWQmq_uW3ALGsNpXMxWrdTiVXk4b_yy/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conic Sections Review 2' img={ConicSectionsReview2} link='https://drive.google.com/file/d/1sixfvXvwfrGgb_qPXMgqFDAMoRVjbSUC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conic Sections Word Problems' img={ConicSectionsWordProblems} link='https://drive.google.com/file/d/1AhRTl5rUVidJ4XqNsdOPHuPBa2NS5ulu/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Conics;