class Test {
  execute(testCases, testFunction) {
    testCases.foreach(testFunction(testCase));
  }
}

export default Test
