import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import { ApplicationsofLogsandExponents, ChangeofBaseFormula, CompoundInterest, ExpandingandCondenscingLogs, ExponentialEquations, ExponentialEquationsWithoutLogarithms, Exponential_LogarithmicWordProblems, GraphignLogarithmicFunctions2, GraphingExponentialFunctions, GraphingExponentialFunctions2, GraphingLogarithms, GraphingLogarithms2, LogarithmicOperations, LogarithmProperties, LogarithmsIntro, LogarithmsReview, LogarithmsReview2, LogsandExponentsWordProblems, MeaningofLogarithms } from "./Preview";

// import { ApplicationsofLogsandExponents, ChangeofBaseFormula,CompoundInterest,ExpandingandCondenscingLogs,ExponentialEquationsWithoutLogarithms,ExponentialEquations,ExponentialLogarithmicWordProblems,GraphignLogarithmicFunctions2,GraphingLogarithms2,GraphingExponentialFunctions,GraphingExponentialFunctions2,GraphingLogarithms,LogarithmProperties,LogarithmicOperations,LogarithmsIntro,LogarithmsReview,LogarithmsReview2,LogsandExponentsWordProblems,MeaningofLogarithms } from "./Preview";

const LogarithmsExponential = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra2'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

            <File title='Exponential Equations Without Logarithms' img={ExponentialEquationsWithoutLogarithms} link='https://drive.google.com/file/d/1IbrY6GsqlNaJEP5hYTYrU4KuuRcQjD9M/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Exponential Equations' img={ExponentialEquations} link='https://drive.google.com/file/d/1w2bsUdbi9xt4tmVGLKELUv3SFCSYy1qz/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Meaning of Logarithms' img={MeaningofLogarithms} link='https://drive.google.com/file/d/1EaXVP1cx_eFh-B3wHYqXf96_1633Zqdh/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logarithms Intro' img={LogarithmsIntro} link='https://drive.google.com/file/d/11Wk8NpRA8iGTyiG9_rnyaoNdC8GfMXtA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logarithm Properties' img={LogarithmProperties} link='https://drive.google.com/file/d/1cECcEa7HpbcjBAS3shEY8ClLkqoyrqXP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logarithmic Operations' img={LogarithmicOperations} link='https://drive.google.com/file/d/15H59of41yq0paTAAmJUwl6ozUJ6S01oZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Change of Base Formula' img={ChangeofBaseFormula} link='https://drive.google.com/file/d/1zaoBrmwIEj6Pae57m_VQ54N-3WtokHUc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Exponential Functions' img={GraphingExponentialFunctions} link='https://drive.google.com/file/d/1qPIRVmFIW2Kr2n4a7xJkMBLzbh6X1sKW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Exponential Functions2' img={GraphingExponentialFunctions2} link='https://drive.google.com/file/d/1EqZF2c9C5YB2Q7V41ak4KIcPXAwKPinQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Logarithms' img={GraphignLogarithmicFunctions2} link='https://drive.google.com/file/d/1cvMKcvVpNeWL-GMk-RXuPA1yrfJvNnK3/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Logarithms 2' img={GraphingLogarithms} link='https://drive.google.com/file/d/1hlnGHwa76wk_aG45esE2ZKbuLxvtyrCU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logs and Exponents Word Problems' img={LogsandExponentsWordProblems} link='https://drive.google.com/file/d/1p4kn05ySh09YElnz3PGZdEujiyguegLd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Applications of Logs and Exponents' img={ApplicationsofLogsandExponents} link='https://drive.google.com/file/d/1Htt-8eE2fKyEz36zAcBet8ss9F4z_ftW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Compound Interest' img={CompoundInterest} link='https://drive.google.com/file/d/1SoCrqqSoiR3uJdL_l1bElbEyEWptBe_W/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logarithms Review' img={LogarithmsReview} link='https://drive.google.com/file/d/1uyjTY6PflLoM-p9OH2UUGGDsXX1Qj6Q0/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logarithms Review 2' img={LogarithmsReview2} link='https://drive.google.com/file/d/1X1IuaDgaYadZFi1NY7DPKr_rXEPGhl4z/view?usp=sharing' target='_blank' body = 'Download PDF' /> 
        </div>

    </div>
    
)

export default LogarithmsExponential;