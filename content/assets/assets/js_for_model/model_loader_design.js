// GetUrlParam 函数定义
function GetUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");
            if (arr != null && arr[0] === paraName) {
                return arr[1];
            }
        }
        return "";
    } else {
        return "";
    }
}


let model_style = GetUrlParam("name");
let style_id = GetUrlParam("style");
//like "guitar_style_3"
let model_id = model_style + "_style_" + style_id;
let model_name = "model_design_piano.gltf";

console.log("加载的模型是：", model_id);

// guitar
if (model_id === "guitar_style_1") {
    model_name = "model_design_guitar1.gltf";
} else if (model_id === "guitar_style_2") {
    model_name = "model_design_guitar2.gltf";
} else if (model_id === "guitar_style_3") {
    model_name = "model_design_guitar3.gltf";
}
// piano
else if (model_id === "piano_style_1") {
    model_name = "model_design_piano1.gltf";
} else if (model_id === "piano_style_2") {
    model_name = "model_design_piano2.glb";
} else if (model_id === "piano_style_3") {
    model_name = "model_design_piano3.gltf";
}

//other
else if (model_id === "guitar_style_5") {
    model_name = "model_design_drumSet.glb";
} else {
    let info = "访问格式：http://127.0.0.1:8000/model_design/color?name=guitar&style=1";
    console.log(model_id, info);
    model_name = "model_design_piano.gltf";
}

if (!Detector.webgl) Detector.addGetWebGLMessage();
// let stats;
let camera, scene, renderer, controls;
let raycaster = new THREE.Raycaster();

let mouse = new THREE.Vector2();
let selectedObjects = [];

let composer, effectFXAA, outlinePass;
let obj3d = new THREE.Object3D();

let group = new THREE.Group();

let params = {
    edgeStrength: 3.0,
    edgeGlow: 0.0,
    edgeThickness: 1.0,
    pulsePeriod: 0,
    rotate: false,
    usePatternTexture: false
};
var model_state = "default";

function allSelected() {
    if (selectedObjects) {
        selectedObjects = scene.children[scene.children.length - 1].children[0].children[0].children;
        outlinePass.selectedObjects = selectedObjects;
    }
}

function clearSelected() {
    console.log(selectedObjects);
    if (selectedObjects) {
        selectedObjects = [];
        outlinePass.selectedObjects = selectedObjects;
    }
}

function zoomIn() {
    camera.fov = camera.fov + 5;
}

function zoomOut() {
    camera.fov = camera.fov - 5;
}


var rotate_avail = false;

function switchRotate() {
    console.log(rotate_avail);
    rotate_avail = !rotate_avail
}

// Init gui
function mergeModel() {
    // find the mesh of loaded model to iterater
    if (model_state === "split" || model_state === "default") {
        return;
    } else {
        model_state = "split";
    }
    scene.children[scene.children.length - 1].children[0].children[0].children.forEach(function (mesh) {
        specific_model_merge(mesh, model_id);
    })
}

function splitModel() {
    if (model_state === "merge") {
        return;
    } else {
        model_state = "merge";
    }
    scene.children[scene.children.length - 1].children[0].children[0].children.forEach(function (mesh) {
        specific_model_split(mesh, model_id);
    })
}

function changeColor(new_color) {
    // console.log("onChange for selected color:", selectedObjects, new_color);
    //selectedObjects[0].material.color = value;
    selectedObjects.forEach(function (item) {
        item.material.color = new THREE.Color(new_color);
    })
    // selectedObjects[0].material.color = new THREE.Color(new_color);
}


init();
animate();
let state_changeColor = false;

