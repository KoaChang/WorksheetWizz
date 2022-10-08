import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {InverseFunctionsReview,OneToOneFunctions,FindingInverseFunctions,VerifyingInverses,InverseFunctionsGraphically} from "./Preview"


const Inverse = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Inverse Functions Review' img={InverseFunctionsReview} link='https://drive.google.com/file/d/1cQGNaI3XKiOaFzLEeRaJ7wxl9MZjZSSZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='One To One Functions' img={OneToOneFunctions} link='https://drive.google.com/file/d/1TIMTFA72eNpBithil8pbi4AkkRYTkFZA/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Finding Inverse Functions' img={FindingInverseFunctions} link='https://drive.google.com/file/d/1W4h1s9kub23eECQPycGhe5qSjpfgLJpL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Verifying Inverses' img={VerifyingInverses} link='https://drive.google.com/file/d/15wmqo6q9VzO76rOeUMh-5D4O1vFoQAUA/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Inverse;