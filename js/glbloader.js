
var load_flag = false

function gltf_loader() {
    // 載入 loader
    const loader = new THREE.GLTFLoader()
    // Load a glTF resource
    loader.load(
        'image/high_detailed_flying_bird.glb',
        // 'gltf/dog_glb/playful_dog.glb',

        // called when the resource is loaded
        function (gltf) {
            gltf = gltf
            dogObj = gltf.scene
            dogObj.rotation.y = Math.PI / 8;
            dogObj.position.y = 0;

            dogObj.scale.set(10, 10, 10);

            // 設定陰影
            dogObj.traverse(function (object) {
                if (object instanceof THREE.Mesh) {
                    object.castShadow = true
                    object.receiveShadow = true
                }
            })

            scene.add(dogObj);
            load_flag = true
            console.log(gltf)
        },
        // called while loading is progressing
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // called when loading has errors
        function (error) {
            console.log('An error happened:' + error);
        }
    )
}