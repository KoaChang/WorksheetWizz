import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {Translations3,Translations2,TransformationsReview,TransformationsReview2,Dilations3,Dilations2,Rotations,Rotations2,Translations,Dilations,Reflections} from "./Preview"

const Transformations = () => (

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
        
<File title='Geometry Translations' img={Translations} link='https://drive.google.com/file/d/1Gm0HLD1l7kDGlJmiLq4o0wl2LwEFRh_m/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Translations 2' img={Translations2} link='https://drive.google.com/file/d/1Y7ktNHLVNyMJNjPnbnU1iZnMWzyuEGUS/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Translations 3' img={Translations3} link='https://drive.google.com/file/d/1o44mWEQTQvf5NNk6qLvmuLNbcLNKUcwj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Dilations' img={Dilations} link='https://drive.google.com/file/d/17oxC_s-JQXk6RtzzG7YFS_xN01Rr1vDT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Dilations 2' img={Dilations2} link='https://drive.google.com/file/d/1jbOCSXzUS9tShBvmxn3TzTUQP5brPW2s/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Dilations 3' img={Dilations3} link='https://drive.google.com/file/d/1-IHs8_dPVJB4_gOJ5cThmf9jUaDTcYFF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Rotations' img={Rotations} link='https://drive.google.com/file/d/1cCpwR1JTtyXck2RvWIWjFAFeLDlJdeQR/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometry Rotations 2' img={Rotations2} link='https://drive.google.com/file/d/1p8LdF3UIEi1tjAIlPpFzA3r1YHlqgXEt/view?usp=sharing' target='_blank' body = 'Download PDF' />  </div>

    </div>
    
)

export default Transformations;