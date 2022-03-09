window.onload = function () {
    //初始化
    // 设置名称
    let fileNames = ["design_guitar (1).gltf", "design_guitar (2).gltf", "design_guitar (3).gltf"];
    //控制器
    let controls = new THREE.TrackballControls(camera);
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
    controls.maxDistance = 50;
    //是否开启右键拖拽
    controls.enablePan = true;

    console.log("x==kaishi ==", fileNames.length);
    for (let num = 0; num < fileNames.length; num++) {
        let fileName = fileNames[num];

        console.log("x==kaishi ==", num, fileName);

        let container;
        let camera, scene, renderer
        // 检测浏览器兼容
        if (Detector.webgl) {
            init();
            animate();
        } else {
            alert('not support');
        }

        function init() {
            container = document.createElement('div');
            container.className = "model-wrapper type-" + num;
            document.querySelector(".left-box").appendChild(container);

            // scene 创建一个场景
            let scene = new THREE.Scene();
            // 设置场景背景色
            // scene.background = new THREE.Color( 0xffffff);

            console.log(scene)
            //创建一个环境灯光
            let ambientLight = new THREE.AmbientLight(0xffffff);
            scene.add(ambientLight);
            // 从上到下的平行光
            let direction = new THREE.DirectionalLight(0x666666);
            scene.add(direction);
            let d_light = new THREE.DirectionalLight("#080");

            d_light.castShadow = true;
            d_light.shadowCameraVisible = true;
            d_light.position.set(0, 26, 4);
            scene.add(d_light);

            //把视角放入环境
            scene.add(camera);

            // model  开始创建模型
            //进度通知
            let onProgress = function (xhr) {
                console.log(xhr)
                if (xhr.lengthComputable) {
                    let percentComplete = xhr.loaded / xhr.total * 100;
                    console.log("progress:", Math.round(percentComplete, 2));
                    // play(Math.round(percentComplete, 2))
                }
            };
            //报错通知
            let onError = function (xhr) {
            };

            // 添加操作器
            console.log("加载文件名", fileName);
            THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
            let loader = new THREE.GLTFLoader();
            loader.load("../static/assets/design_model/" + fileName, function (gltf) {
                // 返回的场景对象gltf.scene插入到threejs场景中
                gltf.scene.traverse(function (child) {
                    if (child.isMesh) {
                        child.frustumCulled = false;
                        //模型阴影
                        child.castShadow = true;
                        //模型自发光
                        child.material.emissive = child.material.color;
                        child.material.emissiveMap = child.material.map;
                    }
                });
                scene.add(gltf.scene);
            }, onProgress, onError);


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
            renderer.setSize(698, 500);

            container.appendChild(renderer.domElement);
            // 自适应监听
            // window.addEventListener('resize', resize, false);
        }

        // 时刻渲染
        function animate() {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);

        }

        // 获取参数
        function GetUrlParam(paraName) {
            let url = document.location.toString();
            let arrObj = url.split("?");
            if (arrObj.length > 1) {
                let arrPara = arrObj[1].split("&");
                let arr;
                for (let i = 0; i < arrPara.length; i++) {
                    arr = arrPara[i].split("=");
                    if (arr != null && arr[0] == paraName) {
                        return arr[1];
                    }
                }
                return "";
            } else {
                return "";
            }
        }

        console.log("a:", a);
        // let fake = 0;

        // // 这是一个进度条函数进度条函数
        // function play(a) {
        //     while (fake < a) {
        //         fake = fake + 1;
        //         document.getElementsByClassName("trends")[0].style.width = fake + "%";
        //     }
        //     if (fake < 100) {
        //         document.getElementById("progress").style.display = "block";
        //         console.log("a:", a);
        //     } else {
        //         document.getElementById("progress").style.display = "none";
        //     }
        // }
    }


    console.log("x==jiseshui e ==");
}

function changeModel(x) {
    let fileNames = ["design_guitar (1).gltf", "design_guitar (2).gltf", "design_guitar (3).gltf", "design_guitar (4).gltf"]
    let typeClassNames = [];
    for (let i = 0; i < fileNames.length; i++) {
        typeClassNames.push(".type-" + i);
    }
    console.log("classNAME", typeClassNames);
    for (let i = 0; i < fileNames.length; i++) {
        if (x === i) {
            let wrapper = $(typeClassNames[i]);
            console.log("wrapper", wrapper);
            wrapper.setAttribute("style", "display:block");
        } else {
            let wrapper = $(typeClassNames[i]);
            console.log("wrapper", wrapper);
            wrapper.setAttribute("style", "display:none");
        }
    }
}

