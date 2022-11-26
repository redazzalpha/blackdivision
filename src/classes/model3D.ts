import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default class Model3D {
    canvas: any;
    model3D: any;
    width = 320;
    height = 150;

    rotationXSpeed = 0.0007;
    rotationYSpeed = 0.0008;
    rotationZSpeed = 0.0005;
    upDownSpeed = 0.00001;
    leftRightSpeed = 0.00003;

    rotationXLimit = 0.12;
    rotationYLimit = 0.1;
    rotationZLimit = 0.1;
    upDownLimit = 0.01;
    leftRightLimit = 0.01;

    rotationXDir = true;
    rotationYDir = true;
    rotationZDir = true;
    leftRightDir = true;
    upDownDir = true;

    fullRotationYOn = false;
    rotationXOn = true;
    rotationYOn = true;
    rotationZOn = true;
    leftRightOn = true;
    upDownOn = true;

    fov = 75;
    near = 0.1;
    far = 1000;
    cameraPositionZ = 0.27;

    spotLight = new THREE.SpotLight(0xffffff, 2);
    loader = new GLTFLoader();
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    camera = new THREE.PerspectiveCamera(
        this.fov,
        this.width / this.height,
        this.near,
        this.far
    );

    constructor(modelPath: string, containerClass: string, loadCallBack?: () => void) {
        this.setup(containerClass);
        this.load3D(modelPath, loadCallBack);
    }

    setup(containerClass: string) {
        const container = document.querySelector(containerClass);
        this.camera.position.z = this.cameraPositionZ;
        this.spotLight.position.set(100, 10, 100);
        this.scene.add(this.spotLight);
        this.renderer.setSize(this.width, this.height);
        this.renderer.render(this.scene, this.camera);
        container?.appendChild(this.renderer.domElement);
        this.canvas = this.renderer.domElement;
    }
    load3D(modelPath: string, loadCallBack?: () => void) {
        this.loader.load(
            modelPath,
            (gltf: any) => {
                this.model3D = gltf.scene;
                this.scene.add(this.model3D);
                this.camera.updateProjectionMatrix();
                this.renderer.render(this.scene, this.camera);
                if (loadCallBack) loadCallBack();
            },
            undefined,
            (error: any) => console.log(error)
        );
    }
    animate() {
        if (this.model3D != undefined) {
            this.fullRotationY();
            this.rotationX();
            this.rotationY();
            this.rotationZ();
            this.leftRight();
            this.upDown();
        }
        this.renderAnimate();
    }
    renderAnimate() {
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            this.width / this.height,
            this.near,
            this.far
        );
        this.camera.position.z = this.cameraPositionZ;
        this.renderer.setSize(this.width, this.height);
        this.renderer.render(this.scene, this.camera);
    }
    fullRotationY() {
        if (this.fullRotationYOn)
            this.model3D.rotation.y += this.rotationYSpeed;
    }
    rotationX() {
        if (this.rotationXOn) {
            if (this.rotationXDir) {
                this.model3D.rotation.x += this.rotationXSpeed;
                if (this.model3D.rotation.x >= this.rotationXLimit) this.rotationXDir = false;
            } else {
                this.model3D.rotation.x -= this.rotationXSpeed;
                if (this.model3D.rotation.x <= -this.rotationXLimit) this.rotationXDir = true;
            }
        }
    }
    rotationY() {
        if (this.rotationYOn) {
            if (this.rotationYDir) {
                this.model3D.rotation.y += this.rotationYSpeed;
                if (this.model3D.rotation.y >= this.rotationYLimit) this.rotationYDir = false;
            } else {
                this.model3D.rotation.y -= this.rotationYSpeed;
                if (this.model3D.rotation.y <= -this.rotationYLimit) this.rotationYDir = true;
            }
        }
    }
    rotationZ() {
        if (this.rotationZOn) {
            if (this.rotationZDir) {
                this.model3D.rotation.z += this.rotationZSpeed;
                if (this.model3D.rotation.z >= this.rotationZLimit) this.rotationZDir = false;
            } else {
                this.model3D.rotation.z -= this.rotationZSpeed;
                if (this.model3D.rotation.z <= -this.rotationZLimit) this.rotationZDir = true;
            }
        }
    }
    leftRight() {
        if (this.leftRightOn) {
            if (this.leftRightDir) {
                this.model3D.position.x += this.leftRightSpeed;
                if (this.model3D.position.x >= this.leftRightLimit) this.leftRightDir = false;
            } else {
                this.model3D.position.x -= this.leftRightSpeed;
                if (this.model3D.position.x <= -this.leftRightLimit) this.leftRightDir = true;
            }
        }
    }
    upDown() {
        if (this.upDownOn) {
            if (this.upDownDir) {
                this.model3D.position.y += this.upDownSpeed;
                if (this.model3D.position.y >= this.upDownLimit) this.upDownDir = false;
            } else {
                this.model3D.position.y -= this.upDownSpeed;
                if (this.model3D.position.y <= -this.upDownLimit) this.upDownDir = true;
            }
        }
    }
}