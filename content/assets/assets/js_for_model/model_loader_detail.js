function switchRotate() {
    console.log(rotate_avail);
    rotate_avail = !rotate_avail
}

var rotate_avail = true;
// 设置名称
var path, pathName;
path = "../static/";

pathName = "model_detail_piano2.glb";
// 容器
var container,
    // 控制器
    controls;
// 镜头
var camera,
    // 场景
    scene,
    // 渲染
    renderer;

// 检测浏览器兼容
if (Detector.webgl) {
    //alert('浏览器支持');
    init();
    animate();
} else {
    alert('浏览器不支持');
}


//初始化
function init() {
    container = document.createElement('div');
    $("#progress").html(container);
    //创建一个一个视角
    camera = new THREE.PerspectiveCamera(45, 580 / window.innerHeight, 1, 4000);
    //设置视角离原点的位置（眼睛距离模型的距离）
    camera.position.z = 700;
    //控制器
    controls = new THREE.TrackballControls(camera);
    //设置旋转速度
    controls.rotateSpeed = 3;

    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = true;
    //设置相机距离原点的最远距离
    controls.minDistance = 1;
    //设置相机距离原点的最远距离
    controls.maxDistance = 100;
    //是否开启右键拖拽
    controls.enablePan = true;

    // scene 创建一个场景
    scene = new THREE.Scene();
    // 设置场景背景色
    // scene.background = new THREE.Color( 0xffffff);
    scene.fog = new THREE.Fog(0x000, 1000, 4000);

    console.log(scene)
    //创建一个环境灯光
    // var ambientLight = new THREE.AmbientLight(0x666666);
    // scene.add(ambientLight);


    //把视角放入环境
    scene.add(camera);

    if (pathName !== "model_detail_piano2.glb") {
        // scene.remove(ambientLight);
        // let light = new THREE.DirectionalLight(0xffffff, 0.7);
        // light.position.set(-10, 0, 0);
        // light.castShadow = true;
        // let d = 10;
        // light.shadow.camera.left = -d;
        // light.shadow.camera.right = d;
        // light.shadow.camera.top = d;
        // light.shadow.camera.bottom = -d;
        // // light.shadow.camera.far = 1000;
        // scene.add(light);
    }
    // let ambientLight2 = new THREE.AmbientLight(0xffffff);
    // scene.add(ambientLight2);
    // let light = new THREE.SpotLight(0xffffff, 0.7);
    // light.position.set(0, 10, 0);
    // light.castShadow = true;
    // scene.add(light);


    // x right y top z ren
//, [40, 20, 0], [0, 20, 40], [0, 20, -40]
    let light_list = [[0, 20, 0], [10, 10, 20], [-10, 10, 20], [10, 10, 0]];

    if (model_url.includes("model_detail_piano2.glb") === false) {
        let ambient = new THREE.AmbientLight(0x777777);
        scene.add(ambient);
        for (let light_num of light_list) {
            console.log("light_number", light_num);
            let light2 = new THREE.DirectionalLight(0x888888);
            // let x,y,z  =);
            light2.position.set(...light_num);
            light2.castShadow = true;
            scene.add(light2);
        }
    } else {
        let ambient = new THREE.AmbientLight(0x666666);
        scene.add(ambient);
        // // 从上到下的平行光
        var direction = new THREE.DirectionalLight(0x888888, 0.7);
        direction.position.set(10, 30, 50);
        scene.add(direction);
    }


    // model  开始创建模型
    //进度通知
    var onProgress = function (xhr) {
        console.log(xhr)
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
            play(Math.round(percentComplete, 2))
        }
    };
    //报错通知
    var onError = function (xhr) {
    };

    // 添加操作器
    var loader = new THREE.GLTFLoader();

    const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x3c3f41,
        metalness: 1.0,
        roughness: 0.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
        sheen: 0.5
    });

    // loader.load("../static/assets/detail_model/" + pathName, function (gltf) {
    loader.load(model_url, function (gltf) {
            console.log('控制台查看加载gltf文件返回的对象结构', gltf)
            console.log('gltf对象场景属性', gltf.scene)
            console.log('gltf对象相机属性', gltf.cameras)
            // 返回的场景对象gltf.scene插入到threejs场景中
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    console.log("模型部件", child.name);
                    child.frustumCulled = false;
                    //模型阴影
                    child.castShadow = true;
                    //模型自发光
                    // child.material.shininess.specular = 0x444444;

                    if (model_url.includes("gong")) {
                        child.material = bodyMaterial;

                        child.material.emissive = child.material.color;
                        child.material.emissiveMap = child.material.map;
                    }


                    if (pathName !== "model_detail_piano2.glb") {
                        // child.material.emissive = child.material.color;
                        // child.material.emissiveMap = child.material.map;
                    }
                }
            });
            console.log('控制台查看加载gltf文件返回的对象结构', gltf)
            console.log('gltf对象场景属性', gltf.scene)
            console.log('gltf对象相机属性', gltf.cameras)
            // 返回的场景对象gltf.scene插入到threejs场景中
            if (model_url.includes("model_detail_piano2.glb")) {
                gltf.scene.scale.set(10, 10, 10) // scale here
            } else {
                gltf.scene.scale.set(10, 10, 10) // scale here
            }

            gltf.scene.position.set(0, 0, 0)
            scene.add(gltf.scene);
        }, onProgress, onError
    );


    // let floorMaterial = new THREE.MeshLambertMaterial({
    //     color: '#a9a8a8',
    // });
    // let floorGeometry = new THREE.CircleBufferGeometry(57, 30);
    // let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    // floorMesh.rotation.x -= Math.PI * 0.5;
    // floorMesh.position.y -= 10;
    // scene.add(floorMesh);
    // floorMesh.receiveShadow = true;

    //创建一个webgl对象
    renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true // 设置透明
    });
    // 设置颜色
    renderer.setClearColor(0xffffff, 0);
    // 设置分辨率
    renderer.setPixelRatio(window.devicePixelRatio);
    // 设置渲染尺寸
    renderer.setSize(600, 700);
    renderer.domElement.className = "model-canvas";
    renderer.domElement.style = "width:100%; height:90%; position: absolute;z-index: 2;height: 572px;background: white;";
    container.appendChild(renderer.domElement);
    // 自适应监听
    window.addEventListener('resize', resize, false);
}

// 监听窗口自适应
function resize() {
    camera.aspect = 580 / 700;
    camera.updateProjectionMatrix();
    renderer.setSize(580, 580);
}

// 时刻渲染
function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    if (rotate_avail) {
        scene.children[scene.children.length - 1].rotateY(0.001 * 5);//旋转角速度0.001弧度每毫秒
    }
}


let fake = 0;

// 这是一个进度条函数进度条函数
function play(a) {
    if (document.getElementsByClassName("trends")[0]) {
        while (fake < a) {
            fake = fake + 1;
            document.getElementsByClassName("trends")[0].style.width = fake + "%";
        }
        if (fake < 100) {
            document.getElementById("progress").style.display = "block";
            console.log("a:", a);
        } else {
            document.getElementById("progress").style.display = "none";
        }
    }
}