// // 设置名称
//   let fileNames = ["design_guitar (1).gltf", "design_guitar (2).gltf", "design_guitar (3).gltf", "design_guitar (4).gltf"]
//
//   function changeModel(x) {
//       let fileName = fileNames[x]
//       console.log("Dianji", x);
//       {#;#}
//       {#// 容器#}
//       {#fileNames = [fileNames[x]];#}
//       var container,
//           // 控制器
//           controls;
//       // 镜头
//       var camera,
//           // 场景
//           scene,
//           // 渲染
//           renderer;
//
//       // 检测浏览器兼容
//       if (Detector.webgl) {
//           //alert('浏览器支持');
//           init();
//           animate();
//       } else {
//           alert('浏览器不支持');
//       }
//
//
//       //初始化
//       function init() {
//           container = document.createElement('div');
//           document.body.appendChild(container);
//           //创建一个一个视角
//           camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
//           //设置视角离原点的位置（眼睛距离模型的距离）
//           camera.position.z = 700;
//           //控制器
//           controls = new THREE.TrackballControls(camera);
//           //设置旋转速度
//           controls.rotateSpeed = 3;
//
//           // 使动画循环使用时阻尼或自转 意思是否有惯性
//           controls.enableDamping = true;
//           //是否可以缩放
//           controls.enableZoom = true;
//           //是否自动旋转
//           controls.autoRotate = true;
//           //设置相机距离原点的最远距离
//           controls.minDistance = 1;
//           //设置相机距离原点的最远距离
//           controls.maxDistance = 50;
//           //是否开启右键拖拽
//           controls.enablePan = true;
//
//           // scene 创建一个场景
//           scene = new THREE.Scene();
//           // 设置场景背景色
//           // scene.background = new THREE.Color( 0xffffff);
//           {#scene.fog = new THREE.Fog(0x000, 1000, 4000);#}
//
//           console.log(scene)
//           //创建一个环境灯光
//           var ambientLight = new THREE.AmbientLight(0xffffff);
//           scene.add(ambientLight);
//           // 从上到下的平行光
//           var direction = new THREE.DirectionalLight(0x666666);
//           scene.add(direction);
//
//
//           var d_light = new THREE.DirectionalLight("#080");
//
//           d_light.castShadow = true;
//           d_light.shadowCameraVisible = true;
//           d_light.position.set(0, 26, 4);
//           scene.add(d_light);
//
//           //把视角放入环境
//           scene.add(camera);
//
//           // model  开始创建模型
//           //进度通知
//           var onProgress = function (xhr) {
//               console.log(xhr)
//               if (xhr.lengthComputable) {
//                   var percentComplete = xhr.loaded / xhr.total * 100;
//                   {#console.log(Math.round(percentComplete, 2) + '% downloaded');#}
//                   play(Math.round(percentComplete, 2))
//               }
//           };
//           //报错通知
//           var onError = function (xhr) {
//           };
//
//           // 添加操作器
//           console.log("加载文件名", fileName);
//           THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
//           let loader = new THREE.GLTFLoader();
//           loader.load("{% static "assets/design_model/" %}" + fileName, function (gltf) {
//               {#console.log('控制台查看加载gltf文件返回的对象结构', gltf)#}
//               {#console.log('gltf对象场景属性', gltf.scene)#}
//               {#console.log('gltf对象相机属性', gltf.cameras)#}
//               // 返回的场景对象gltf.scene插入到threejs场景中
//               gltf.scene.traverse(function (child) {
//                   if (child.isMesh) {
//                       {#if (child.name.includes('ere')) {#}
//                       {#    child.material.color.set("rgb(67, 160, 71)")#}
//                       {#\}#}
//                       {#console.log("模型部件", child.name);#}
//                       child.frustumCulled = false;
//                       //模型阴影
//                       child.castShadow = true;
//                       //模型自发光
//                       child.material.emissive = child.material.color;
//                       child.material.emissiveMap = child.material.map;
//                   }
//               });
//               {#gltf.position.set(0, 0, 0 );#}
//               {#gltf.scene.scale.set(1, 1, 1);#}
//               {#let box = new THREE.Box();#}
//               {#box.setObjectFrom('物体');#}
//               {#console.log("sdasdsad", box.min, box.max);#}
//               {#gltf.scene.scale.set(1 * fileNames.indexOf(fileName), 1 * fileNames.indexOf(fileName), 1 * fileNames.indexOf(fileName)) // scale here#}
//               scene.add(gltf.scene);
//           }, onProgress, onError);
//
//
//           //创建一个webgl对象
//           renderer = new THREE.WebGLRenderer({
//               antialias: false,
//               alpha: true // 设置透明
//           });
//           // 设置颜色
//           renderer.setClearColor(0xffffff, 0);
//           // 设置分辨率
//           renderer.setPixelRatio(window.devicePixelRatio);
//           // 设置渲染尺寸
//           renderer.setSize(window.innerWidth, window.innerHeight);
//           container.appendChild(renderer.domElement);
//           // 自适应监听
//           window.addEventListener('resize', resize, false);
//       }
//
//       // 监听窗口自适应
//       function resize() {
//           camera.aspect = window.innerWidth / window.innerHeight;
//           camera.updateProjectionMatrix();
//           renderer.setSize(window.innerWidth, window.innerHeight);
//       }
//
//       // 时刻渲染
//       function animate() {
//           controls.update();
//           renderer.render(scene, camera);
//           requestAnimationFrame(animate);
//
//       }
//
//       // 获取参数
//       function GetUrlParam(paraName) {
//           var url = document.location.toString();
//           var arrObj = url.split("?");
//           if (arrObj.length > 1) {
//               var arrPara = arrObj[1].split("&");
//               var arr;
//               for (var i = 0; i < arrPara.length; i++) {
//                   arr = arrPara[i].split("=");
//                   if (arr != null && arr[0] == paraName) {
//                       return arr[1];
//                   }
//               }
//               return "";
//           } else {
//               return "";
//           }
//       }
//
//       let fake = 0;
//
//       // 这是一个进度条函数进度条函数
//       function play(a) {
//           while (fake < a) {
//               fake = fake + 1;
//               document.getElementsByClassName("trends")[0].style.width = fake + "%";
//           }
//           if (fake < 100) {
//               document.getElementById("progress").style.display = "block";
//               console.log("a:", a);
//           } else {
//               document.getElementById("progress").style.display = "none";
//           }
//       }
//
//   }
