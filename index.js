import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import vertexShader from "./shader/vertexShader.glsl";
import fragmentShader from "./shader/fragmentShader.glsl";
import { ShaderMaterial } from "three";

import * as dat from "dat.gui";
const gui = new dat.GUI();

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./texture/da.jpeg");
const canvas = document.getElementById("canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.offsetWidth / canvas.offsetHeight,
  0.1,
  1000
);

const helper = new THREE.AxesHelper(3);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  // alpha: true,
});
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
canvas.appendChild(renderer.domElement);
const control = new OrbitControls(camera, renderer.domElement);
const geometry = new THREE.SphereGeometry(2, 64, 64);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTexture: {
      value: texture,
    },
    uTime: {
      value: 0,
    },
    uScale: {
      value: 50,
    },
  },
  transparent: true,
  // wireframe: true,
  side: THREE.DoubleSide,
});

gui.add(shaderMaterial.uniforms.uScale, "value", 10, 100).step(1);

const material = new THREE.MeshBasicMaterial({ color: "#4272D3" });

const cube = new THREE.Mesh(geometry, shaderMaterial);
scene.add(cube, helper);

console.log(cube);

camera.position.set(2, 2, 2);

const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();
  shaderMaterial.uniforms.uTime.value = elapsedTime;
  requestAnimationFrame(animate);
  control.update();
  renderer.render(scene, camera);
}

animate();
