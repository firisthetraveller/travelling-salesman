let __SETTINGS__ = {
	pointsCount: 20,
	populationMax: 100,
	mutationFrequency: 0.15,
	crossFrequency: 0.85
};

let __POINTS__ = [];

/**
 * Represents a Path in the Travelling Salesman Problem.
 * 
 * Ex: [5, 6, 1, 2,...] is the path beginning by the 5th point, then going
 * to the 6th, then the first and so on.
 */
class Path {
	/**
	 *
	 * @param {Array} pointIndex ordered point index
	 */
	constructor(pointIndex) {
		this.pointIndex = pointIndex;
	}

	length() {
		let score = 0.0;

		for (let i = 0; i < this.pointIndex.length - 1; i++) {
			score += __POINTS__[this.pointIndex[i]].distanceTo(__POINTS__[this.pointIndex[i + 1]]);
		}

		return score;
	}
}

const api = {
	init: (settings) => {
		__SETTINGS__ = settings;
	},
	init: (pointsCount, populationMax, mutationFrequency, crossFrequency) => {
		__SETTINGS__.pointsCount = 20;
		__SETTINGS__.populationMax = populationMax;
		__SETTINGS__.mutationFrequency = mutationFrequency;
		__SETTINGS__.crossFrequency = crossFrequency;
	},
	/**
	 * Returns a (hopefully) good solution to the Travelling Salesman problem
	 * @param {function} render Rendering callback to show mid results
	 */
	generate: (render, points = []) => {
		// Points
		if (points.length == 0) {
			points = [] // Avoids duplicates in later generations
			for (let i in __SETTINGS__.pointsCount) {
				points[i] = new THREE.Vector3(
					Math.random(),
					Math.random(),
					Math.random()
				);
			}
		}

		// Population init
		let population = [];

		for (let i in __SETTINGS__.pointsCount) {
			population[i] = // generate path
		}
	}
};

export default api;