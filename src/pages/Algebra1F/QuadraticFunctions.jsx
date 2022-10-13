import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {FactoringQuadraticExpressions,QuadraticsVertexForm,QuadraticsAllMethods,QuadraticsFactoredForm,QuadraticFunctionsIntro,SolvingQuadraticsbySquareRoots2,QuadraticsStandardForm2,SolvingQuadraticsbySquareRoots,DifferencesofSquares2,QuadraticWordProblems,QuadraticsStandardForm,QuadraticWordProblems2,ZeroProductProperty,QuadraticFormula,QuadraticWordProblems3,DifferenceofSquares,PerfectSquareTrinomials,QuadraticEquationsByCompletingtheSquare,FactoringTrinomialsA1,TheDiscriminant,GraphingVertexForm} from "./Preview"
import {Link} from 'react-router-dom'

const QuadraticFunctions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

        <File title='Factoring Quadratic Expressions' img={FactoringQuadraticExpressions} link='https://drive.google.com/file/d/1VuTF8kQXJZlNNY1AS0NiMAdxyJyiHyvB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratics Vertex Form' img={QuadraticsVertexForm} link='https://drive.google.com/file/d/1kGmQent_LsdhdlNv0oyvuCoH7tw-euH3/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratics All Methods' img={QuadraticsAllMethods} link='https://drive.google.com/file/d/1BTeSLJ53lVCA7ZxPJeeCMCRSmqsa4Qh_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratics Factored Form' img={QuadraticsFactoredForm} link='https://drive.google.com/file/d/1rHhNLX97FZQ63P-KTXqP4Bcb7_dv50o5/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Functions Intro' img={QuadraticFunctionsIntro} link='https://drive.google.com/file/d/1gQiEDqmhMmGC9BM8xvKqGz4xsgDEHB3H/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Quadratics by Square Roots2' img={SolvingQuadraticsbySquareRoots2} link='https://drive.google.com/file/d/1PYevrHXgMJbMV6rpLE3lGGmACTm_2wys/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratics Standard Form2' img={QuadraticsStandardForm2} link='https://drive.google.com/file/d/1gBjAj5sO6Kz0d3DPiVO2VbAQYZODs5mm/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Quadratics by Square Roots' img={SolvingQuadraticsbySquareRoots} link='https://drive.google.com/file/d/1D2aQn6b7K0n_h9QTGXKyMi-iCByanXfB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Differences of Squares2' img={DifferencesofSquares2} link='https://drive.google.com/file/d/1w4xErwj-tpNeQY0HnraW14HxlGwkiJxM/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Word Problems' img={QuadraticWordProblems} link='https://drive.google.com/file/d/1gat0Uh8WUu0y-l6aXmwBWHStUp1nwW5X/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratics Standard Form' img={QuadraticsStandardForm} link='https://drive.google.com/file/d/1e0fksjVw5MIHb_yeRr9VhHbdz3t4hEek/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Word Problems2' img={QuadraticWordProblems2} link='https://drive.google.com/file/d/1wPqkHSMAVwVXE4b_JBMDLFSmQVh-0PH5/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Zero Product Property' img={ZeroProductProperty} link='https://drive.google.com/file/d/142fcHHW6ZhkXB_h7j6wG-geHnDNNxI_J/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Formula' img={QuadraticFormula} link='https://drive.google.com/file/d/1RjJPkizK4KwqhBERvQMXEInPqRWwH9-i/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Word Problems 3' img={QuadraticWordProblems3} link='https://drive.google.com/file/d/1xEzckwNLx_e-bSkV_Kevixk6klw0onV0/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Difference of Squares' img={DifferenceofSquares} link='https://drive.google.com/file/d/15prJTBAOzCALNkvrHvgb8Zz767WonBgs/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Perfect Square Trinomials' img={PerfectSquareTrinomials} link='https://drive.google.com/file/d/13Zv2361VD1DsqKgGsH80W_1s8Q45SMYe/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Quadratic Equations By Completing the Square' img={QuadraticEquationsByCompletingtheSquare} link='https://drive.google.com/file/d/1kYtb1fXRRvTGTwWAoVNoDM6ItabPlJwv/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='The Discriminant' img={TheDiscriminant} link='https://drive.google.com/file/d/17O6rPNrPMPfJcAwl2sQyzR3hi8uKg8eB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Graphing Vertex Form' img={GraphingVertexForm} link='https://drive.google.com/file/d/1pyWHPy4oPdDm-mZGfLa7Z84LaxqXNSHq/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default QuadraticFunctions;