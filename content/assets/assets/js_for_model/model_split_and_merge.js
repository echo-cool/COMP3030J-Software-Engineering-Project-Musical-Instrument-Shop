// 好起来了，只要写一遍，认了认了
// 屏幕的中心(0,0,0)
// 往右是x轴
// 往上是y轴
// 垂直屏幕朝向的是z轴
function specific_model_split(mesh, model_id) {
    console.log("split or merge id: ", model_id);
    if (model_id.includes("guitar")) {
        switch (model_id) {
            case "guitar_style_1":
            case "guitar_style_2":
            case "guitar_style_3":
            case "guitar_style_4":
                switch (mesh.name) {
                    case'guitar_wrap_node2':
                        ModelTo(mesh, "y", 0.2, 1.5);
                        break;
                    case'guitar_wrap_node3':
                        ModelTo(mesh, "y", -0.5, 1.5);
                        break;
                    case'guitar_center_node':
                        ModelTo(mesh, "z", 0.5, 1.5);
                        break;
                    case'guitar_face':
                        TweenLite.to(mesh.position, 1.5, {
                            z: mesh.position.z + 1.5,
                            ease: Power4.easeOut
                        });
                        break;
                    case'guitar_face_black':
                        TweenLite.to(mesh.position, 2, {
                            z: mesh.position.z + 2,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_back':
                        TweenLite.to(mesh.position, 1.5, {
                            z: mesh.position.z - 1,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_wrap':
                        TweenLite.to(mesh.position, 1.5, {
                            x: mesh.position.x - 2,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_head':
                        TweenLite.to(mesh.position, 1.5, {
                            x: mesh.position.x + 1,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_line':
                        TweenLite.to(mesh.position, 1.5, {
                            y: mesh.position.y + 1.5,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_center':
                        TweenLite.to(mesh.position, 1.5, {
                            z: mesh.position.z + 0.7,
                            ease: Power4.easeOut
                        });
                        break;
                }
                break;
        }
    } else if (model_id.includes("piano")) {
        switch (model_id) {
            case "piano_style_1":
                break;
        }
    } else {
        console.log("unable");
    }

}

function specific_model_merge(mesh, model_id) {
    console.log("split or merge id: ", model_id);
    if (model_id.includes("guitar")) {
        switch (model_id) {
            case "guitar_style_1":
            case "guitar_style_2":
            case "guitar_style_3":
            case "guitar_style_4":
                switch (mesh.name) {
                    case'guitar_wrap_node2':
                        ModelTo(mesh, "y", -0.2, 1.5);
                        break;
                    case'guitar_wrap_node3':
                        ModelTo(mesh, "y", 0.5, 1.5);
                        break;
                    case'guitar_center_node':
                        ModelTo(mesh, "z", -0.5, 1.5);
                        break;
                    case'guitar_face':
                        TweenLite.to(mesh.position, 1.5, {
                            z: mesh.position.z - 1.5,
                            ease: Power4.easeOut
                        });
                        break;
                    case'guitar_face_black':
                        TweenLite.to(mesh.position, 2, {
                            z: mesh.position.z - 2,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_back':
                        TweenLite.to(mesh.position, 1.5, {
                            z: mesh.position.z + 1,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_wrap':
                        TweenLite.to(mesh.position, 1.5, {
                            x: mesh.position.x + 2,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_head':
                        TweenLite.to(mesh.position, 1.5, {
                            x: mesh.position.x - 1,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_line':
                        TweenLite.to(mesh.position, 1.5, {
                            y: mesh.position.y - 1.5,
                            ease: Power4.easeOut
                        });
                        break;
                    case 'guitar_center':
                        TweenLite.to(mesh.position, 1.5, {
                            z: mesh.position.z - 0.7,
                            ease: Power4.easeOut
                        });
                        break;
                }
                break;
        }
    } else if (model_id.includes("piano")) {
        switch (model_id) {
            case "piano_style_1":
                break;
        }
    } else {
        console.log("unable");
    }
}


function ModelTo(mesh, direction, distance, time = 1.5) {
    switch (direction) {
        case "x":
            TweenLite.to(mesh.position, time, {
                x: mesh.position.x + distance,
                ease: Power4.easeOut
            });
            break;
        case "y":
            TweenLite.to(mesh.position, time, {
                y: mesh.position.y + distance,
                ease: Power4.easeOut
            });
            break;
        case "z":
            TweenLite.to(mesh.position, time, {
                z: mesh.position.z + distance,
                ease: Power4.easeOut
            });
            break;
    }
}
