import { IPlaceDetails } from '../types';

class PlacesService {
  private service: google.maps.places.PlacesService;

  constructor() {
    this.service = new google.maps.places.PlacesService(
      document.createElement('div')
    );
  }

  getPlaceDetails(placeId: string, width: number): Promise<IPlaceDetails> {
    return new Promise((resolve, reject) => {
      const request = {
        placeId,
        fields: ['place_id', 'name', 'geometry', 'photos'],
      };

      this.service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const response = {
            placeId: place?.place_id as string,
            name: place?.name as string,
            location: {
              lat: place?.geometry?.location?.lat() as number,
              lng: place?.geometry?.location?.lng() as number,
            },
            photos: place?.photos?.map((photo) =>
              photo.getUrl({ maxWidth: width })
            ) as string[],
          };

          resolve(response);
        } else {
          reject(status);
        }
      });
    });
  }
}

export default new PlacesService();
