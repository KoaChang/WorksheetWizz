import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {DeMoivre_sTheoremandPolarForm,DistanceandMidpointComplexPlane,ComplexNumberPolarForm,GraphingComplexNumbers} from "./Preview"

const Complex = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Graphing Complex Numbers' img={GraphingComplexNumbers} link='https://drive.google.com/file/d/1RJ9uXy9IO7FzwHOYUdeON3Nquny3hZ9z/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Complex Number Polar Form' img={ComplexNumberPolarForm} link='https://drive.google.com/file/d/1Du5ElXCUqm2BdHvG5nY3kF305Mc0JUF1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='DeMoivres Theorem and Polar Form' img={DeMoivre_sTheoremandPolarForm} link='https://drive.google.com/file/d/1P1xms7RsVMEtm7RzuHBFbuRGzyJ2gKyU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Distance and Midpoint Complex Plane' img={DistanceandMidpointComplexPlane} link='https://drive.google.com/file/d/1NASXYvEeAdSqHe70UfPPcgnZnl7jhNnU/view?usp=sharing' target='_blank' body = 'Download PDF' />    
        </div>

    </div>
    
)

export default Complex;