import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'

const Geometry = () => (

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
            <Folder title='Points, Lines, Planes, Angles'   img={folder} body='Open Folder' link='./properties' target=''/>
            <Folder title='Transformations'   img={folder} body='Open Folder' link='./transformations' target=''/>
            <Folder title='Triangle Congruence and Similarity'  img={folder} body='Open Folder' link='./trianglecongruence' target=''/>
            <Folder title='Parts of A Triangle'  img={folder} body='Open Folder' link='./partstriangle' target=''/>
            <Folder title='Quadrilaterals'  img={folder} body='Open Folder' link='./quadrilaterals' target=''/>
            <Folder title='Trigonometry' img={folder} body='Open Folder' link='./trigonometry' target=''/>
            <Folder title='Circles' img={folder} body='Open Folder' link='./circles' target=''/>
            <Folder title='Analytic Geometry' img={folder} body='Open Folder' link='./analyticgeo' target=''/>
            <Folder title='Logic and Probability' img={folder} body='Open Folder' link='./logicprob' target=''/>
            <Folder title='Surface Area and Volume'  img={folder} body='Open Folder' link='./surfacearea' target=''/>
            
        </div>

    </div>
    
)

export default Geometry;

