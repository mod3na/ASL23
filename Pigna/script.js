var pignaClass;

window.onload = function(){
    pignaClass = document.querySelector('#Livello_1 .cls-1');
}


function animate(cube,scene,camera,renderer) {
	requestAnimationFrame( animate );

    cube1.rotation.y += 0.01;
    cube1.rotation.x += 0.01;
        
	renderer1.render( scene1, camera1 );

}

function createScene(){
    const scene = new THREE.Scene();
    return scene;
}
function createCanvas(){
    const canvas = document.querySelector('#c');
    return canvas;
}

function createRenderer(canvas){
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    return renderer;
}

function createCamera(){
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    return camera;
}

function creaCubo(scene,camera,renderer){

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

function addCubeToScene(cube,scene,renderer,camera){
    scene.add(cube);
    renderer.render(scene, camera);
    return scene;
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)

    if(scroll >= (window.scrollY + document.querySelector('#Livello_1').getBoundingClientRect().top)){
        pignaClass.style.fill = 'red' 
    }else if(scroll < (window.scrollY + document.querySelector('#Livello_1').getBoundingClientRect().top)){
        pignaClass.style.fill = '#93c01f'
    }
    console.log(pignaClass.style.fill)
});

let canvas1 = createCanvas();
let scene1 = createScene();
let renderer1 = createRenderer(canvas1);
let camera1 = createCamera();
let cube1 = creaCubo(scene1,camera1,renderer1);
let scene2 = addCubeToScene(cube1,scene1,renderer1,camera1)
animate(cube1,scene2,camera1,renderer1);
