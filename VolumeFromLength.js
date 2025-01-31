function VolumeFromLength(triangleLength, height) {
    let volume = Math.sqrt(3)/4*(triangleLength**2)*height;
    return volume;
};

export {VolumeFromLength};

//Resource used: expert-chainsaw-9794gqw9q57wf7ggv.github.dev/ (for testing).