import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {OrderofOperations3,OrderofOperations,OrderofOperations2,OrderofOperations5,OrderofOperations4,OrderofOperations6,OrderofOperations7} from "./Preview"


const OrderOfOperations = () => (

    <div className="bg-primary w-full overflow-hidden h-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
        <File title='Order of Operations' img={OrderofOperations} link='https://drive.google.com/file/d/12nRRhrpH1wDfvsKuJfh5e9hAjnOit2FP/view?usp=sharing' target='_blank' body = 'Downlaod PDF' />
        <File title='Order of Operations 3' img={OrderofOperations3} link='https://drive.google.com/file/d/1NfdpGIbJFVJEeyJcmELdQ4lUjH79EIET/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Order of Operations 2' img={OrderofOperations2} link='https://drive.google.com/file/d/1kdyiD0NCiGjRkQDFzdcY231G6UbyKl_r/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Order of Operations 5' img={OrderofOperations5} link='https://drive.google.com/file/d/12VENQOKC9kW_9FIbG7mMpb9lGS4cgVOM/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Order of Operations 4' img={OrderofOperations4} link='https://drive.google.com/file/d/1W7l2WVP7EB8DszXAcanRmhxBu1tAXzq8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Order of Operations 6' img={OrderofOperations6} link='https://drive.google.com/file/d/1JhFIbY9InXlDSkg9mdoXDUlGO50NrFKC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Order of Operations 7' img={OrderofOperations7} link='https://drive.google.com/file/d/1ywrZC2t2-j7bmrw8vJDB8sK5sHeVfvPm/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default OrderOfOperations;