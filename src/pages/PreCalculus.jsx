import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'



const PreCalculus = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to='/product'>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            <Folder title='Inverse Functions'  img={folder} body='Open Folder' link='./inverse' target=''/>
            <Folder title='Rational Functions'   img={folder} body='Open Folder' link='./rationalfunction' target=''/>
            <Folder title='Complex Plane'   img={folder} body='Open Folder' link='./complex' target=''/>
            <Folder title='Polar Coordinates' img={folder} body='Open Folder' link='./polarcoordinates' target=''/>
            <Folder title='Conic Sections' img={folder} body='Open Folder' link='./conics' target=''/>
            <Folder title='Matrices'  img={folder} body='Open Folder' link='./matrices' target=''/>
            <Folder title='Binomial Expansion'  img={folder} body='Open Folder' link='./binomialexpansion' target=''/>
            <Folder title='Vectors'    img={folder} body='Open Folder' link='./vectors' target=''/>
            <Folder title='Series'    img={folder} body='Open Folder' link='./series' target=''/>

           
        </div>

    </div>
    
)

export default PreCalculus;

