function drawJoints(keypoints) {

    CTX.fillStyle = 'aqua';

    for (var i = 0; i < keypoints.length; i++) {
        if (keypoints[i][3] >= 0.4) {
            const x = keypoints[i][0];
            const y = keypoints[i][1];
    
            CTX.beginPath();
            CTX.arc(x, y, 3, 0, 3 * Math.PI);            
            CTX.fill();
        }  
    }
}

function drawSkeleton(keypoints) {

    CTX.fillStyle = 'dodgerblue';
    CTX.strokeStyle = 'dodgerblue';
    CTX.lineWidth = 1;

    BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS.forEach(([i, j]) => {
        const kp1 = keypoints[i];
        const kp2 = keypoints[j];

        const score1 = kp1.score != null ? kp1.score : 0;
        const score2 = kp2.score != null ? kp2.score : 0;

        if (score1 >= 0.4 && score2 >= 0.4) {
            CTX.beginPath();
            CTX.moveTo(kp1.x, kp1.y);
            CTX.lineTo(kp2.x, kp2.y);
            CTX.stroke();
        }
    });
}

function drawKeypoints(poses) {
    poses.forEach(pose => {
        const keypoints = pose.keypoints.map((kp) => [kp.x, kp.y, kp.z, kp.score]);
        drawJoints(keypoints);
        drawSkeleton(pose.keypoints);
    });
}