import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'



const PreAlgebra = () => (

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
            <Folder title='Addition'    img={folder} body='Open Folder' link='./addition' target=''/>
            <Folder title='Subtraction'  img={folder} body='Open Folder' link='./subtraction' target=''/>   
            <Folder title='Multiplication' img={folder} body='Open Folder' link='./multiplication' target=''/>
            <Folder title='Division'  img={folder} body='Open Folder' link='./division' target=''/>
            <Folder title='Decimals'  img={folder} body='Open Folder' link='./decimals' target=''/>
            <Folder title='Fractions' img={folder} body='Open Folder' link='./fractions' target=''/>
            <Folder title='Negative Numbers' img={folder} body='Open Folder' link='./negatives' target=''/>
            <Folder title='Factors and Multiples' img={folder} body='Open Folder' link='./factorsmultiples' target=''/>
            <Folder title='Order of Operations' img={folder} body='Open Folder' link='./orderofoperations' target=''/>
            <Folder title='Powers of 10' img={folder} body='Open Folder' link='./powers' target=''/>
            <Folder title='Proportional Relationships' img={folder} body='Open Folder' link='./proportions' target=''/>
            <Folder title='Ratios and Rates' img={folder} body='Open Folder' link='./ratios' target=''/>
            <Folder title='Percentages' img={folder} body='Open Folder' link='./percentages' target=''/>
           
        </div>

    </div>
    
)

export default PreAlgebra;

