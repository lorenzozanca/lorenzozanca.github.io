const section = document.querySelector("section.BG3D")

let sceneBG, cameraBG, rendererBG;

sceneBG = new THREE.Scene();
cameraBG = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
cameraBG.position.x = -55;
cameraBG.position.z = 85;
cameraBG.position.y = 15;

ambientBG = new THREE.AmbientLight(0xb8b6b6)
sceneBG.add(ambientBG)

lightBG = new THREE.DirectionalLight(0x5dc7be)
lightBG.position.set(0, 0, 15)
sceneBG.add(lightBG)

lightBG2 = new THREE.DirectionalLight(0xffffff)
lightBG2.position.set(15, 0, 0)
sceneBG.add(lightBG2)

lightBG3 = new THREE.DirectionalLight(0x5dc7be)
lightBG3.position.set(0, 15, 15)
sceneBG.add(lightBG3)

lightBG4 = new THREE.DirectionalLight(0xffffff)
lightBG4.position.set(0, -15, 0)
sceneBG.add(lightBG4)

rendererBG = new THREE.WebGLRenderer({
    // alpha: true,
    antialias: true
});

rendererBG.setSize(window.innerWidth, window.innerHeight);
rendererBG.setClearColor( 0x111111, 1 ); 

section.appendChild(rendererBG.domElement);

const materialBG = new THREE.MeshPhysicalMaterial({  
    emissive: 0x030303,
    roughness: 0.3,  
    transmission: 1,  
    thickness: 0.7,
    });

const materialnuovo = new THREE.MeshStandardMaterial({  
    color: 0x000000,
    emissive: 0x030303,
    roughness: 0.3,
    });

let loaderBG = new THREE.GLTFLoader();

let oggetto;

loaderBG.load('../../../media/gltf/untitled.gltf', function(gltf){
    oggetto = gltf.scene;
    oggetto.traverse((o) => {
    if (o.isMesh) o.material = materialnuovo;
    });
    sceneBG.add(oggetto);
})

let currentTimeline = window.pageYOffset / 3000
let aimTimeline = window.pageYOffset / 3000

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
    cameraBG.aspect = window.innerWidth / window.innerHeight;
    cameraBG.updateProjectionMatrix();
    rendererBG.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame(animate);

    currentTimeline += (aimTimeline - currentTimeline) * 0.1

    let rx = 0
    let ry = 0
    let rz = 0

    // var current = new Date();
    // var secondi = current.getSeconds();
    // var milli = current.getMilliseconds();

    rx = currentTimeline * -0.5 + 0.5
    ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 2

    // if (currentTimeline > 0.95) {
    //     ry = ry * 2
    // }

    if(oggetto){
        oggetto.rotation.set(rx, ry, rz)
      }
    
    // sceneBG.rotation.set(rx, ry, rz)
    rendererBG.render(sceneBG, cameraBG);
}
animate();

window.addEventListener("scroll", function() {
    aimTimeline = window.pageYOffset / 3000
})