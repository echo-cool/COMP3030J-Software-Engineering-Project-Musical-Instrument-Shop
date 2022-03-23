//受不了了，每个参数都要自己调，吐了吐了
function specific_model_split(mesh, model_id) {
    switch (model_id) {
        case "guitar_style_1":
        case "guitar_style_2":
            switch (mesh.name) {
                case'guitar_face':
                    TweenLite.to(mesh.position, 1.5, {
                        z: 1,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_back':
                    TweenLite.to(mesh.position, 1.5, {
                        z: -1,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_wrap':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -4,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_head':
                    TweenLite.to(mesh.position, 1.5, {
                        x: 2,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_line':
                    TweenLite.to(mesh.position, 1.5, {
                        y: 1,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_center':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -2,
                        ease: Power4.easeOut
                    });
                    break;
            }
            break;
        case "guitar_style_2":
            switch (mesh.name) {
                case'guitar_face':
                    TweenLite.to(mesh.position, 1.5, {
                        z: 1,
                        ease: Power4.easeOut
                    });
                    break;
                case'guitar_face2':
                    TweenLite.to(mesh.position, 1.5, {
                        z: 2,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_back':
                    TweenLite.to(mesh.position, 1.5, {
                        z: -1,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_wrap':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -4,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_head':
                    TweenLite.to(mesh.position, 1.5, {
                        x: 3,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_line':
                    TweenLite.to(mesh.position, 1.5, {
                        y: 3,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_center':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -2,
                        ease: Power4.easeOut
                    });
                    break;
            }
            break;

        case "guitar_style_3":
            switch (mesh.name) {
                case'guitar_face':
                    TweenLite.to(mesh.position, 1.5, {
                        z: 1,
                        ease: Power4.easeOut
                    });
                    break;
                case'guitar_face_black':
                    TweenLite.to(mesh.position, 1.5, {
                        z: 2,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_back':
                    TweenLite.to(mesh.position, 1.5, {
                        z: -1,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_wrap':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -4,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_head':
                    TweenLite.to(mesh.position, 1.5, {
                        x: 3,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_line':
                    TweenLite.to(mesh.position, 1.5, {
                        y: 3,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_center':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -2,
                        ease: Power4.easeOut
                    });
                    break;
            }
            break;

    }
}

function specific_model_merge(mesh, model_id) {
    switch (model_id) {
        case "guitar_style_1":
            switch (mesh.name) {
                case'guitar_face':
                    TweenLite.to(mesh.position, 1.5, {
                        z: 0.02,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_back':
                    TweenLite.to(mesh.position, 1.5, {
                        z: -0.45,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_wrap':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -2,
                        ease: Power4.easeOut
                    });
                    break;
                case'guitar_head':
                    TweenLite.to(mesh.position, 1.5, {
                        x: 1.4,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_line':
                    TweenLite.to(mesh.position, 1.5, {
                        y: -0.1,
                        ease: Power4.easeOut
                    });
                    break;
                case 'guitar_center':
                    TweenLite.to(mesh.position, 1.5, {
                        x: -1.25,
                        ease: Power4.easeOut
                    });
                    break;
            }
            break;
        case "guitar_style_3":
            switch (mesh.name) {
                case'guitar_face':
                    TweenLite.to(mesh.position, 1.5, {
                        z: -0.05,
                        ease: Power4.easeOut
                    });
                    break;
            }
    }
}