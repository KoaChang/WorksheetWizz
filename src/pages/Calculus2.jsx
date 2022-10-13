import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'

const Calculus2 = () => (

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
            <Folder title='Differential Equations'  img={folder} body='Open Folder' link='./diffeq' target=''/>
            <Folder title='Parametric and Polar Coordinate Systemns'img={folder} body='Open Folder' link='./parametricpolar' target=''/>
            <Folder title='Infinite Sequence and Series'  img={folder} body='Open Folder' link='./infiniteseries' target=''/>
            <Folder title='FRQ Practice'   img={folder} body='Open Folder' link='./frq' target=''/>
            <Folder title='AP Exams'   img={folder} body='Open Folder' link='./apexam' target=''/>
            

        </div>

    </div>
    
)

export default Calculus2;

