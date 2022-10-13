import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {DecimalsPlaceValue,Rouding,AddingDecimals,DecimalMatchingPlaceValue,ExpandedFormPlaceValue,StandardFormPlaceValue,MissingPlaceValue,DecimalWordProblems,PlaceValueChart,OperationswithDecimalsReview,MultiplyingDecimals,DecimalsReview,SubtractingDecimals,Rounding2,WordNamesPlaceValue} from "./Preview"


const Decimals = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/prealgebra'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='Decimals Place Value' img={DecimalsPlaceValue} link='https://drive.google.com/file/d/1CAn5Dv8dneSf1rim55uImC2UMUoJRLJf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rounding 2' img={Rounding2} link='https://drive.google.com/file/d/1uFxgB9yNs6VkniedQF8w5pJhDXdmusoI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Adding Decimals' img={AddingDecimals} link='https://drive.google.com/file/d/1MD0swWycwza5br1CI3_mrdzfe5aV4wMd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Decimal Matching Place Value' img={DecimalMatchingPlaceValue} link='https://drive.google.com/file/d/10_rg8A35eg3SOjuQB73Ep4Ih42aWKc8w/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Expanded Form Place Value' img={ExpandedFormPlaceValue} link='https://drive.google.com/file/d/1H-_RWVd78knD0Wx6qKmRjMxxW_1as4rp/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Standard Form Place Value' img={StandardFormPlaceValue} link='https://drive.google.com/file/d/1gSHEYzxEHyGOpl7sxo3Q4VyZXYdBTbDU/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Missing Place Value' img={MissingPlaceValue} link='https://drive.google.com/file/d/1CnlkO2MQm0dprKNEaJVNZC4kIhmSAnEw/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Decimal Word Problems' img={DecimalWordProblems} link='https://drive.google.com/file/d/1RNEmQHkW1kH1a-QevLuHf74SaSHE6Z4p/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Place Value Chart' img={PlaceValueChart} link='https://drive.google.com/file/d/1-hHrsvWY2BiYGW1qMOpE56oiOyjaF7Tx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Operations with Decimals Review' img={OperationswithDecimalsReview} link='https://drive.google.com/file/d/1JOECOwlx12N6SJezJKFs9uRiz5ZF6S9z/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplying Decimals' img={MultiplyingDecimals} link='https://drive.google.com/file/d/1c7zEWCKZJo4F_VUHJgGAyjd00yaGQKw5/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Decimals Review' img={DecimalsReview} link='https://drive.google.com/file/d/14Q_PNGjRdaCQdn6za0Dyg3-j7ecW5W0_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Subtracting Decimals' img={SubtractingDecimals} link='https://drive.google.com/file/d/1dFyCi7EgDpXRwbE7YwUV45_U4J8WiBsC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Word Names Place Value' img={WordNamesPlaceValue} link='https://drive.google.com/file/d/18Jr2aUKwUsFBfIMHFF842r90xcOP5o-H/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Decimals;