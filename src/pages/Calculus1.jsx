import styles from "../style";
import {MenuBar,Folder} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"


const Calculus1 = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <Folder title='Limits and Continuity'   img={folder} body='Open Folder' link='./limits' target=''/>
            <Folder title='Differentiation Definition and Techniques'   img={folder} body='Open Folder' link='./difftechniques' target=''/>
            <Folder title='Differentiation Advanced'    img={folder} body='Open Folder' link='./diffadvanced' target=''/>
            <Folder title='Derivatives to Analyze Functions'   img={folder} body='Open Folder' link='./difftoanalyze' target=''/>
            <Folder title='Applications of Differentiation'       img={folder} body='Open Folder' link='./applicationsdiff' target=''/>
            <Folder title='Integration and Accumulation of Change'     img={folder} body='Open Folder' link='./integrationaccumulation' target=''/>
            <Folder title='Applications of Integration'     img={folder} body='Open Folder' link='./applicationsintegration' target=''/>
            <Folder title='FRQ Practice'   img={folder} body='Open Folder' link='./frq' target=''/>
            <Folder title='AP Exams'  img={folder} body='Open Folder' link='./apexam' target=''/>


        </div>

    </div>
    
)

export default Calculus1;

