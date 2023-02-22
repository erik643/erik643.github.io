import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

async function saveImg(req, res) {
  const imageDataURL = req.body.image;
  const imageData = imageDataURL.replace(/^data:image\/\w+;base64,/, '');
  const imageBuffer = Buffer.from(imageData, 'base64');
  // Generate a unique filename for the image
  fs.mkdir('public/images/uploads/', { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to create upload directory');
      return;
    }

    // Generiere einen eindeutigen Dateinamen für das Bild
    const fileName = `image_${Date.now()}.png`;
    const filePath = path.join('public/images/uploads/', fileName);

    // Speichere die Bilddatei auf der Festplatte
    fs.writeFile(filePath, imageBuffer, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Failed to upload image');
      } else {
        console.log(`Image saved to ${filePath}`);
        res.status(200).send(fileName);
        //   res.status(200).send('Image uploaded successfully');
      }
    });
  });
}

export default saveImg;
