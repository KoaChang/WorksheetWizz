import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {CalculusBC2011FRQExam,CalculusBC2008FRQ,CalculusBC2008MCQ,CalculusBC2015FRQExam,CalculusABandBCMultipleChoice,CalculusBC2012Exam,CalculusBC2017FRQ} from "./Preview"

const APExamsBC = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/calculus2'}>
                <Back />
            </Link>
        </div>

        <div className='flex justify-start items-center relative left-12 bottom-10'>
            <Link to={'/product/calculus2'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            <File title='Calculus AB and BC Multiple Choice' img={CalculusABandBCMultipleChoice} link='https://drive.google.com/file/d/19N81YegJeFR2r1m4LGXbahdj8xVg7vgY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Calculus BC 2008 FRQ' img={CalculusBC2008FRQ} link='https://drive.google.com/file/d/1yjEcYJ2nhcW8N2eC5ZdZGbGx-CcSHl1Y/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Calculus BC 2008 MCQ' img={CalculusBC2008MCQ} link='https://drive.google.com/file/d/1Z7E-pmFaG9ma6A0kEGssb0zno25jHt9y/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Calculus BC 2011 FRQ'  img={CalculusBC2011FRQExam} body='Download PDF' link='https://drive.google.com/file/d/1llwslYyh1fo2TMu51u5M2T0tpkqzo_xa/view?usp=sharing' target='_blank'/>
<File title='Calculus BC 2012 Exam' img={CalculusBC2012Exam} link='https://drive.google.com/file/d/1n-u97kNLHXzRsM8frxrgGcrLtjWutM3l/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Calculus BC 2015 FRQ'   img={CalculusBC2015FRQExam} body='Download PDF' link='https://drive.google.com/file/d/1EB2IqyBGBPzyOKHXN7lckYXrWYkkHVqi/view?usp=sharing' target='_blank'/>
<File title='Calculus BC 2017 FRQ' img={CalculusBC2017FRQ} link='https://drive.google.com/file/d/1Sv5P7BQvIujBYY-5GYfIELW_tHShofO_/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default APExamsBC;