import styles from "../style";
import {MenuBar,Folder} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"



const PreCalculus = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

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

