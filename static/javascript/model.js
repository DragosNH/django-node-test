import * as THREE from 'https://esm.sh/three@0.158.0';
import { OrbitControls } from 'https://esm.sh/three@0.158.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://esm.sh/three@0.158.0/examples/jsm/loaders/GLTFLoader.js';

export function houseModel() {
    const houseModel = document.querySelector(".houseModel");

    // Scene
    const scene = new THREE.Scene();
    const width = houseModel.clientWidth;
    const height = houseModel.clientHeight;
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    scene.background = null;


    camera.position.set(15, 0, 15);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(houseModel.clientWidth, houseModel.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    houseModel.appendChild(renderer.domElement);

    // Orbit control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;

    let isUserInteracting = false;
    let resumeTimeout = null;

    controls.addEventListener('start', () => {
        isUserInteracting = true;
        clearTimeout(resumeTimeout); 
    });

    controls.addEventListener('end', () => {
        resumeTimeout = setTimeout(() => {
            isUserInteracting = false;
        }, 1000);
    });


    // Light 
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Directional light (like the sun)
    const light1 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(-10, -10, -10);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 0.5);
    light3.position.set(0, 10, -10);
    scene.add(light3);

    // Objects
    let house = null;

    const loader = new GLTFLoader();
    loader.load('/static/images/House.glb', function (gltf) {
        house = gltf.scene;
        house.position.y = -3;
        scene.add(house);
    }, undefined, function (e) {
        console.error(e);
    });

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

        if (house && !isUserInteracting) {
            house.rotation.y += 0.007;
        }

        renderer.render(scene, camera);
    }
    animate();
}