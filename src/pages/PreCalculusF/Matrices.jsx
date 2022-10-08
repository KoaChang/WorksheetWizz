import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {InverseMatrices,AddingandSubtractingMatrices,MatrixMultiplication,Determinants3,SystemswithMatrices,MatricesReview,Determinants2} from "./Preview"

const Matrices = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        

        <File title='Adding and Subtracting Matrices' img={AddingandSubtractingMatrices} link='https://drive.google.com/file/d/10nrBOBDF4hDD-hMCZdqolZaRtyqUXrQW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Matrix Multiplication' img={MatrixMultiplication} link='https://drive.google.com/file/d/1_gxYCPOSkoWPQPdETgOSGsXj4NaAG6iP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Determinants, 2x2' img={Determinants2} link='https://drive.google.com/file/d/16PUkbIj_2A8gzHhYmNZ1HJdatXoISM7E/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Determinants, 3x3' img={Determinants3} link='https://drive.google.com/file/d/1Z1wXwYpXmtBIIhSFOp2cq-HIq0Zc2ECP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Inverse Matrices' img={InverseMatrices} link='https://drive.google.com/file/d/1s21p2qBkD91rWKfcCqpFILaA__bRjzi_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems with Matrices' img={SystemswithMatrices} link='https://drive.google.com/file/d/1RgdCSr5yhDhVYhZb-2qVc3GLEmYFfpa8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Matrices Review' img={MatricesReview} link='https://drive.google.com/file/d/16d9ju-wmz02Fj89Li-bRxoBaRaiXWgHd/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Matrices;