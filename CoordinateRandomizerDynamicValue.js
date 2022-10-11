class CoordinateRandomizerDynamicValue {
    text(context) { }

    sign() {
        return (Math.random() > 0.5) ? 1 : -1;
    }

    randomLatitude() {
        return this.sign() * Math.random() * 90.0;
    }

    randomLongitude() {
        return this.sign() * Math.random() * 180.0;
    }

    title(context) {
        return "Coordinate Randomizer " + (this.coordinate == "lat" ? "Latitude" : "Longitude");
    }

    evaluate(context) {
        if (this.coordinate == "lat") {
            return this.randomLatitude();
        } else if (this.coordinate == "lng") {
            return this.randomLongitude();
        }

        return "0";
    }
}

CoordinateRandomizerDynamicValue.identifier = "com.sergiobuj.PawExtensions.CoordinateRandomizerDynamicValue";
CoordinateRandomizerDynamicValue.title = "Coordinate Randomizer";
CoordinateRandomizerDynamicValue.inputs = [
    InputField("coordinate", "Coordinate", "Radio", { "choices": { "lat": "Latitude", "lng": "Longitude" }, defaultValue: "lat" }),
]

registerDynamicValueClass(CoordinateRandomizerDynamicValue);
