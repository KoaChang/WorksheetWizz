import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {ComplexNumbersIntro, ComplexNumbersReview, ComplexQuadratics, ComplexQuadratics2, OperationswithComplexNumbers, OperationswithComplexNumbers2, PropertiesofComplexNumbers, SimplifyingComplexNumbers} from "./Preview";

const ComplexNumbers = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
<File title='Complex Numbers Intro' img={ComplexNumbersIntro} link='https://drive.google.com/file/d/1nxg7WdOTFkeOut3GJIJALEnHIlyYHb10/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Complex Numbers Review' img={ComplexNumbersReview} link='https://drive.google.com/file/d/1bbAcrrAbtBdaise_l-8hqyz6NYte4eQC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Complex Quadratics' img={ComplexQuadratics} link='https://drive.google.com/file/d/1-MHPFbVRjmgvWxpCxy555sDeOaq5Uq6N/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Complex Quadratics 2' img={ComplexQuadratics2} link='https://drive.google.com/file/d/1UIhL1RpYp4lKz-zC_0jX_5HYhH7JkrFi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Simplifying Complex Numbers' img={SimplifyingComplexNumbers} link='https://drive.google.com/file/d/1kn5TjoA8VQ9G-rYh2BeSQ_8Rz5ImB9Oq/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Operations with Complex Numbers' img={OperationswithComplexNumbers} link='https://drive.google.com/file/d/1QXd2K-HPg-lqVRCk1Emxtt3Kq1O2R6vc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Operations with Complex Numbers 2' img={OperationswithComplexNumbers2} link='https://drive.google.com/file/d/1KmemxN1qDvFVQfXe6UPQRop-p8rDN_vE/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Complex Numbers' img={PropertiesofComplexNumbers} link='https://drive.google.com/file/d/1C3lQigMXuqRAw1jtJJ8gl3PGr7MasBf8/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default ComplexNumbers;