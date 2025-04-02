const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');

const BODY_PARTS = {
    ears_eyes_nose: [/*left ear*/7,   /*left eye LR*/3,1,2,  /*nose*/0,  /*right eye LR*/4,5,6,  /*right ear*/8],
    mouth: [/*left*/9, /*right*/10],
    shoulders: [/*left*/11, /*right*/12],
    left_Arm: [/*elbow*/13, /*wrist*/15, /*index*/19, /*pinky*/17, /*thumb*/21],
    right_arm: [/*elbow*/14, /*wrist*/16, /*index*/20, /*pinky*/18, /*thumb*/22],
    hips: [/*left*/23, /*right*/24],
    left_leg: [/*knee*/25, /*ankle*/27, /*heel*/29, /*foot*/31],
    right_leg: [/*knee*/26, /*ankle*/28, /*heel*/30, /*foot*/32]
};