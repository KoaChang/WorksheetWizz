import styles from "../style";
import {MenuBar,Folder} from '../components';
import {pdf,folder,folder2,one_step} from '../assets'
import "./Product.css"

const Calculus2 = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <Folder title='Differential Equations'  img={folder} body='Open Folder' link='./diffeq' target=''/>
            <Folder title='Parametric and Polar Coordinate Systemns'img={folder} body='Open Folder' link='./parametricpolar' target=''/>
            <Folder title='Infinite Sequence and Series'  img={folder} body='Open Folder' link='./infiniteseries' target=''/>
            <Folder title='FRQ Practice'   img={folder} body='Open Folder' link='./frq' target=''/>
            <Folder title='AP Exams'   img={folder} body='Open Folder' link='./apexam' target=''/>
            

        </div>

    </div>
    
)

export default Calculus2;

