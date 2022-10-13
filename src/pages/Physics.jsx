import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'

const Physics = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            <Folder title='AP Exams'    img={folder} body='Open Folder' link='./apexam' target=''/>
            <Folder title='Circular Motion and Gravitation'  img={folder} body='Open Folder' link='./circularmotion' target=''/>
            <Folder title='Dynamics'  img={folder} body='Open Folder' link='./dynamics' target=''/>
            <Folder title='Energy'   img={folder} body='Open Folder' link='./energy' target=''/>
            <Folder title='Kinematics'   img={folder} body='Open Folder' link='./kinematics' target=''/>
            <Folder title='Momentum'  img={folder} body='Open Folder' link='./momentum' target=''/>
            <Folder title='Simple Harmonic Motion' img={folder} body='Open Folder' link='./smh' target=''/>
            <Folder title='Torque and Rotational Momentum' img={folder} body='Open Folder' link='./torque' target=''/>
            
        </div>

    </div>
    
)

export default Physics;

