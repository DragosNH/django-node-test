import * as THREE from 'https://esm.sh/three@0.158.0';
import { OrbitControls } from 'https://esm.sh/three@0.158.0/examples/jsm/controls/OrbitControls.js';

export function houseModel() {
    const houseModel = document.querySelector(".houseModel");

    // Scene
    const scene = new THREE.Scene();
    const width = houseModel.clientWidth;
    const height = houseModel.clientHeight;
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);

    camera.position.set(0, 0, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(houseModel.clientWidth, houseModel.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    houseModel.appendChild(renderer.domElement);

    // Orbit control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Objects
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x0ff0f0 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    window.addEventListener('resize', () => {
        const width = houseModel.clientWidth;
        const height = houseModel.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });


    function animate() {
        requestAnimationFrame(animate);
        controls.update(); 
        renderer.render(scene, camera); 
    }
    animate();
    console.log("test");
}