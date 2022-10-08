import { Product, Home, Algebra1, Algebra2, PreAlgebra, PreCalculus, Calculus1,Calculus2, Statistics, Physics, Chemistry, Geometry,SAT } from './pages';
import {AbsoluteValue,EquationsInequalities,ExponentialGrowthDecay,Exponents,Functions,InequalitySystems,Irrational,Ladder,LinearEquations,PolynomialOperations,QuadraticFunctions,Radicals,RationalExpressions,SystemsEquations} from './pages/Algebra1F';
import {ComplexNumbers, GreatestInteger,LogarithmsExponential,Piecewise,PolynomialDivision,PolynomialFactorization,PolynomialGraphs,RadicalFunctions,RationalExponents,SolvingEquations,TransformationsFunctions,TrigonometryAlg} from './pages/Algebra2F';
import {APExamsAB,ApplicationsDiff,ApplicationsIntegration,DiffAdvanced,DiffTechniques,DiffToAnalyze,FRQAB,IntegrationAccumulation,Limits} from './pages/Calculus1F';
import {APExamsBC,DiffEq,FRQBC,ParametricPolar,InfiniteSeries} from './pages/Calculus2F';
import {AcidBase,APExamsC,AtomicStructure,ChemicalReaction,Equalibrium,Intermolecular,Kinetics,MolecularIonic,Thermodynamics} from './pages/ChemistryF';
import {AnalyticGeo,Circles,LogicandProb,PartsOfTriangle,PointsLinesPlanesAngles,Quadrilaterals,SurfaceArea,Transformations,TriangleCongruence,TrigonometryGeo} from './pages/GeometryF';
import {APExamsP,CircularMotion,Dynamics,Energy,Kinematics,Momentum,SMH, Torque} from './pages/PhysicsF';
import {Addition,Decimals,Division,FactorsAndMultiples,Fractions,Multiplication,Negatives,OrderOfOperations,Percentages,PowersOf10,Proportions,Ratios,Subtraction,Variables} from './pages/PreAlgebraF';
import {BinomialExpansion,Complex,Conics,Inverse,Matrices,PolarCoordinates,RationalFunctions,Series,Vectors} from './pages/PreCalculusF';
import {APExamsS,ChiSquare,CollectingData,InferenceMeans,InferenceSlopes,InferenceProp,OneVars,ProbabilityDist,Sampling,TwoVars} from './pages/StatisticsF'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (

  <div>
    <BrowserRouter>

      <div>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/algebra2' element={<Algebra2 />} />
          <Route path='/product/algebra1' element={<Algebra1 />} />
          <Route path='/product/prealgebra' element={<PreAlgebra />} />
          <Route path='/product/precalculus' element={<PreCalculus />} />
          <Route path='/product/calculus1' element={<Calculus1 />} />
          <Route path='/product/calculus2' element={<Calculus2 />} />
          <Route path='/product/statistics' element={<Statistics />} />
          <Route path='/product/physics' element={<Physics />} />
          <Route path='/product/chemistry' element={<Chemistry />} />
          <Route path='/product/geometry' element={<Geometry />} />
          <Route path='/product/sat' element={<SAT />} />

          {/* PreAlgebra */}
          <Route path='/product/prealgebra/addition' element={<Addition />} />
          <Route path='/product/prealgebra/decimals' element={<Decimals/>} />
          <Route path='/product/prealgebra/division' element={<Division/>} />
          <Route path='/product/prealgebra/factorsmultiples' element={<FactorsAndMultiples/>} />
          <Route path='/product/prealgebra/fractions' element={<Fractions/>} />
          <Route path='/product/prealgebra/multiplication' element={<Multiplication/>} />
          <Route path='/product/prealgebra/negatives' element={<Negatives/>} />
          <Route path='/product/prealgebra/orderofoperations' element={<OrderOfOperations/>} />
          <Route path='/product/prealgebra/percentages' element={<Percentages/>} />
          <Route path='/product/prealgebra/powers' element={<PowersOf10/>} />
          <Route path='/product/prealgebra/proportions' element={<Proportions/>} />
          <Route path='/product/prealgebra/ratios' element={<Ratios/>} />
          <Route path='/product/prealgebra/subtraction' element={<Subtraction/>} />
          <Route path='/product/prealgebra/variables' element={<Variables/>} />

          {/* Algebra 1 */}
          <Route path='/product/algebra1/absolutevalue' element={<AbsoluteValue />} />
          <Route path='/product/algebra1/equationsinequalities' element={<EquationsInequalities />} />
          <Route path='/product/algebra1/exponentialgrowthdecay' element={<ExponentialGrowthDecay />} />
          <Route path='/product/algebra1/exponents' element={<Exponents />} />
          <Route path='/product/algebra1/functions' element={<Functions />} />
          <Route path='/product/algebra1/inequalitysystems' element={<InequalitySystems />} />
          <Route path='/product/algebra1/irrational' element={<Irrational />} />
          <Route path='/product/algebra1/ladder' element={<Ladder />} />
          <Route path='/product/algebra1/linearequations' element={<LinearEquations />} />
          <Route path='/product/algebra1/polynomialoperations' element={<PolynomialOperations />} />
          <Route path='/product/algebra1/quadraticfunctions' element={<QuadraticFunctions />} />
          <Route path='/product/algebra1/radicals' element={<Radicals />} />
          <Route path='/product/algebra1/rationalexpressions' element={<RationalExpressions />} />
          <Route path='/product/algebra1/systemsequations' element={<SystemsEquations />} />


          {/* Algebra 2 */}
          <Route path='/product/algebra2/complexnumbers' element={<ComplexNumbers/>} />
          <Route path='/product/algebra2/greatestinteger' element={<GreatestInteger/>} />
          <Route path='/product/algebra2/logsexponents' element={<LogarithmsExponential/>} />
          <Route path='/product/algebra2/piecewise' element={<Piecewise/>} />
          <Route path='/product/algebra2/polynomialdivision' element={<PolynomialDivision/>} />
          <Route path='/product/algebra2/polynomialfactorization' element={<PolynomialFactorization/>} />
          <Route path='/product/algebra2/polynomialgraphs' element={<PolynomialGraphs/>} />
          <Route path='/product/algebra2/radicalfunctions' element={<RadicalFunctions/>} />
          <Route path='/product/algebra2/rationalexponents' element={<RationalExponents/>} />
          <Route path='/product/algebra2/solvingequations' element={<SolvingEquations/>} />
          <Route path='/product/algebra2/transformationsfunctions' element={<TransformationsFunctions/>} />
          <Route path='/product/algebra2/trigonometry' element={<TrigonometryAlg/>} />

          {/* Geometry */}
          <Route path='/product/geometry/analyticgeo' element={<AnalyticGeo/>} />
          <Route path='/product/geometry/circles' element={<Circles/>} />
          <Route path='/product/geometry/logicprob' element={<LogicandProb/>} />
          <Route path='/product/geometry/partstriangle' element={<PartsOfTriangle/>} />
          <Route path='/product/geometry/properties' element={<PointsLinesPlanesAngles/>} />
          <Route path='/product/geometry/quadrilaterals' element={<Quadrilaterals/>} />
          <Route path='/product/geometry/surfacearea' element={<SurfaceArea/>} />
          <Route path='/product/geometry/transformations' element={<Transformations/>} />
          <Route path='/product/geometry/trianglecongruence' element={<TriangleCongruence/>} />
          <Route path='/product/geometry/trigonometry' element={<TrigonometryGeo/>} />

          {/* Statistics */}
          <Route path='/product/statistics/apexam' element={<APExamsS/>} />
          <Route path='/product/statistics/chisquare' element={<ChiSquare/>} />
          <Route path='/product/statistics/collectingdata' element={<CollectingData/>} />
          <Route path='/product/statistics/inferencemean' element={<InferenceMeans/>} />
          <Route path='/product/statistics/inferenceslopes' element={<InferenceSlopes/>} />
          <Route path='/product/statistics/inferenceprop' element={<InferenceProp/>} />
          <Route path='/product/statistics/onevars' element={<OneVars/>} />
          <Route path='/product/statistics/probabilitydist' element={<ProbabilityDist/>} />
          <Route path='/product/statistics/sampling' element={<Sampling/>} />
          <Route path='/product/statistics/twovars' element={<TwoVars/>} />

          {/* Calculus1 */}
          <Route path='/product/calculus1/apexam' element={< APExamsAB/>} />
          <Route path='/product/calculus1/applicationsdiff' element={< ApplicationsDiff/>} />
          <Route path='/product/calculus1/applicationsintegration' element={<ApplicationsIntegration/>} />
          <Route path='/product/calculus1/diffadvanced' element={<DiffAdvanced />} />
          <Route path='/product/calculus1/difftechniques' element={<DiffTechniques/>} />
          <Route path='/product/calculus1/difftoanalyze' element={<DiffToAnalyze/>} />
          <Route path='/product/calculus1/frq' element={<FRQAB/>} />
          <Route path='/product/calculus1/integrationaccumulation' element={<IntegrationAccumulation/>} />
          <Route path='/product/calculus1/limits' element={<Limits/>} />

          {/* Calculus2 */}
          <Route path='/product/calculus2/apexam' element={<APExamsBC/>} />
          <Route path='/product/calculus2/diffeq' element={<DiffEq/>} />
          <Route path='/product/calculus2/frq' element={<FRQBC/>} />
          <Route path='/product/calculus2/parametricpolar' element={<ParametricPolar/>} />
          <Route path='/product/calculus2/infiniteseries' element={<InfiniteSeries/>} />

          {/* PreCalculus */}
          <Route path='/product/precalculus/binomialexpansion' element={<BinomialExpansion/>} />
          <Route path='/product/precalculus/complex' element={<Complex/>} />
          <Route path='/product/precalculus/conics' element={<Conics/>} />
          <Route path='/product/precalculus/inverse' element={<Inverse/>} />
          <Route path='/product/precalculus/matrices' element={<Matrices/>} />
          <Route path='/product/precalculus/polarcoordinates' element={<PolarCoordinates/>} />
          <Route path='/product/precalculus/rationalfunction' element={<RationalFunctions/>} />
          <Route path='/product/precalculus/series' element={<Series/>} />
          <Route path='/product/precalculus/vectors' element={<Vectors/>} />

          {/* Physics */}
          <Route path='/product/physics/apexam' element={<APExamsP/>} />
          <Route path='/product/physics/circularmotion' element={<CircularMotion/>} />
          <Route path='/product/physics/dynamics' element={<Dynamics/>} />
          <Route path='/product/physics/energy' element={<Energy/>} />
          <Route path='/product/physics/kinematics' element={<Kinematics/>} />
          <Route path='/product/physics/momentum' element={<Momentum/>} />
          <Route path='/product/physics/smh' element={<SMH/>} />
          <Route path='/product/physics/torque' element={<Torque/>} />

          {/* Chemistry */}
          <Route path='/product/chemistry/acidbase' element={<AcidBase/>} />
          <Route path='/product/chemistry/apexam' element={<APExamsC/>} />
          <Route path='/product/chemistry/atomicstructure' element={<AtomicStructure/>} />
          <Route path='/product/chemistry/chemicalreaction' element={<ChemicalReaction/>} />
          <Route path='/product/chemistry/equalibrium' element={<Equalibrium/>} />
          <Route path='/product/chemistry/intermolecular' element={<Intermolecular/>} />
          <Route path='/product/chemistry/kinetics' element={<Kinetics/>} />
          <Route path='/product/chemistry/molecularionic' element={<MolecularIonic/>} />
          <Route path='/product/chemistry/thermodynamics' element={<Thermodynamics/>} />

        </Routes>
      </div>

    </BrowserRouter>
  </div>
 
);

export default App;