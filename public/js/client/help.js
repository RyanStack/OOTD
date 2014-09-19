            var hint = document.querySelector('#uploadHint') // non transfered
            var holder = document.getElementById('holder'), // non transfered
                tests = {
                    filereader: typeof FileReader != 'undefined',
                    dnd: 'draggable' in document.createElement('span'),
                    formdata: !!window.FormData,
                    progress: "upload" in new XMLHttpRequest
                },
                support = {
                    filereader: document.getElementById('filereader'),
                    formdata: document.getElementById('formdata'),
                    progress: document.getElementById('progress')
                },
                acceptedTypes = {
                    'image/png': true,
                    'image/jpeg': true,
                    'image/gif': true
                },
                progress = document.getElementById('uploadprogress'), // non transfered
                fileupload = document.getElementById('upload'); //  non transfered

            "filereader formdata progress".split(' ').forEach(function(api) {
                if (tests[api] === false) {
                    support[api].className = 'fail';
                } else {
                    // FFS. I could have done el.hidden = true, but IE doesn't support
                    // hidden, so I tried to create a polyfill that would extend the
                    // Element.prototype, but then IE10 doesn't even give me access
                    // to the Element object. Brilliant.
                    support[api].className = 'hidden';
                }
            });
            console.log(holder)

            function previewfile(file) {
                if (tests.filereader === true && acceptedTypes[file.type] === true) {
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        var image = new Image();
                        image.className = "PerfectPic"
                        image.src = event.target.result;
                        image.width = 250; // a fake resize
                        hint.style.display = "none"
                        holder.appendChild(image);
                    };

                    reader.readAsDataURL(file);
                } else {
                    holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size / 1024 | 0) + 'K' : '');
                    console.log(file);
                }
            }

            function readfiles(files) {
                var formData = tests.formdata ? new FormData() : null;
                for (var i = 0; i < files.length; i++) {
                    if (tests.formdata) formData.append('file', files[i]);
                    previewfile(files[i]);
                }
            }

            if (tests.dnd) {
                holder.ondragover = function() {
                    this.className = 'hover';
                    return false;
                };
                holder.ondragend = function() {
                    this.className = '';
                    return false;
                };
                holder.ondrop = function(e) {
                    this.className = '';
                    e.preventDefault();
                    readfiles(e.dataTransfer.files);
                    document.querySelector('#fashionQuestion').style.display = "block"
                }
            } else {
                fileupload.className = 'hidden';
                fileupload.querySelector('input').onchange = function() {
                    readfiles(this.files);
                };
            }



            document.querySelector('#submitQuestion').addEventListener("click", Upload)

            var Upload = function() {

            }