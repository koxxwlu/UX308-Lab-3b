function WindspdToScale(windSpeed) {
   var description = "";

   if (windSpeed <= 1) {
    description = "Calm";
   } else if (windSpeed <= 3) {
    description = "Light Air";
   } else if (windSpeed <= 7) {
    description = "Light Breeze";
   };

    return (description);
};

export {WindspdToScale};