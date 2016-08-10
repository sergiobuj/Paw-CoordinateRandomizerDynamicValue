// Generated by CoffeeScript 1.8.0
(function() {
  var CoordinateRandomizerDynamicValue;

  CoordinateRandomizerDynamicValue = function() {
    var sign = function(){
      if ( Math.random() > 0.5 ){
        return 1;
      } else {
        return -1
      }
    }

    var randomLatitude = function(){
      return sign() * Math.random() * 90.0;
    }

    var randomLongitude = function(){
      return sign() * Math.random() * 180.0;
    }

    this.evaluate = function() {
      var value = "";
      if (this.coordinate == "lat") {
        value = randomLatitude();
      }
      else if (this.coordinate == "lng") {
        value = randomLongitude();
      }

      return value;
    };
    this.title = function() {
      return "Coordinate Randomizer";
    };
  };

  CoordinateRandomizerDynamicValue.identifier = "com.sergiobuj.PawExtensions.CoordinateRandomizerDynamicValue";

  CoordinateRandomizerDynamicValue.title = "Coordinate Randomizer Dynamic Value";

  CoordinateRandomizerDynamicValue.inputs = [
    InputField("coordinate", "Coordinate", "Radio", {"choices":{"lat":"Latitude", "lng":"Longitude"}, defaultValue: "lat"})
  ];

  registerDynamicValueClass(CoordinateRandomizerDynamicValue);

}).call(this);
