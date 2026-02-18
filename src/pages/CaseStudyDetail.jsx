import { useParams } from "react-router-dom";
import Hero from "../sections/caseStudyDetail/Hero";
import Challenge from "../sections/caseStudyDetail/Challenge";
import WhyScaleBI from "../sections/caseStudyDetail/WhyScaleBI";
import Solution from "../sections/caseStudyDetail/Solution";
import Results from "../sections/caseStudyDetail/Results";
import LookingAhead from "../sections/caseStudyDetail/LookingAhead";

export default function CaseStudyDetail() {
  const { slug } = useParams();

  return (
    <>
      <Hero />
      <Challenge/>
      <WhyScaleBI/>
      <Solution/>
      <Results/>
      <LookingAhead/>
      
      </>
    
  );
}
