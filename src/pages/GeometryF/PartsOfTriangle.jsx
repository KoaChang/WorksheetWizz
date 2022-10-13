import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {Medians,AngleBisectors,PerpendicularBisectors,Altitudes,PartsofaTriangle,Euler_sLine,PartsofaTriangle2,PerpendicularBisectors2} from "./Preview"

const PartsOfTriangle = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/geometry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
       
<File title='Altitudes of Triangle' img={Altitudes} link='https://drive.google.com/file/d/1T6jcZkGVyyCmiDw2jb3LwHqIy_5U3T71/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Angle Bisectors of Triangle' img={AngleBisectors} link='https://drive.google.com/file/d/1qDuahgaDMCgXp0__w7uOJavr4BXq6qUh/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Medians of Triangle' img={Medians} link='https://drive.google.com/file/d/1xijwUz4OcxVFuyaaz0j2sbHlztApD114/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Perpendicular Bisectors of Triangle' img={PerpendicularBisectors} link='https://drive.google.com/file/d/1kyTEVprq7ad-KntH7nwnQn6HBRjZLfnY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Perpendicular Bisectors of Triangle 2' img={PerpendicularBisectors2} link='https://drive.google.com/file/d/1oKPcTB3dBjmCBrudVdIF9Aa443m-tlPI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Eulers Line' img={Euler_sLine} link='https://drive.google.com/file/d/1jKG-fXqTnuuVSJmiHfeNzAdDRoWVDyuP/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parts of a Triangle' img={PartsofaTriangle} link='https://drive.google.com/file/d/1EwijMY9-C4w9G7NVtejtzp84nqNkcmcW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parts of a Triangle 2' img={PartsofaTriangle2} link='https://drive.google.com/file/d/1neKH3T7aoc-MQSAxmo3z4LCoYE3JAIvt/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default PartsOfTriangle;