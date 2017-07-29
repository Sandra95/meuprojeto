

const list = require('listr');

exports.printMsg = function() {
  console.log("Este é o modulo do meu first package");

  const tasks = new list([
		{
			title: 'Experiment',
			task: () => console.log("Almost there")
		}
	], {

	});


  return tasks.run()
		.then(() => console.log("Running tasks"))
}
