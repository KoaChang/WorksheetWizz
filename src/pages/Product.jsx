import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import { Link } from 'react-router-dom';
import "./Product.css"



const Product = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
                
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to='/'>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            <Folder title='Pre-Algebra'  img={folder} body='Open Folder' link='./prealgebra'/>
            <Folder title='Geometry' img={folder} body='Open Folder' link='./geometry'/>   
            <Folder title='Algebra1' img={folder} body='Open Folder' link='./algebra1'/>
            <Folder title='Algebra2' img={folder} body='Open Folder' link='./algebra2'/>
            <Folder title='Pre-Calculus' img={folder} body='Open Folder' link='./precalculus'/>
            <Folder title='Calculus1' img={folder} body='Open Folder' link='./calculus1'/>
            <Folder title='Calculus2' img={folder} body='Open Folder' link='./calculus2'/>
            <Folder title='Statistics' img={folder} body='Open Folder' link='./statistics'/>
            <Folder title='Physics' img={folder} body='Open Folder' link='./physics'/>
            <Folder title='Chemistry' img={folder} body='Open Folder' link='./chemistry'/>
            <Folder title='SAT Practice Tests' img={folder} body='Open Folder' link='./sat'/>
        </div>

    </div>
    
)

export default Product;