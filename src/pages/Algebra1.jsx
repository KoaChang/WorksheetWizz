import styles from "../style";
import {MenuBar,Folder} from '../components';
import {pdf,folder,folder2,one_step} from '../assets'
import "./Product.css"


const Algebra1 = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <Folder title='Absolute Value' 
            img={folder} body='Open Folder' link='./absolutevalue'/>
            <Folder title='Equations and Inequalities' 
            img={folder} body='Open Folder' link='./equationsinequalities' />   
            <Folder title='Exponential Growth and Decay' 
            img={folder} body='Open Folder' link='./exponentialgrowthdecay' />
            <Folder title='Exponents' 
            img={folder} body='Open Folder' link='./exponents'/>
            <Folder title='Functions' 
            img={folder} body='Open Folder' link='./functions' />
            <Folder title='Inequality Systems and Graphs' 
            img={folder} body='Open Folder' link='./inequalitysystems'/>
            <Folder title='Irrational Numbers' 
            img={folder} body='Open Folder' link='./irrational' />
            <Folder title='Ladder Algebra' 
            img={folder} body='Open Folder' link='./ladder'/>
            <Folder title='Linear Equations and Graphs' 
            img={folder} body='Open Folder' link='./linearequations'/>
            <Folder title='Polynomial Operations' 
            img={folder} body='Open Folder' link='./polynomialoperations'/>
            <Folder title='Quadratic Functions' 
            img={folder} body='Open Folder' link='./quadraticfunctions'/>
            <Folder title='Radicals' 
            img={folder} body='Open Folder' link='./radicals'/>
            <Folder title='Rational Expressions' 
            img={folder} body='Open Folder' link='./rationalexpressions'/>
            <Folder title='Systems of Equations' 
            img={folder} body='Open Folder' link='./systemsequations'/>
        </div>

    </div>
    
)

export default Algebra1;

