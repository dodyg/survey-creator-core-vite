import "survey-core/defaultV2.min.css"
import "survey-creator-core/survey-creator-core.min.css"
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import './App.css'

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  creator.text = "hello world";
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}


function App() {

  return (
    <div>
        <SurveyCreatorWidget></SurveyCreatorWidget>
    </div>
  )
}

export default App
