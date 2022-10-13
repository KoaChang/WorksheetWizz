import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {DifferentiationTechniquesReview,QuotientRule,DerivativesReview,TangentsandDerivativesReview,DefinitionofDerivatives,ProductRule,PowerConstantandSumRules,AveragevsInstantaneousRatesofChange,TangentLines,DefinitionoftheDerivative} from "./Preview"


const DiffTechniques = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/calculus1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>


<File title='Definition of Derivatives' img={DefinitionofDerivatives} link='https://drive.google.com/file/d/1XrVBHVnw8tehCmA5IQkh5Ej-1V6qhSuj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Definition of the Derivative' img={DefinitionoftheDerivative} link='https://drive.google.com/file/d/1DEI10BmZjLoPJMp90WSCpzhTlnxidoNb/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Derivatives Review' img={DerivativesReview} link='https://drive.google.com/file/d/16DZE7YjCdNtUd-Jpeus_ZaGSA7lGre0_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Average vs Instantaneous Rates of Change'   img={AveragevsInstantaneousRatesofChange} body='Download PDF' link='https://drive.google.com/file/d/1eKUMGJ_cMA_ze-90VAIwQLMDbb-fFg3P/view?usp=sharing' target='_blank'/>
<File title='Power Constant and Sum Rules' img={PowerConstantandSumRules} link='https://drive.google.com/file/d/1-UyswcdrHzgVRGRFtvEoI_gzvBxZVJ4N/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Product Rule' img={ProductRule} link='https://drive.google.com/file/d/1nLHRciJH6b-AhwtPCDEWkxep6DbGuA7q/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quotient Rule' img={QuotientRule} link='https://drive.google.com/file/d/1Ah0qkI4VdelW8_Mnv6IvS0Kd5oeKy8Jj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Tangent Lines' img={TangentLines} link='https://drive.google.com/file/d/1KUIPG5ijD-5a99_mH4egS2fZVFdooEXk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Tangents and Derivatives Review' img={TangentsandDerivativesReview} link='https://drive.google.com/file/d/1lNJkP6ftaPOPcRjRv9oS4OsKvjTm2Ff6/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differentiation Techniques Review' img={DifferentiationTechniquesReview} link='https://drive.google.com/file/d/101mwRiKkcnzdjIC8r45uC8KmL1L1oju9/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default DiffTechniques;