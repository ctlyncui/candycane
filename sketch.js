let world;

let canes = [];

// let sensor;

function setup(){
	noCanvas();

	world = new World('VRScene');

	let sky = new Sky({
		asset: 'sky1'
	});
	world.add(sky);

	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'tile',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90
					   });

	// add the plane to our world
	//g.tag.object3D.userData.solid = true;
	world.add(g);

	//add external models if any
	cabin = new OBJ({
		asset: 'cabin_obj',
		mtl: 'cabin_mtl',
		x: 0,
		y: 2,
		z: -5,
		scaleX:3.2,
		scaleY:3.2,
		scaleZ:3.2,
		rotationY:-90
	});
	//cabin.tag.object3D.userData.solid = true;
	world.add(cabin);

	for(let i = 0;i<1;i++){
		canes.push(new CandyCane());
	}
	//world.add(temp);

	// sensor = new Sensor();
}


function draw(){
	for(let i = 0;i<1;i++){
		let pos = world.getUserPosition();
		//let poss = new THREE.Vector3(pos.x,pos.y,pos.z);

		//let loc = canes[i].getWorldPosition();
		//let dist = poss.distanceTo(loc);
		//let distance = sqrt((pos.x - canes[i].x)*M + (pos.y - canes[i].y)^2 +(pos.z - canes[i].z)^2);
		let distance = dist(pos.x,pos.z,canes[i].x,canes[i].z);
		console.log(distance);
		console.log(pos.x,pos.z,canes[i].x,canes[i].z);
		console.log(canes[i].container.getX(),canes[i].container.getZ());
		if(distance <2){
			//console.log(distance);
			canes[i].container.spinY(2);
		}
	}
}

class CandyCane{

	constructor(){
		this.x = random(-50,50);
		this.z = random(-50,50);
		this.y = 0.1;

		this.container = new Container3D({
			x:this.x, y:0.1, z:this.z
		});
	    //this.container.tag.object3D.userData.solid = true;
		world.add(this.container);

		for (let i=0;i<10;i++){
			if(i%2 == 0){
				let white = new Box({
					x:0,y:i+0.5,z:0,
					width:1,height:1,depth:1,
					red:255,green:255,blue:255
				});	
				this.container.addChild(white);
			}
			else{			
				let red = new Box({
					x:0,y:i+0.5,z:0,
					width:1,height:1,depth:1,
					red:255,green:0,blue:0
				});		
				this.container.addChild(red);
			}
		}

		let white = new Box({
			x:1,y:10.5,z:0,
			width:1,height:1,depth:1,
			red:255,green:255,blue:255
		});	
		this.container.addChild(white);

		let red = new Box({
					x:2,y:10.5,z:0,
					width:1,height:1,depth:1,
					red:255,green:0,blue:0
		});		
		this.container.addChild(red);

		let white2 = new Box({
			x:3,y:9.5,z:0,
			width:1,height:1,depth:1,
			red:255,green:255,blue:255
		});	
		this.container.addChild(white2);

		let red2 = new Box({
					x:3,y:8.5,z:0,
					width:1,height:1,depth:1,
					red:255,green:0,blue:0
		});		
		this.container.addChild(red2);

		var scale = random(0.5,2.0);
		this.container.setScale(scale,scale,scale);
	}


}