modelLoadLeftAndRight(".model-wrapper-left", "model_detail_harp.glb");

modelLoadLeftAndRight(".model-wrapper-right", "model_detail_pipa.glb");

function modelLoadLeftAndRight(box_selector, model_name) {
    function switchRotate() {
        console.log(rotate_avail);
        rotate_avail = !rotate_avail
    }

    let rotate_avail = true;
// 设置名称
    let path, pathName;
    path = "../static/";

    pathName = "model_detail_piano2.glb";
// 容器
    let container,
        // 控制器
        controls;
// 镜头
    let camera,
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
        container.style.height = "600px";
        container.style.width = "600px";
        $(box_selector).html(container);
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
        scene.background = new THREE.Color(0xdfe0e2);
        // scene.fog = new THREE.Fog(0x000, 1000, 4000);


        scene.add(new THREE.AmbientLight(0xffffff));

        let light = new THREE.DirectionalLight(0xffffff, 0.2);
        light.position.set(1, 1, 1);
        scene.add(light);
        let light2 = new THREE.DirectionalLight(0xffffff, 0.2);
        light2.position.set(1, 1, -1);
        scene.add(light2);
        let light3 = new THREE.DirectionalLight(0xffffff, 0.2);
        light3.position.set(1, -1, 1);
        scene.add(light3);
        let light4 = new THREE.DirectionalLight(0xffffff, 0.2);
        light4.position.set(-1, 1, 1);
        scene.add(light4);
        let light5 = new THREE.DirectionalLight(0xffffff, 0.2);
        light5.position.set(-1, 1, -1);
        scene.add(light5);
        let light6 = new THREE.DirectionalLight(0xffffff, 0.2);
        light6.position.set(-1, -1, 1);
        scene.add(light6);
        let light7 = new THREE.DirectionalLight(0xffffff, 0.2);
        light7.position.set(1, -1, -1);
        scene.add(light7)
        let light8 = new THREE.DirectionalLight(0xffffff, 0.2);
        light8.position.set(-1, -1, -1);
        scene.add(light8);

        scene.add(camera);

        // model  开始创建模型
        //进度通知
        let onProgress = function (xhr) {
            console.log(xhr)
            if (xhr.lengthComputable) {
                let percentComplete = xhr.loaded / xhr.total * 100;
                console.log(Math.round(percentComplete, 2) + '% downloaded');
                play(Math.round(percentComplete, 2))
            }
        };
        //报错通知
        let onError = function (xhr) {
        };

        // 添加操作器
        let loader = new THREE.GLTFLoader();
        loader.load("../static/assets/detail_model/homepage/" + model_name, function (gltf) {
                // 返回的场景对象gltf.scene插入到threejs场景中
                gltf.scene.traverse(function (child) {
                    child.frustumCulled = false;
                    //模型阴影
                    child.castShadow = true;
                    //模型自发光
                    // child.material.emissive = child.material.color;
                    // child.material.emissiveMap = child.material.map;
                });
                // 返回的场景对象gltf.scene插入到threejs场景中
                gltf.scene.scale.set(15, 15, 15) // scale here
                gltf.scene.position.set(-5, -15, 0) // scale here
                scene.add(gltf.scene);
            }, onProgress, onError
        );
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
        renderer.setSize(1500, 1500);
        renderer.domElement.className = "model-canvas";
        renderer.domElement.style = "width:100%; position: absolute;z-index: 2;background: white;";
        container.appendChild(renderer.domElement);
        // 自适应监听
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
}

