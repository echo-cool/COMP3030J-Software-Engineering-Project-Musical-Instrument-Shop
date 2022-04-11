/*=========================================================================================
    File Name: sweet-alerts.js
    Description: A beautiful replacement for javascript alerts
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Responsive Admin Theme
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/
$(document).ready(function () {

    $('#basic-alert').on('click', function () {
        swal('Any fool can use a computer');
    });

    $('#with-title').on('click', function () {
        swal(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    });

    $('#with-title-footer').on('click', function () {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>',
        });
    });

    $('#long-content').on('click', function () {
        swal({
            imageUrl: '../../../app-assets/images/pages/robot.jpg',
            imageHeight: 1512,
            imageAlt: 'A tall image'
        });
    });

    $('#custom-html').on('click', function () {
        swal({
            title: '<i>HTML</i> <u>example</u>',
            type: 'info',
            html:
                'You can use <b>bold text</b>, ' +
                '<a href="//github.com">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="ft-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="ft-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        });
    });

    $('#custom-position').on('click', function () {
        swal({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    });

    $('#confirm-dialog').on('click', function () {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function () {
            swal('Deleted!', 'Your file has been deleted!', 'success')
          }).catch(swal.noop)
    });

    $('#rtl-support').on('click', function () {
        swal({
            title: 'هل تريد الاستمرار؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true,
            target: document.getElementById('rtl-container')
        });
    });

    $('#ajax-request').on('click', function () {
        swal({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
              return new Promise(function (resolve, reject) {
                setTimeout(function() {
                  if (email === 'taken@example.com') {
                    swal.showValidationError('This email is already taken.')
                  }
                  resolve()
                }, 2000)
              })
            },
            allowOutsideClick: false
          }).then(function (email) {
            swal({
              type: 'success',
              title: 'Ajax request finished!',
              html: 'Submitted email: ' + email
            })
          });
    });

    $('#chaining-modal').on('click', function () {
        swal.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
          })
          
          var steps = [
            {
              title: 'Question 1',
              text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
          ]
          
          swal.queue(steps).then(function (result) {
            swal.resetDefaults()
            swal({
              title: 'All done!',
              html:
                'Your answers: <pre>' +
                  JSON.stringify(result) +
                '</pre>',
              confirmButtonText: 'Lovely!'
            })
          }, function () {
            swal.resetDefaults()
          });
    });

    $('#dynamic-queue').on('click', function () {
        swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:
              'Your public IP will be received ' +
              'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: function () {
              return $.get('https://api.ipify.org?format=json')
                .then(function (data) {
                  swal.insertQueueStep(data.ip)
                })
            }
          }])
    });

    $('#type-success').on('click', function () {
        swal("Good job!", "You clicked the button!", "success");
    });

    $('#type-info').on('click', function () {
        swal("Info!", "You clicked the button!", "info");
    });

    $('#type-warning').on('click', function () {
        swal("Warning!", "You clicked the button!", "warning");
    });

    $('#type-error').on('click', function () {
        swal("Error!", "You clicked the button!", "error");
    });

    $('#type-question').on('click', function () {
        swal("question!", "You clicked the button!", "question");
    });

    $('#input-text').on('click',  function () {
        swal({
            title: 'What is your name?',
            input: 'text',
            inputPlaceholder: 'Enter your name or nickname',
            showCancelButton: true,
            inputValidator: function (value) {
              return !value && 'You need to write something!'
            }
          }).then(function (name) {
            swal({
              type: 'success',
              title: 'Hi, ' + name
            })
          }).catch(swal.noop)
    });

    $('#input-email').on('click', function () {
        swal({
            title: 'Input email address',
            input: 'email',
            inputPlaceholder: 'Enter your email address',
          }).then(function (email) {
            swal({
              type: 'success',
              html: 'Entered email: <strong>' + email + '</strong>'
            })
          }).catch(swal.noop)
    });

    $('#input-url').on('click', function () {
        swal({
            input: 'url',
            inputPlaceholder: 'Enter the URL'
          }).then(function (url) {
            swal({
              type: 'success',
              html: 'Entered URL: <strong>' + url + '</strong>'
            })
          }).catch(swal.noop)
    });

    $('#input-password').on('click', function () {
        swal({
            title: 'Enter your password',
            input: 'password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
              'maxlength': 10,
              'autocapitalize': 'off',
              'autocorrect': 'off'
            }
          }).then(function (password) {
            if (password) {
              swal({
                type: 'success',
                html: 'Entered password: <strong>' + password + '</strong>'
              })
            }
          }).catch(swal.noop)
    });

    $('#input-textarea').on('click', function () {
        swal({
            input: 'textarea',
            inputPlaceholder: 'Type your message here',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          }).then(function (text) {
            if (text) {
              swal(text)
            }
          }).catch(swal.noop)
    });

    $('#input-select').on('click', function () {
        swal({
            title: 'Select Ukraine',
            input: 'select',
            inputOptions: {
              'SRB': 'Serbia',
              'UKR': 'Ukraine',
              'HRV': 'Croatia'
            },
            inputPlaceholder: 'Select country',
            showCancelButton: true,
            inputValidator: function (value) {
              return new Promise(function (resolve, reject) {
                if (value === 'UKR') {
                  resolve()
                } else {
                  resolve('You need to select Ukraine :)')
                }
              })
            }
          }).then(function (result) {
            swal({
              type: 'success',
              html: 'You selected: <strong>' + result + '</strong>'
            })
          }).catch(swal.noop)
    });

    $('#input-radio').on('click', function () {
        var inputOptionsPromise = new Promise(function (resolve) {
            setTimeout(function () {
              resolve({
                '#FF0000': 'Red',
                '#00FF00': 'Green',
                '#0000FF': 'Blue'
              })
            }, 2000)
          })
      
          swal({
            title: 'Select color',
            input: 'radio',
            inputOptions: inputOptionsPromise,
            inputValidator: function (value) {
              return !value && 'You need to choose something!'
            }
          }).then(function (result) {
            swal({
              type: 'success',
              html: 'You selected: <strong>' + result + '</strong>'
            })
          }).catch(swal.noop)
    });

    $('#input-checkbox').on('click', function () {
        swal({
            title: 'Terms and conditions',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder: 'I agree with the terms and conditions',
            confirmButtonText: 'Continue <i class="fa fa-arrow-right" style="margin-left: 10px"></i>',
            inputValidator: function (result) {
              return !result && 'To continue you need to agree with T&amp;C'
            }
          }).then(function () {
            swal({
              type: 'success',
              text: 'You agreed with T&C :)'
            })
          }).catch(swal.noop)
    });

    $('#input-file').on('click', function () {
        swal({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
              'accept': 'image/*',
              'aria-label': 'Upload your profile picture'
            }
          }).then(function (file) {
            var reader = new FileReader()
            reader.onload = function (e) {
              swal({
                title: 'Your uploaded picture',
                imageUrl: e.target.result,
                imageAlt: 'The uploaded picture'
              }).catch(swal.noop)
            }
            reader.readAsDataURL(file)
          }).catch(swal.noop)
    });

    $('#input-range').on('click', function () {
        swal({
            title: 'How old are you?',
            type: 'question',
            input: 'range',
            inputAttributes: {
              min: 8,
              max: 120,
              step: 1
            },
            inputValue: 25
          }).catch(swal.noop)
        })
      
        $('.input-type-multiple').on('click', function () {
          swal({
            title: 'Multiple inputs',
            html:
              '<input id="swal-input1" class="swal2-input" placeholder="first input field">' +
              '<input id="swal-input2" class="swal2-input" placeholder="second input field">',
            focusConfirm: false,
            preConfirm: function () {
              return [
                $('#swal-input1').val(),
                $('#swal-input2').val()
              ]
            }
          }).then(function (result) {
            swal(JSON.stringify(result))
          }).catch(swal.noop)
    });


});