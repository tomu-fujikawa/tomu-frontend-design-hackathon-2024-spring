import React, { useState, useEffect } from "react";
import "../style/style.css";
import { Button } from "./Button";
import { Screen } from "./Screen";

export const Page = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleAnswer1 = e => {
    setAnswer1(e.target.textContent);
  };
  const handleAnswer2 = e => {
    setAnswer2(e.target.textContent);
  };
  const handleAnswer3 = e => {
    setAnswer3(e.target.textContent);
  };

  useEffect(() => {
    console.log(`answer1-answer2-answer3`,`${answer1}-${answer2}-${answer3}`);
    // answer1, answer2, answer3 の値に応じて recommendation を設定
    switch (`${answer1}-${answer2}-${answer3}`) {
      case "A-A-A":
        setRecommendation("Recommendation A-A-A");
        break;
      case "A-A-B":
        setRecommendation("Recommendation A-A-B");
        break;
      case "A-A-C":
        setRecommendation("Recommendation A-A-C");
        break;
      case "A-B-A":
        setRecommendation("Recommendation A-B-A");
        break;
      case "A-B-B":
        setRecommendation("Recommendation A-B-B");
        break;
      case "A-B-C":
        setRecommendation("Recommendation A-B-C");
        break;
      case "A-C-A":
        setRecommendation("Recommendation A-C-A");
        break;
      case "A-C-B":
        setRecommendation("Recommendation A-C-B");
        break;
      case "A-C-C":
        setRecommendation("Recommendation A-C-C");
        break;
      case "B-A-A":
        setRecommendation("Recommendation B-A-A");
        break;
      case "B-A-B":
        setRecommendation("Recommendation B-A-B");
        break;
      case "B-A-C":
        setRecommendation("Recommendation B-A-C");
        break;
      case "B-B-A":
        setRecommendation("Recommendation B-B-A");
        break;
      case "B-B-B":
        setRecommendation("Recommendation B-B-B");
        break;
      case "B-B-C":
        setRecommendation("Recommendation B-B-C");
        break;
      case "B-C-A":
        setRecommendation("Recommendation B-C-A");
        break;
      case "B-C-B":
        setRecommendation("Recommendation B-C-B");
        break;
      case "B-C-C":
        setRecommendation("Recommendation B-C-C");
        break;
      case "C-A-A":
        setRecommendation("Recommendation C-A-A");
        break;
      case "C-A-B":
        setRecommendation("Recommendation C-A-B");
        break;
      case "C-A-C":
        setRecommendation("Recommendation C-A-C");
        break;
      case "C-B-A":
        setRecommendation("Recommendation C-B-A");
        break;
      case "C-B-B":
        setRecommendation("Recommendation C-B-B");
        break;
      case "C-B-C":
        setRecommendation("Recommendation C-B-C");
        break;
      case "C-C-A":
        setRecommendation("Recommendation C-C-A");
        break;
      case "C-C-B":
        setRecommendation("Recommendation C-C-B");
        break;
      case "C-C-C":
        setRecommendation("Recommendation C-C-C");
        break;
      default:
        setRecommendation("No clear recommendation");
    }
  }, [answer1, answer2, answer3]);

  return (
    <div>
      <Screen content={recommendation} />
      <div className="button-container">
        {["A", "B", "C"].map(text => (
          <Button key={text} buttonText={text} onClick={handleAnswer1} />
        ))}
      </div>
      {answer1}
      <div className="button-container">
        {["A", "B", "C"].map(text => (
          <Button key={text} buttonText={text} onClick={handleAnswer2} />
        ))}
      </div>
      {answer2}
      <div className="button-container">
        {["A", "B", "C"].map(text => (
          <Button key={text} buttonText={text} onClick={handleAnswer3} />
        ))}
      </div>
      {answer3}
    </div>
  );
};