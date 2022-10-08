import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {MultiplyingPolynomials3,MultiplyingPolynomials2,MultiplyingBinomials,MultiplyingPolynomials,AddingSubtractingPolynomials3,AddingSubtractingPolynomials2,AddingSubtractingPolynomials,PolynomialOperationsReview,MultiplyingMonomials} from "./Preview"


const PolynomialOperations = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Adding and Subtracting Polynomials'       img={AddingSubtractingPolynomials} body='Download PDF' link='https://drive.google.com/file/d/18daw1ICLi1E9MtmyReW84EPkjNWo4UvW/view?usp=sharing' target='_blank'/>
            <File title='Adding and Subtracting Polynomials 2'      img={AddingSubtractingPolynomials2} body='Download PDF' link='https://drive.google.com/file/d/1gjWSnVzLQlYYIW66xV7WpKd0PXojkgD3/view?usp=sharing' target='_blank'/>     <File title='Adding and Subtracting Polynomials 3'    img={AddingSubtractingPolynomials3} body='Download PDF' link='' target='_blank'/>
            <File title='Multiplying Binomials' img={MultiplyingBinomials} link='https://drive.google.com/file/d/16q4b6dhSRI5ShY6_mNPiNLuiAiKjBylB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying Polynomials' img={MultiplyingPolynomials} link='https://drive.google.com/file/d/1PAHkKBuLN3aUBAcpSFKynXny9n9hHl7_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying Polynomials 2'   img={MultiplyingPolynomials2} body='Download PDF' link='https://drive.google.com/file/d/17a1rYoYC6mMt-b8uqu5HgGmkbAUrIGIM/view?usp=sharing' target='_blank'/>
            <File title='Multiplying Polynomials 3'   img={MultiplyingPolynomials3} body='Download PDF' link='' target='_blank'/>
<File title='Multiplying Monomials' img={MultiplyingMonomials} link='https://drive.google.com/file/d/1DJG9tvA5Lp0nYbaF9nDMuPZ2Xd56jdzf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polynomial Operations Review' img={PolynomialOperationsReview} link='https://drive.google.com/file/d/1byzZYrwslBu2hAUYyy_ZhzzqUdeg4_Bp/view?usp=sharing' target='_blank' body = 'Download PDF' />
     
        </div>

    </div>
    
)

export default PolynomialOperations;