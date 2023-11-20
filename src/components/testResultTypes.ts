// testResultTypes.ts
export type AssertionResult = {
    fullName: string;
    status: 'passed' | 'failed';
    // Ajoutez d'autres champs si nécessaire
  };
  
  export type TestSuiteResult = {
    name: string;
    status: 'passed' | 'failed';
    assertionResults: AssertionResult[];
    // Ajoutez d'autres champs si nécessaire
  };
  
  export type JestTestResults = {
    success: boolean;
    testResults: TestSuiteResult[];
    // Ajoutez d'autres champs si nécessaire
  };
  