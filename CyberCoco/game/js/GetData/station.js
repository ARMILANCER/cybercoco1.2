class Station {
    constructor() {
        this.stationImage = new Image();
    }

    async getStationImage() {
        try {
            const response = await fetch('Image/Station.png');
            if (!response.ok) {
                throw new Error('Failed to load image');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            return new Promise((resolve, reject) => {
                this.stationImage.onload = () => {
                    URL.revokeObjectURL(url);
                    resolve(this.stationImage);
                };
                this.stationImage.onerror = () => {
                    URL.revokeObjectURL(url);
                    reject(new Error('Failed to load image'));
                };
                this.stationImage.src = url;
            });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
const station = new Station();
station.getStationImage()
    .then(image => {
        console.log('Image loaded:', image);
    })
    .catch(error => {
        console.error('Error loading image:', error);
    });
