class Circle {
	constructor(radius) {
		this.radius = radius
	}

	get circumference() {
		return this.radius*(2*Math.PI)
	}

	set circumference(circ) {
		this.radius = circ/(2*Math.PI)
	}

	get diameter() {
		return this.radius*2
	}

	set diameter(diam) {
		this.radius = diam/2
	}

	get area() {
		return this.radius*this.radius*Math.PI
	}

	set area(area) {
		this.radius = Math.sqrt(area/(Math.PI))
	}

}// Add your Circle class here