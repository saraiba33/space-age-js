export function age(location, ageInSeconds) {
    switch (location) {
        case "mercury":
            return +((ageInSeconds / 31557600) / .2408467).toFixed(2);
        case "venus":
            return +((ageInSeconds / 31557600) / .61519726).toFixed(2);
        case "earth":
            return +((ageInSeconds / 31557600)).toFixed(2);
        case "mars":
            return +((ageInSeconds / 31557600) / 1.8808158).toFixed(2);
        case "jupiter":
            return +((ageInSeconds / 31557600) / 11.862615).toFixed(2);
        case "saturn":
            return +((ageInSeconds / 31557600) / 29.447498).toFixed(2);
        case "uranus":
            return +((ageInSeconds / 31557600) / 84.016846).toFixed(2);
        case "neptune":
            return +((ageInSeconds / 31557600) / 164.79132).toFixed(2);

    }
}