function init() {
    container = document.createElement('div');

    $(".model-show-wrapper").append(container);

    let width = (window.innerWidth / 3) * 2;
    let height = window.innerHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: false,
        //是否保留缓冲区直到手动清除或覆盖
        preserveDrawingBuffer: true
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(width, height);
    let cssStyle = "width:100%; height:100%";
    renderer.domElement.style = cssStyle;
    renderer.domElement.className = "model-wrapper";
    renderer.domElement.id = "model-wrapper";
    container.append(renderer.domElement);

    scene = new THREE.Scene();
    scene.background = new THREE.Color('#cbccce');
    scene.fog = new THREE.Fog(scene.background, 1, 100);


    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;


    scene.add(new THREE.AmbientLight(0xebebeb));

    var light = new THREE.DirectionalLight(0xffffff, 0.7);
    light.position.set(0, 1, 1);

    light.castShadow = true;

    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    var d = 10;

    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;

    light.shadow.camera.far = 1000;

    scene.add(light);


    var light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-1, 0.1, 0);

    light2.castShadow = false;

    light2.shadow.mapSize.width = 1024;
    light2.shadow.mapSize.height = 1024;

    var d = 10;

    light2.shadow.camera.left = -d;
    light2.shadow.camera.right = d;
    light2.shadow.camera.top = d;
    light2.shadow.camera.bottom = -d;

    light2.shadow.camera.far = 1000;

    scene.add(light2);

    var light3 = new THREE.DirectionalLight(0xddffdd, 0.2);
    light3.position.set(0.5, -0.2, 0);

    light3.castShadow = false;

    light3.shadow.mapSize.width = 1024;
    light3.shadow.mapSize.height = 1024;

    var d = 10;

    light3.shadow.camera.left = -d;
    light3.shadow.camera.right = d;
    light3.shadow.camera.top = d;
    light3.shadow.camera.bottom = -d;

    light3.shadow.camera.far = 1000;

    scene.add(light3);

    // 加载进度
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    // progress load
    let progress_number = 0;
    var timer = setInterval(function () {
        if (progress_number < progress || progress >= 99) {
            progress_number = Number(progress_number) + 1;
        } else {
        }
        if (progress_number > 105) {
            clearInterval(timer);
            sleep(500).then(() => {
                $(".show-controls").toggleClass("wrapper-hidden");
                $(".show-controls2").toggleClass("wrapper-hidden");
                $(".progress-wrapper").toggleClass("wrapper-hidden");
            })
            return;
        }
        $(".bar").attr("class", "bar white bar-" + String(progress_number));
    }, 50)


    var progress = 0;
    //进度通知
    let onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            let percentComplete = xhr.loaded / xhr.total * 100;
            // console.log("progress:", Math.round(percentComplete, 2));
            progress = Math.ceil(percentComplete);
        }
    };
    //报错通知
    let onError = function (xhr) {
    };


    var loader = new THREE.GLTFLoader();
    loader.load("/static/assets/design_model/" + model_name, function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.frustumCulled = false;
                //模型阴影
                child.castShadow = true;
                //模型自发光
                //child.material.emissive = child.material.color;
                //child.material.emissiveMap = child.material.map;
            }
        });
        // 输出模型各面
        console.log(gltf);
        gltf.scene.scale.set(1, 1, 1) // scale here
        obj3d.add(gltf.scene);
    }, onProgress, onError());

    scene.add(group);
    group.add(obj3d);

    //
    var floorMaterial = new THREE.MeshLambertMaterial({
        color: '#a9a8a8',
    });
    var floorGeometry = new THREE.CircleBufferGeometry(7, 50);
    var floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x -= Math.PI * 0.5;
    floorMesh.position.y -= 1.5;
    group.add(floorMesh);
    floorMesh.receiveShadow = true;

    // stats = new Stats();
    // container.appendChild(stats.dom);


    // postprocessing
    composer = new THREE.EffectComposer(renderer);

    var renderPass = new THREE.RenderPass(scene, camera);
    composer.addPass(renderPass);

    outlinePass = new THREE.OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    composer.addPass(outlinePass);


    var onLoad = function (texture) {
        outlinePass.patternTexture = texture;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
    };

    effectFXAA = new THREE.ShaderPass(THREE.FXAAShader);
    effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
    effectFXAA.renderToScreen = true;
    composer.addPass(effectFXAA);

    window.addEventListener('resize', onWindowResize, false);

    window.addEventListener('click', onTouchMove);

    // T-O-D-O: 模型部件多选（判断 SHIFT / CTRL 按下），懒，之后写
    function onTouchMove(event) {
        var x, y;
        if (event.changedTouches) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
        } else {
            x = event.clientX;
            y = event.clientY;
        }
        let mainCanvas = renderer.domElement;
        // mainCanvas 就是 canvas元素（renderer.domElement）
        mouse.x = ((event.clientX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth) * 2 - 1;// 标准设备横坐标
        mouse.y = -((event.clientY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight) * 2 + 1;// 标准设备纵坐标
        // mouse.x = (x / window.innerWidth) * 2 - 1;
        // mouse.y = -(y / window.innerHeight) * 2 + 1;
        checkIntersection();
    }

    function addSelectedObject(object) {
        selectedObjects = [];
        selectedObjects.push(object);
    }

    function checkIntersection() {
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects([scene], true);
        //console.log("mesh selected:", intersects);
        if (intersects.length > 0) {
            var selectedObject = intersects[0].object;
            if (intersects[0].object.name.replace(" ", "") !== "") {
                addSelectedObject(selectedObject);
                outlinePass.selectedObjects = selectedObjects;
            }
        } else {
            // outlinePass.selectedObjects = [];
        }

    }

}

function onWindowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width * 0.55, height * 0.6);
    // composer.setSize(width * 0.67, height * 0.67);

    effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);

}

function animate() {
    requestAnimationFrame(animate);
    // stats.begin();
    var timer = performance.now();
    if (params.rotate) {
        group.rotation.y = timer * 0.0001;
    }

    if (rotate_avail) {
        scene.children[scene.children.length - 1].rotateY(0.001 * 5);//旋转角速度0.001弧度每毫秒
    }
    camera.updateProjectionMatrix();
    controls.update();
    composer.render();

    // stats.end();
}

activeColorList();

function activeColorList() {
    console.log("color-list loaded");
    $('select[name="color-long-list"]').simplecolorpicker();
    $('select[name="color-long-list"]').change(function () {
        console.log(this.value);
        changeColor(this.value);
    })
}


$(document).on('click', 'a[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    console.log("WEREWRWRWEr", this);
    $(this).ekkoLightbox();
});