import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {ImplicitDifferentiation2,DerivativesofInverseFunctions,DifferentiatingTrigFunctions,HigherOrderDerivatives,ChainRule,DifferentiatingLogsandExponentials,DifferentiatingInverseTrigFunctions,ChainRuleReview,DerivativesofLogsandExponentsReview,ImplicitDifferentiation,ImplicitDifferentiationReview} from "./Preview"

const DiffAdvanced = () => (

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

<File title='Chain Rule' img={ChainRule} link='https://drive.google.com/file/d/1rYCbQPwXx06IsS1f3KLOQgFUthIaPtW1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Chain Rule Review' img={ChainRuleReview} link='https://drive.google.com/file/d/10_W01PdsoIU6dpVU9zTM-5KBCvz68T9D/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Derivatives of Logs and Exponentials' img={DifferentiatingLogsandExponentials} body='Download PDF' link='https://drive.google.com/file/d/1587aU6MePAl0beiPbllD5zY7I9Lu6I0L/view?usp=sharing' target='_blank'/>
<File title='Derivatives of Logs and Exponentials Review'  img={DerivativesofLogsandExponentsReview} body='Download PDF' link='https://drive.google.com/file/d/17CiKbBCgVFxn1H63-uyLv5No079blPcE/view?usp=sharing' target='_blank'/>
<File title='Derivatives of Inverse Functions' img={DerivativesofInverseFunctions} link='https://drive.google.com/file/d/139an-9nnoACwcZdb5IFdwlJ_WvrUeQmG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differentiating Inverse Trig Functions' img={DifferentiatingInverseTrigFunctions} link='https://drive.google.com/file/d/1JRP6AZozq0dA91NRQNfidaX3-BRdA4Wi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differentiating Trig Functions' img={DifferentiatingTrigFunctions} link='https://drive.google.com/file/d/1zvLbsAImCPNa0hsA1QA3uRACRvqyhrnY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Higher Order Derivatives' img={HigherOrderDerivatives} link='https://drive.google.com/file/d/1XSHuare0eq5ELUbxmNzSLUnaaO24wJ_r/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Implicit Differentiation' img={ImplicitDifferentiation} link='https://drive.google.com/file/d/17uJdSuo3wNC6UyL359QSoasxidkZ6GBx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Implicit Differentiation 2' img={ImplicitDifferentiation2} link='https://drive.google.com/file/d/1eVx_OQgd50XBKnena_YpmB86W0xvAyZu/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Implicit Differentiation Review' img={ImplicitDifferentiationReview} link='https://drive.google.com/file/d/15HHX0LNogkUIu-o8-502Bc7cuBTk2RQR/view?usp=sharing' target='_blank' body = 'Download PDF' />
     
        </div>

    </div>
    
)

export default DiffAdvanced;