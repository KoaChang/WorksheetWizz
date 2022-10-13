import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {APPhysics2019FRQ,APPhysics2018FRQ,APPhysics2022FRQ,APPhysics2021FRQ} from "./Preview"

const APExamsP = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/physics'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='AP Physics 2019 FRQ' img={APPhysics2019FRQ} link='https://drive.google.com/file/d/1arpIY08HCPzePG2w23ti0SA6o-oOjZT-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='AP Physics 2018 FRQ' img={APPhysics2018FRQ} link='https://drive.google.com/file/d/1FmxEM6u0G-mhBOv1Tx8bm5gF0zn9-Uqd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='AP Physics 2022 FRQ' img={APPhysics2022FRQ} link='https://drive.google.com/file/d/1eLcJNG3WNJC_uzlAqd-biwXczu1jtv3z/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='AP Physics 2021 FRQ' img={APPhysics2021FRQ} link='https://drive.google.com/file/d/1T68Z22qH4iVPL31GkFEkCmIupa8faOR7/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default APExamsP;