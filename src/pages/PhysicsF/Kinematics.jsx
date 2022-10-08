import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {KinematicsEquations,KinematicsReview,ProjectileMotion} from "./Preview"


const Kinematics = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>


        <File title='Kinematics Equations' img={KinematicsEquations} link='https://drive.google.com/file/d/1CxhuTHX8ohr2MMWNxvu5k8B7UBKLfwUn/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Kinematics Review' img={KinematicsReview} link='https://drive.google.com/file/d/1XpI3pXL-JVI6tK5TOwL42Yu4ufeYpmzD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Projectile Motion' img={ProjectileMotion} link='https://drive.google.com/file/d/13AXvmdFuk5LRWcZG7SFYG-qyGuYi4x_i/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>
    </div>
    
)

export default Kinematics;