function drawJoints(keypoints) {
    for (var i = 0; i < keypoints.length; i++) {
        if (keypoints[i][3] < 0.4) continue;

        const x = keypoints[i][0];
        const y = keypoints[i][1];

        CTX.beginPath();
        CTX.arc(x, y, 4, 0, 3 * Math.PI);
        CTX.fillStyle = 'aqua';
        CTX.fill();
    }
}

function drawPaths(keypoints) {
    // drawEarsAndEyes(keypoints);
    // drawMouth(keypoints);
    // drawShoulders(keypoints);
    // drawLeftArm(keypoints);
    // drawRightArm(keypoints);
    // drawHips(keypoints);
    // drawLeftLeg(keypoints);
    // drawRightLeg(keypoints);
    // connectJoints(keypoints);    
}

function drawKeypoints(poses) {
    poses.forEach(pose => {
        const keypoints = pose.keypoints.map((kp) => [kp.x, kp.y, kp.z, kp.score]);
        drawJoints(keypoints);
        drawPaths(keypoints);
    });    
}