import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {LinearStandardForm,PointSlope,WritingLinearEquations,RateOfChange,InterpretingSlopeYInt,HorizontalVerticalLines,LinearWordProblems,EquationsFromTable,Slope,SlopeFromanEquation} from "./Preview"
import {Link} from 'react-router-dom'

const LinearEquations = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
   

<File title='Equations From Table' img={EquationsFromTable} link='https://drive.google.com/file/d/1EfUUmCNNi0hMKBechoE8D0V0ISuieTC6/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Horizontal Vertical Lines' img={HorizontalVerticalLines} link='https://drive.google.com/file/d/1ZOdx0soDaO2cHWZSLiZOnUhIkcNuU18X/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Linear Standard Form' img={LinearStandardForm} link='https://drive.google.com/file/d/1Bbd8RNSNyPnuW9GYjBA5koYQk6qUKWyN/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Linear Word Problems' img={LinearWordProblems} link='https://drive.google.com/file/d/1BcAoWHN-vMrpjberacxu9XOKN_a3queL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Point Slope' img={PointSlope} link='https://drive.google.com/file/d/1GW2vu1Zd2L4ub_5ATEvgn9vwPzpR0w3m/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Slope From an Equation' img={SlopeFromanEquation} link='https://drive.google.com/file/d/1b1Sqp1DlO-Pt8kOxDdInXFEQ2wT4HEoc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Slope' img={Slope} link='https://drive.google.com/file/d/1iWSQQJH350OlJ8JrQ1llkbv9Z-frl3oO/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Writing Linear Equations' img={WritingLinearEquations} link='https://drive.google.com/file/d/1HfSoA6e99b0vZsG9u5ExkEJa7mc4LgyS/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default LinearEquations;