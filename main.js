import * as THREE from 'three';
import salesman from './modules/salesman';
import { GUI } from 'dat.gui';

// Création de la scène
var scene = new THREE.Scene();
scene.background = new THREE.Color('black');

var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight);
camera.position.z = 70;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

// Lights
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(ambientLight);

let pointLight = new THREE.PointLight(0xFFFF00, 5);
scene.add(pointLight);

// GUI
const gui = new GUI();

// Add a folder: it is a dropdown button
const cameraPositionFolder = gui.addFolder('Camera');

// It adds inside the folder a modifiable field
// Here it is the z coordinate of the camera.
// 
// Params:
// 1 - An object (camera.position).
// It needs to have different fields which is the case here (x, y, z).
// 2 - The field of the object given in -1-.
// It has to exist in the given object.
//
// For a slider, add two more values :
// 3 - min value
// 4 - max value
// 5 - optional: step (smallest increment possible), default: 0.1
cameraPositionFolder.add(camera.position, 'z', 50, 90);

// You can open the folder by default with: folderName.open();
// Ex: cameraPositionFolder.open();

// Create an animation loop
const animate = () => {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

animate();

salesman.init();

scene.add(salesman.anchor);

let result = salesman.generate();
console.log(result);