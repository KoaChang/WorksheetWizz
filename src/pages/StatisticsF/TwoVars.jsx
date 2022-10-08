import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {LeastSquaresRegressionLine,ScatterPlots2,InterpretingRegressionOutput,ResidualPlots,ScatterPlots,Residuals,LinearRegressionReview} from "./Preview"

const TwoVars = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Residuals' img={Residuals} link='https://drive.google.com/file/d/1u-KpyURVrwpXgOmM9n36pEctWER5nMdM/view?usp=sharing' target='_blank' body='Download PDF'/>
        <File title='Residual Plots' img={ResidualPlots} link='https://drive.google.com/file/d/1-Ye85FIzVoX6kLIAYvRqpepH-jt7aegz/view?usp=sharing' target='_blank' body='Download PDF'/>
        <File title='Scatter Plots' img={ScatterPlots} link='https://drive.google.com/file/d/1tIQ1_CASTqUa1MD5_XNdDskIPqelW6vR/view?usp=sharing' target='_blank' body='Download PDF'/>
        <File title='Scatter Plots 2' img={ScatterPlots2} link='https://drive.google.com/file/d/1RwKlGpdS4RxXeIOd7JGrgjHQFghOONDc/view?usp=sharing' target='_blank' body='Download PDF'/>

        <File title='Least Squares Regression Line' img={LeastSquaresRegressionLine} link='https://drive.google.com/file/d/1WrNQ_PqijByEHXICwvQptTYJfOv6vQGt/view?usp=sharing' target='_blank' body='Download PDF'/>
        <File title='Interpreting Regression Output' img={InterpretingRegressionOutput} link='https://drive.google.com/file/d/1McWKK08tJTIQ8oN1dzQrjfy9HzR03-9n/view?usp=sharing' target='_blank' body='Download PDF'/>
        <File title='Linear Regression Review' img={LinearRegressionReview} link='https://drive.google.com/file/d/1QEJutu4d_kvfqlgFdo8Iy6EK3O0ubsNL/view?usp=sharing"' target='_blank' body='Download PDF'/>


        </div>

    </div>
    
)

export default TwoVars;