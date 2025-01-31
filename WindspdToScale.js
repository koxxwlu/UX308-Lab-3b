function WindspdToScale(windSpeed) { //speed uses mph
   var description = "";

   if (windSpeed <= 1) {
    description = "Calm";
   } else if (windSpeed <= 3) {
    description = "Light Air";
   } else if (windSpeed <= 7) {
    description = "Light Breeze";
   } else if (windSpeed <= 12) {
    description = "Gentle Breeze";
   } else if (windSpeed <= 18) {
    description = "Moderate Breeze";
   } else if (windSpeed <= 24) {
    description = "Fresh Breeze";
   } else if (windSpeed <= 31) {
    description = "Strong Breeze";
   } else if (windSpeed <= 38) {
    description = "Near Gale";
   } else if (windSpeed <= 46) {
    description = "Gale";
   } else if (windSpeed <= 54) {
    description = "Severe Gale";
   } else if (windSpeed <= 63) {
    description = "Storm";
   } else if (windSpeed <= 72) {
    description = "Violent Storm";
   } else if (windSpeed <= 83) {
    description = "Hurricane";
   } else {
    description = "Invalid";
   }

    return (description);
};

export {WindspdToScale};