import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import { FactsofPolynomialFunctions, GraphingPolynomials, GraphingPolynomials2, GraphingPolynomials3,IntervalsofPolynomials, MultiplicityandGraphingPolynomialsinsert, PolynomialFunctionsIntro, PolynomialsEndBehavior } from "./Preview";
// import {FactsofPolynomialFunctions,PolynomialsEndBehavior,GraphingPolynomials2,GraphingPolynomials3,GraphingPolynomials,PolynomialFunctionsIntro,IntervalsofPolynomials,MultiplicityandGraphingPolynomialsinsert} from "./Preview"

// import { FactsofPolynomialFunctions,GraphingPolynomials,GraphingPolynomials2,GraphingPolynomials3, IntervalsofPolynomials,MultiplicityandGraphingPolynomialsinsert,PolynomialFunctionsIntro,PolynomialsEndBehavior} from "./Preview";

const PolynomialGraphs = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
          
<File title='Polynomial Functions Intro' img={PolynomialFunctionsIntro} link='https://drive.google.com/file/d/16TfHBNxTkLFPmxK_YFjAI1ZdcXo-jSge/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Facts of Polynomial Functions' img={FactsofPolynomialFunctions} link='https://drive.google.com/file/d/1e4WvvSwpzX6bXIPp7D3S8_m72z2hyD1j/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Polynomial End Behavior'     img={PolynomialsEndBehavior} body='Download PDF' link='https://drive.google.com/file/d/1y1hPgDrr8i2CO5QJ04-f2ZHPrOL9Oj56/view?usp=sharing' target='_blank'/>
<File title='Graphing Polynomials' img={GraphingPolynomials} link='https://drive.google.com/file/d/1Usqf6ntjbud2p8FCVCq1pjPKbR8CwxoL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Polynomials 2' img={GraphingPolynomials2} link='https://drive.google.com/file/d/1GRNVylX0Gyig2jE-4A2wnsnNsVt58-IT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Polynomials 3' img={GraphingPolynomials3} link='https://drive.google.com/file/d/1gvd-yeZgp-ZIaJWGGG9BlVhsge9unt1X/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Intervals of Polynomials' img={IntervalsofPolynomials} link='https://drive.google.com/file/d/1NhpyHy6cux-_JBDkHWgXU8_F92aLxepW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplicity and Graphing Polynomials' img={MultiplicityandGraphingPolynomialsinsert} link='https://drive.google.com/file/d/1EKcG9cWwrxYIIGRmQmks2vnkVzVmL29w/view?usp=sharing' target='_blank' body = 'Download PDF' />
  </div>

    </div>
    
)

export default PolynomialGraphs;