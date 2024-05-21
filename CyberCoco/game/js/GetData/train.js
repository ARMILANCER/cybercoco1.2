class Train {
    constructor() {
        this.trainCloseIm = new Image();
        this.trainOpenIm = new Image();
    }

    async getTrainOpenImage() {
        try {
            const response = await fetch('Image/trainO.png');
            if (!response.ok) {
                throw new Error('Failed to load image');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            return new Promise((resolve, reject) => {
                this.trainOpenIm.onload = () => {
                    URL.revokeObjectURL(url);
                    resolve(this.trainOpenIm);
                };
                this.trainOpenIm.onerror = () => {
                    URL.revokeObjectURL(url);
                    reject(new Error('Failed to load image'));
                };
                this.trainOpenIm.src = url;
            });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async getTrainCloseImage() {
        try {
            const response = await fetch('Image/trainC.png');
            if (!response.ok) {
                throw new Error('Failed to load image');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            return new Promise((resolve, reject) => {
                this.trainCloseIm.onload = () => {
                    URL.revokeObjectURL(url);
                    resolve(this.trainCloseIm);
                };
                this.trainCloseIm.onerror = () => {
                    URL.revokeObjectURL(url);
                    reject(new Error('Failed to load image'));
                };
                this.trainCloseIm.src = url;
            });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

// Usage example
const train = new Train();
train.getTrainOpenImage()
    .then(image => {
        console.log('Train open image loaded:', image);
    })
    .catch(error => {
        console.error('Error loading train open image:', error);
    });

train.getTrainCloseImage()
    .then(image => {
        console.log('Train close image loaded:', image);
    })
    .catch(error => {
        console.error('Error loading train close image:', error);
    });
