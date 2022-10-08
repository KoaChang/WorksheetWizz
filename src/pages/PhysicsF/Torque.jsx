import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {AngularMomentum,AngularImpulse,RotationalKinematics,TorqueF} from "./Preview"


const Torque = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Angular Momentum' img={AngularMomentum} link='https://drive.google.com/file/d/1hm5xPGZd9iwaWDViATU0IfBeu6VEfWUw/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Angular Impulse' img={AngularImpulse} link='https://drive.google.com/file/d/1hmd4d186pwWqWCyKmjPMIYresOlHyOil/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rotational Kinematics' img={RotationalKinematics} link='https://drive.google.com/file/d/1uLjufCPH2eCkKsO-JtZBVQZprZkbA6AL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Torque' img={TorqueF} link='https://drive.google.com/file/d/1vkIkLXM34B0F-4CiNhqQItjwIWD9d6Ea/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default Torque;