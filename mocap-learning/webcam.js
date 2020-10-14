
var recorder;
var mediaStream;

function captureUserMedia(success_callback) {
    var session = {
        audio: true,
        video: true
    };

    navigator.getUserMedia(session, success_callback, function(error) {
        alert('Unable to capture your camera. Please check console logs.')
        console.error(error);
    })
}

function startRecording () {

    captureUserMedia(stream => {
        // mediaStream = stream;

        // videoElement.srcObject = stream;
        
        // videoElement.play();
        // videoElement.muted = true;
        // videoElement.controls = false;

        recorder = RecordRTC(stream, {
            type: 'video'
        });

        recorder.startRecording();
    });
}

function stopRecording(postUrl, filename) {
    recorder.stopRecording(() => {
        postFiles(postUrl, filename);
    });
}

function promptSave() {
    let blob = recorder.getBlob();
    invokeSaveAsDialog(blob);
}

function postFiles(url, filename) {
    var blob = recorder.getBlob();
    // invokeSaveAsDialog(blob);

    var filename = filename + '.webm';

    var file = new File([blob], filename, {
        type: 'video/webm'
    });

    videoElement.src = '';
    videoElement.srcObject = null;
    
    xhr(url, file, responseText => {
        console.log('File successfully uploaded to server');
    });

    if (mediaStream)
        mediaStream.stop();
}

function xhr(url, data, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        }
    };

    request.upload.onprogress = e => {
        let percent = Math.round(100 * e.loaded / e.total);
        console.log(`${url} upload: ${percent} complete`);
    }

    request.upload.onload = () => {
        console.log(`${url} upload finished`)
    }

    request.open('POST', url);

    var formData = new FormData();
    formData.append('file', data);
    request.send(formData);
}

function generateRandomString() {
    if (window.crypto) {
        var a = window.crypto.getRandomValues(new Uint32Array(3)),
            token = '';
        for (var i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
        return token;
    } else {
        return (Math.random() * new Date().getTime()).toString(36).replace( /\./g , '');
    }
}