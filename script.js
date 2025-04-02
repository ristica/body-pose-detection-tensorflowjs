async function initNeuralNetwork() {
    const model = poseDetection.SupportedModels.BlazePose;
    const detectorConfig = {
        runtime: 'tfjs',
        enableSmoothing: true,
        modelType: 'full'
    };
    const detector = await poseDetection.createDetector(model, detectorConfig);
    return detector;
}

async function estimate(video, detector) {

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    video.width = videoWidth;
    video.height = videoHeight;

    CANVAS.width = videoWidth;
    CANVAS.height = videoHeight;

    const estimationConfig = { flipHorizontal: true };
    const timestamp = performance.now();
    const poses = await detector.estimatePoses(video, estimationConfig, timestamp);
    // console.log(poses);

    requestAnimationFrame(() => {
        drawKeypoints(poses);
    });
}

async function main() {

    var video = await startVideo();
    const detector = await initNeuralNetwork();

    setInterval(() => {
        estimate(video, detector);
    });

}

main();