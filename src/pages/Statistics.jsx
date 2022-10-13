import styles from "../style";
import {MenuBar,Folder,Back} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"
import {Link} from 'react-router-dom'


const Statistics = () => (

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
            <Folder title='One Variable Data' img={folder} body='Open Folder' link='./onevars' target=''/>
            <Folder title='Two Variable Data' img={folder} body='Open Folder' link='./twovars' target=''/>
            <Folder title='Collecting Data' img={folder} body='Open Folder' link='./collectingdata' target=''/>
            <Folder title='Probability Distributions' img={folder} body='Open Folder' link='./probabilitydist' target=''/>
            <Folder title='Sampling Distributions' img={folder} body='Open Folder' link='./sampling' target=''/>
            <Folder title='Inference Proportions' img={folder} body='Open Folder' link='./inferenceprop' target=''/>
            <Folder title='Inference Means' img={folder} body='Open Folder' link='./inferencemean' target=''/>
            <Folder title='Inference Chi-Square' img={folder} body='Open Folder' link='./chisquare' target=''/>
            <Folder title='Inference Slopes' img={folder} body='Open Folder' link='./inferenceslopes' target=''/>
            <Folder title='AP Exams' img={folder} body='Open Folder' link='./apexam' target=''/>
            
        </div>
         

    </div>
    
)

export default Statistics;

