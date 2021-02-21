/**Instructions to every other class on how they can be an argument to 'addMarker'*/
interface Mappable {
    location: {
        lat: number;
        lng: number
    }
    markerContent(): string;
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const div=document.getElementById(divId)
        if(!div){
            throw new Error("The element #div wasn't found");
        }
        this.googleMap = new google.maps.Map(div, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }

}