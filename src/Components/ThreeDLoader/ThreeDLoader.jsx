import React , { Component } from 'react';
import * as THREE  from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import cat  from '../../models/catplus.obj';
import catmtl  from '../../models/catplus.mtl';
import { Int8Attribute } from "three";
// import {ButtonStyled,
//     NavBarContainer,
// Video,
// Image,
// Image2,
// TextStyled} from "./Styled"
export default class ThreeDLoader extends Component {
    
    componentDidMount() {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z =10;
const renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
const container = document.getElementById('header-container');
container.appendChild(renderer.domElement);
 const controls = new OrbitControls(camera, renderer.domElement);
 controls.enableDamping = true;
controls.dampingFactor = 1;
controls.enableZoom = true;
    

const loadObjModel = (materialURL, objectURL) => {
  new MTLLoader().load(materialURL, materials => {   

    materials.preload();
    //materials.Material.side = THREE.DoubleSide;
    console.log("Loaded Materials");
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      objectURL,
      object => {
        //const root = object.detail.loaderRootNode;
        console.log("Loaded Obj" + object);
        let mesh = object;
        scene.add(object);
        mesh.position.set(0, -13, 0);
        mesh.scale.set(1.5, 1.5, 0.07);
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      error => {
        console.log("An error happened" + error);
      }
    );
  });
};

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), .5);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.3);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, .2);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);


loadObjModel(catmtl, cat);

    
    var animate = function () {
    requestAnimationFrame(animate);  
    controls.update();
    renderer.render(scene, camera);
};

animate();
    }

    render () {
        return (
          <div id="header-container">
          </div>
        );
    }
  }

  