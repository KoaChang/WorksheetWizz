import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {ClassifyingIonicorCovalent,NomenclatureWorksheet1and2,NomenclatureWorksheet3,PropertiesofIonicCompounds,NomenclatureWorksheet4,CovalentCompounds} from "./Preview"

const MolecularIonic = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='Classifying Ionic and Covalent' img={ClassifyingIonicorCovalent} body='Download PDF' link='https://drive.google.com/file/d/1Cc0swqdJVie1kM4c8tGIhCjPRn3X1_Gt/view?usp=sharing' target='_blank'/>
<File title='Covalent Compounds' img={CovalentCompounds} link='https://drive.google.com/file/d/1ogjlKqUNFH86H3ogpzzrzon87ih6ZPIE/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Properties of Ionic Compounds' img={PropertiesofIonicCompounds} link='https://drive.google.com/file/d/11m8JyLuLgZwT-ZFySqmrAqzoKZLPkVUX/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Nomenclature Worksheet 1 and 2' img={NomenclatureWorksheet1and2} link='https://drive.google.com/file/d/1-_c1INqAXzkuTACB6MSXcC7wi4wXyqwh/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Nomenclature Worksheet 3' img={NomenclatureWorksheet3} link='https://drive.google.com/file/d/1T9vTDiI3THU_UQrgXUrSFTUwmRO7FqrQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Nomenclature Worksheet 4' img={NomenclatureWorksheet4} link='https://drive.google.com/file/d/16C8Wh-rM4--VvR4uMPeM3JIknUcpTDnm/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default MolecularIonic;