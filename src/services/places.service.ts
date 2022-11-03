const service = new google.maps.places.PlacesService(
  document.createElement('div')
);

const getPlacePhoto = (placeId: string, width: number) => {
  return new Promise((resolve, reject) => {
    const request = {
      placeId,
      fields: ['photos'],
    };

    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place?.photos &&
        place.photos.length > 0
      ) {
        const response = {
          photoUrl: place.photos[0].getUrl({
            maxWidth: width,
          }),
        };

        resolve(response);
      } else {
        reject(status);
      }
    });
  });
};

export { getPlacePhoto };
