import React from "react";
import { useEffect } from "react";
import axios from "axios";

const TestComponent = () => {
  const ResultList = async () => {
    console.log("1");

    let id = "wnsdn0924";
    const response = await axios
      .get(`/api/v1/report/result-list/${id}`)
      .then(res => {
        console.log(res);
        // setResultList(res.data.DATA);
      })
      .then(() => {
        // setExams(resultList.map(e => e.EXM_NUMBER));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    ResultList();
  }, []);
  return <div></div>;
};

export default TestComponent;