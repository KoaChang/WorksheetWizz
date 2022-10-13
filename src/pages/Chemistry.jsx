import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'



const Chemistry = () => (

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
            <Folder title='Atomic Structure and Properties'  img={folder} body='Open Folder' link='./atomicstructure' target=''/>
            <Folder title='Molecular and Ionic Properties'   img={folder} body='Open Folder' link='./molecularionic' target=''/>
            <Folder title='Intermolecular Forces and Properties'   img={folder} body='Open Folder' link='./intermolecular' target=''/>
            <Folder title='Chemical Reactions'   img={folder} body='Open Folder' link='./chemicalreaction' target=''/>
            <Folder title='Kinetics'   img={folder} body='Open Folder' link='./kinetics' target=''/>
            <Folder title='Equalibrium'  img={folder} body='Open Folder' link='./equalibrium' target=''/>
            <Folder title='Acids and Bases'  img={folder} body='Open Folder' link='./acidbase' target=''/>
            <Folder title='Thermodynamics'   img={folder} body='Open Folder' link='./thermodynamics' target=''/>
            <Folder title='AP Exams' img={folder} body='Open Folder' link='./apexam' target=''/>
            
        </div>

    </div>
    
)

export default Chemistry;

