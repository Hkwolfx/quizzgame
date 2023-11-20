import React, { useState, useEffect } from 'react';
import { JestTestResults } from './testResultTypes';


const TestResults = () => {
  const [testResults, setTestResults] = useState<JestTestResults | null>(null);

  useEffect(() => {
    fetch('/testResults.json')
      .then(response => response.json())
      .then((data: JestTestResults) => setTestResults(data))
      .catch(error => console.error('Error fetching test results:', error));
  }, []);

  if (!testResults) return <div>Loading test results...</div>;

  return (
    <div className='TestLights'>
      {testResults.testResults.map((suite, index) => (
        <div key={index}>
          {/* <h3>{suite.name} - {suite.status}</h3> */}
          {suite.assertionResults && suite.assertionResults.length > 0 ? (
            suite.assertionResults.map((test, index) => (
              <div key={index}>
                {test.status === 'passed' ? '🟢' : '🔴'}
                 {/* {test.fullName} */}
              </div>
            ))
          ) : (
            <div>{suite.status === 'passed' ? '🟢' : '🔴'} No test results available</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TestResults;
