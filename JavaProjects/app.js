function Stopwatch () {
	let starTime, endTime, running, duration = 0;

	this.start = function() {
	 if(running)
		throw new Error('Stopwatch has already started in my counter')
		
		running = true;

		startTime = new Date();	
	}
	
	this.stop = function() {
	 if(!running)
		throw new Error ('Stopwatch is not started in my counter.')

		running = false;
		
		endTime = new Date();

		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

		duration = duration + seconds;
	}

	this.reset = function() {
		startTine = null;
		endTine = null;
		running = false;
		duration = 0;

	}
	
	Object.defineProperty(this, 'duration', {
	
	get: function() { return duration; }
	})
}

 const sw = new Stopwatch();

	for (let key in Stopwatch){
	console.log(key);
}