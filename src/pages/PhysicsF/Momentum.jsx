import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {ConservationofMomentum2,CollisionPracticeProblems,Impulse,ConservationofMomentum,ElasticandInelasticCollisions} from "./Preview"


const Momentum = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/physics'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>


        <File title='Conservation of Momentum' img={ConservationofMomentum} link='https://drive.google.com/file/d/1NeBoYUIoSbLpl9Aiy11LSoU9Oi2ALATa/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conservation of Momentum 2' img={ConservationofMomentum2} link='https://drive.google.com/file/d/1gNyUwYAKRkY7cy1roW9MinMu9_5Z7a2f/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Collision Practice Problems' img={CollisionPracticeProblems} link='https://drive.google.com/file/d/1SohRfnrQRo5w1V2ibgoc0wE-oUA_UD15/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Impulse' img={Impulse} link='https://drive.google.com/file/d/1mQxF8eDzde8kD1w-stzlv1m879rU9b6j/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Elastic and Inelastic Collisions' img={ElasticandInelasticCollisions} link='https://drive.google.com/file/d/11duR8Lm7RivgsKmpN-f55Djq-10j4N-W/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default Momentum;