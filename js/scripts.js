let trainedNet;

function encode(arg) {
  return arg.split("").map(x => x.charCodeAt(0) / 255);
}

function processTrainingData(data) {
  return data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    };
  });
}

function train(data) {
  let net = new brain.NeuralNetwork();
  net.train(processTrainingData(data));
  trainedNet = net.toFunction();
  document.getElementById("training-status").innerHTML = "Finished Training...";
  console.log("Finished Training...");
}

function execute(input) {
  let results = trainedNet(encode(input));
  let output;
  results.trump > results.kardashian
    ? (output = "Trump")
    : (output = "Kardashian");
  return output;
}

train(trainingData);

newTweet = "These aren't real. Kanye would never write Yeezy on the side";

document.getElementById("input-tweet").innerHTML = newTweet;

document.getElementById("result").innerHTML = execute(newTweet);

console.log(
  execute("These aren't real. Kanye would never write Yeezy on the side")
);
