import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {ImproperIntegralsReview,Euler_sMethod2,ErrorPropagation,LogisticGrowth,IntrotoDifferentialEquations,ImproperIntegrals,logistic_growth,IntialValueProblems,SlopeFields,Euler_sMethod,SeparableDifferentialEquations,DifferentialEquationsReview} from "./Preview"

const DiffEq = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Intro to Differential Equations' img={IntrotoDifferentialEquations} link='https://drive.google.com/file/d/1B6FSltPldrBCC9qUcTp8qlF9QZUwfc6D/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Initial Value Problems' img={IntialValueProblems} link='https://drive.google.com/file/d/1NRLtT13TrUsetp0UfKLbDt_F8lOiq9RB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differential Equations Review' img={DifferentialEquationsReview} link='https://drive.google.com/file/d/1EUlXWzWfl29PjI11l0roxprV5hh57PFT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Error Propagation' img={ErrorPropagation} link='https://drive.google.com/file/d/1bCNXDQaOZj0o5z584GI6O7JDl_P8J5Fk/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Eulers Method' img={Euler_sMethod} link='https://drive.google.com/file/d/1FgpBj0S5TB4KPZ8Aw8wiRjSmP6-XpOpc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Eulers Method 2' img={Euler_sMethod2} link='https://drive.google.com/file/d/1Slgq_tr2IDy2gTxYoYP8Q396z3x5ht9W/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Improper Integrals' img={ImproperIntegrals} link='https://drive.google.com/file/d/1PDLlIBo3qjiTQgDmJOr2NwKXVuMltdPp/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Improper Integrals Review' img={ImproperIntegralsReview} link='https://drive.google.com/file/d/1Z7vMnCjekraOCG3Og0JnSr6IBW0Y0Hip/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logistic Growth' img={LogisticGrowth} link='https://drive.google.com/file/d/1s-ADlsFJ9v_q_Uk0Y7SupJNeMOCllhVv/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logistic Growth 2' img={logistic_growth} link='https://drive.google.com/file/d/1uUofTxz-F23I7skXvEzg3p9XpNCLFAmx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Slope Fields' img={SlopeFields} link='https://drive.google.com/file/d/1vfz2y-JdAiYP9x-2iHVOh3P4-L6ZK0fa/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default DiffEq;