// dark layer
const darkLayer = document.querySelector('.dark-layer');

// show video on click
const video = document.getElementById('work__video');
const videoSource = document.getElementById('work__video-source');
const buttons = document.querySelectorAll('.works--button');
const videoWrapper = document.getElementById(`works--video-wrapper`);
const closeButton = document.getElementById('close-button');

const videoSources = {
    1: '../assets/video/vscode-snippet.mp4',
    2: '../assets/video/get-image.mp4',
    3: '../assets/video/demo-publishpages-permission.mp4',    
}

buttons.forEach(button => {
    button.addEventListener('click', () => {    
        darkLayer.classList.toggle('u-dark-layer');        

        const videoWrapperHeight = videoWrapper.offsetTop - 100;

        document.documentElement.scrollTop = videoWrapperHeight;

        videoSource.setAttribute('src', videoSources[button.dataset.index]);
        video.load();
        video.currentTime = 0;
        
        videoWrapper.style.opacity = '1';
        videoWrapper.style.visibility = 'visible';

        setTimeout(() => {
            closeButton.style.opacity = '1';
            video.play();
        }, 1000);
    });
});

closeButton.addEventListener('click', () => {
    video.pause();
    videoWrapper.style.opacity = '0';
    videoWrapper.style.visibility = 'hidden';

    darkLayer.classList.toggle('u-dark-layer');
});