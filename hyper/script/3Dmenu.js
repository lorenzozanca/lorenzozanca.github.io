const sectionMenu = document.querySelector("section.menuEEE")

var sceneMenu = new THREE.Scene();
var cameraMenu = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
cameraMenu.position.set(0, 0, 50);

var rendererMenu = new THREE.WebGLRenderer({
    // alpha: true,
    antialias: true
});

rendererMenu.setSize(window.innerWidth, window.innerHeight);
rendererMenu.setClearColor( 0x111111, 1 ); 
sectionMenu.appendChild(rendererMenu.domElement);

// ambientMenu = new THREE.AmbientLight(0x666666)
// sceneMenu.add(ambientMenu)

lightMenu = new THREE.DirectionalLight(0x42c8f5)
lightMenu.position.set(0, 0, 15)
sceneMenu.add(lightMenu)

lightMenu2 = new THREE.DirectionalLight(0xf5424b)
lightMenu2.position.set(15, 0, 0)
sceneMenu.add(lightMenu2)

lightMenu3 = new THREE.DirectionalLight(0x60f542, 1)
lightMenu3.position.set(0, 2, 0)
sceneMenu.add(lightMenu3)

lightMenu4 = new THREE.DirectionalLight(0xce42f5, 1)
lightMenu4.position.set(0, -2, 0)
sceneMenu.add(lightMenu4)

const LOGOGeometry = new THREE.PlaneGeometry(15, 15);

const materialMenu = new THREE.MeshPhysicalMaterial({ 
roughness: 0.1,  
transmission: 1,  
thickness: 0.1,
});

clock2 = new THREE.Clock();

const materialMenu2 = new THREE.MeshPhysicalMaterial({ 
  // transparent: true,
  // opacity: 0.5, 
  // depthTest: false,
  // depthWrite: true,
  color: 0xcdd1d1,
  emissive: 0x000806,
  clearcoat: 0.8,
  clearcoatRoughness: 0.01,
  reflectivity: 0.4,
  metalness: 0, 
  roughness: 0.25,  
  transmission: 0.99,  
  thickness: 1,

  // normalMap: normalMapTexture,  
  // clearcoatNormalMap: normalMapTexture,
  });

let loaderMenu = new THREE.GLTFLoader();

let menu;

loaderMenu.load('../../../media/gltf/def.gltf', function(gltf){
    menu = gltf.scene;
    menu.traverse((o) => {
    if (o.isMesh) o.material = materialMenu2;
    });
    menu.lookAt(new THREE.Vector3(0, 0, 0));
    sceneMenu.add(menu);
})

window.addEventListener("mousemove", onmousemove, false);

var plane = new THREE.Plane(new THREE.Vector3(0, 1, 1), 0);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var intersectPoint = new THREE.Vector3();

var medium = new THREE.Vector3();

function onmousemove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, cameraMenu);
  raycaster.ray.intersectPlane(plane, intersectPoint);
  menu.lookAt(intersectPoint);
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
    cameraMenu.aspect = window.innerWidth / window.innerHeight;
    cameraMenu.updateProjectionMatrix();
    rendererMenu.setSize( window.innerWidth, window.innerHeight );
}

sceneMenu.background = null;


render();

function render() {
  requestAnimationFrame(render);
  rendererMenu.render(sceneMenu, cameraMenu);

  const delta = clock2.getDelta();

  if(menu){
    menu.rotation.z += delta * 0.5;
  }
}