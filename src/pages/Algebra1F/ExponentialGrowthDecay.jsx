import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {DistinguishingGrowth,ExponentialFunctionsReview,GrowthandDecay,GrowthandDecay2,GrowthDecayWordProblems,LinearvsExponential,LinearvsExponential2,LinearQuadraticExponentialTables,LinearQuadraticExponentialTables2} from './Preview'

const ExponentialGrowthDecay = () => (

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
            <File title='Distinguishing Type of Growth'    img={DistinguishingGrowth} body='Download PDF' link='https://drive.google.com/file/d/16pP7FB-rLlmyK7vqZLKF5r8BS6aS_xMF/view?usp=sharing' target='_blank'/>
            <File title='Exponential Growth and Decay'   img={GrowthandDecay} body='Download PDF' link='https://drive.google.com/file/d/1M0Ca0kgo8fxSVzZQbA3i1F-H_L44gaC8/view?usp=sharing' target='_blank'/>
            <File title='Exponential Growth and Decay 2'  img={GrowthandDecay2} body='Download PDF' link='https://drive.google.com/file/d/1NzhcGmGsRPMP9OnLg_mejMPrKdLWIT0i/view?usp=sharing' target='_blank'/>
            <File title='Exponential Growth and Decay Word Problems'   img={GrowthDecayWordProblems} body='Download PDF' link='https://drive.google.com/file/d/1xEZEVwqAKZb1Nx2o_UZvDqLdvVTofi7F/view?usp=sharing' target='_blank'/>
            <File title='Linear vs Exponential' img={LinearvsExponential} link='https://drive.google.com/file/d/1PIUZDhQ0Z8oZIwr_UZqYaRrdQItvgA_J/view?usp=sharing' target='_blank' body = 'Download PDF' />
            <File title='Linear vs Exponential 2'   img={LinearvsExponential2} body='Download PDF' link='https://drive.google.com/file/d/1sDZig0yeDvjHZT38gxGw9OBbUZs1Mnul/view?usp=sharing' target='_blank'/>
            <File title='Linear Quadratic Exponential Tables'   img={LinearQuadraticExponentialTables} body='Download PDF' link='https://drive.google.com/file/d/1jjzN9kbVpWPKeFH4kEObg54ATpzaAb-_/view?usp=sharing' target='_blank'/>
            <File title='Linear Quadratic Exponential Tables 2'    img={LinearQuadraticExponentialTables2} body='Download PDF' link='https://drive.google.com/file/d/1D27R33i1zuDcEuA35tgvbNVeEDXUpZGX/view?usp=sharing' target='_blank'/>
            <File title='Exponential Functions Review' img={ExponentialFunctionsReview} link='https://drive.google.com/file/d/1S8MNuhaI_oeuJEBRN5JWlaShbpXTADlq/view?usp=sharing' target='_blank' body = 'Download PDF' />  </div>

    </div>
    
)

export default ExponentialGrowthDecay;