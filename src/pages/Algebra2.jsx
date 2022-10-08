import styles from "../style";
import {MenuBar,Folder} from '../components';
import {pdf,folder,folder2} from '../assets'
import "./Product.css"


const Algebra2 = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <Folder title='Complex Numbers' img={folder} body='Open Folder' link='./complexnumbers' target=''/>
            <Folder title='Logarithms and Exponential Functions' img={folder} body='Open Folder' link='./logsexponents' target=''/>
            <Folder title='Polynomial Division'   img={folder} body='Open Folder' link='./polynomialdivision' target=''/>
            <Folder title='Polynomial Factorization'  img={folder} body='Open Folder' link='./polynomialfactorization' target=''/>
            <Folder title='Polynomial Graphs'  img={folder} body='Open Folder' link='./polynomialgraphs' target=''/>
            <Folder title='Rational Exponents' img={folder} body='Open Folder' link='./rationalexponents' target=''/>
            <Folder title='Radical Functiopns'  img={folder} body='Open Folder' link='./radicalfunctions' target=''/>
            <Folder title='Transformation of Functions'  img={folder} body='Open Folder' link='./transformationsfunctions' target=''/>
            <Folder title='Solving Equations'  img={folder} body='Open Folder' link='./solvingequations' target=''/>
            <Folder title='Piecewise Functions'  img={folder} body="Open Folder" link='./piecewise' target=''/>
            <Folder title='Greatest Integer Function'  img={folder} body="Open Folder" link='./greatestinteger' target=''/>
            <Folder title='Trigonometry' img={folder} body="Open Folder" link='./trigonometry' target=''/>
        </div>

    </div>
    
)

export default Algebra2;

