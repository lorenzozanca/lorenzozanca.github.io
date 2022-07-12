const testa = document.querySelector("section.testa")

var sceneHeader = new THREE.Scene();
var cameraHeader = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
cameraHeader.position.set(0, 0, 4);
var rendererHeader = new THREE.WebGLRenderer({
antialias: true
});

rendererHeader.setSize(window.innerWidth, window.innerHeight);
testa.appendChild(rendererHeader.domElement);

ambientHeader = new THREE.AmbientLight(0xffffff)
sceneHeader.add(ambientHeader)

lightHeader = new THREE.DirectionalLight(0x60f542, 0.5)
lightHeader.position.set(0, 6, 0)
sceneHeader.add(lightHeader)

const materialHeader = new THREE.MeshPhysicalMaterial({  
clearcoat: 0.6,
metalness: 0,
roughness: 0.2,
transmission: 1,
thickness: 1,
});

const textureLoaderNormal = new THREE.TextureLoader();
const normalMapTexture = textureLoaderNormal.load("../../../media/normalRought.webp");
normalMapTexture.wrapS = THREE.RepeatWrapping;
normalMapTexture.wrapT = THREE.RepeatWrapping;

const materialHeader2 = new THREE.MeshPhysicalMaterial({
    depthTest: true,
    depthWrite: false,
    emissive: 0x00211b,
    clearcoat: 0.8,
    clearcoatRoughness: 0.01,
    reflectivity: 0.4,
    metalness: 0, 
    roughness: 0.25,  
    transmission: 0.99,  
    thickness: 1,

    normalMap: normalMapTexture,  
    clearcoatNormalMap: normalMapTexture,
    });

const geometrySphere = new THREE.SphereGeometry( 1.75, 64, 64 );
const sphereA = new THREE.Mesh( geometrySphere, materialHeader2 );
sphereA.position.set(1.5, 1, -1);
sceneHeader.add( sphereA );

let uniforms;
const geometryD = new THREE.PlaneGeometry(30, 30);

clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();
const MapTexture = textureLoader.load("../../../media/background.jpg");

uniforms = {
                "time": { value: 1.0 },
                "colorTexture": { value: new THREE.TextureLoader().load( '../../../media/background.jpg' ) }
            };

uniforms[ "colorTexture" ].value.wrapS = uniforms[ "colorTexture" ].value.wrapT = THREE.RepeatWrapping;
            
const materialD = new THREE.MeshPhysicalMaterial( {
  map:MapTexture,

  normalMap: MapTexture,  
  clearcoatNormalMap: MapTexture,
} );

const meshD = new THREE.Mesh( geometryD, materialD );
meshD.position.x = 4;
meshD.position.y = 4;
meshD.position.z = -12;
sceneHeader.add( meshD );

window.addEventListener("mousemove", onmousemoveheader, false);

var planeHeader = new THREE.Plane(new THREE.Vector3(0, 1, 1), 0);
var raycasterHeader = new THREE.Raycaster();
var mouseHeader = new THREE.Vector2();
var intersectPointHeader = new THREE.Vector3();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
    cameraHeader.aspect = window.innerWidth / window.innerHeight;
    cameraHeader.updateProjectionMatrix();
    rendererHeader.setSize( window.innerWidth, window.innerHeight );
}

function onmousemoveheader(event) {
  mouseHeader.x = (event.clientX / window.innerWidth) * 0.5 - 1;
  mouseHeader.y = -(event.clientY / window.innerHeight) * 0.5 + 1;
  raycasterHeader.setFromCamera(mouseHeader, cameraHeader);
  raycasterHeader.ray.intersectPlane(planeHeader, intersectPointHeader);
  sphereA.lookAt(intersectPointHeader);

  var Xpoint = (mouseHeader.x * 2) + 1.5;
  var Ypoint = mouseHeader.y * 2 - 1.5;

  sphereA.position.x = 1.5 + Xpoint/2;
  sphereA.position.y = 1 + Ypoint/2;
  // console.log(sphereA.position.x-1.5, sphereA.position.y-1);
}

renderHeader();

function renderHeader() {
  requestAnimationFrame(renderHeader);
  rendererHeader.render(sceneHeader, cameraHeader);
  
  const delta = clock.getDelta();
  uniforms[ 'time' ].value += 0.05 * delta;

  meshD.rotation.z += delta * 0.06

  //menuHeader.rotation.z += delta * 0.1

  sphereA.rotation.z += delta * 0.05
}