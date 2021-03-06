export const processSpeech = (transcript, suspiciousDict) => {
  const transcriptArr = transcript.toLowerCase().split(" ");
  const filteredResult = transcriptArr.filter((item) =>
    suspiciousDict.includes(item)
  );
  return filteredResult;
};
