import { useState } from "react";
import axios from "axios";
import { usePicture } from "../../providers/Pictures";
import { Container } from "./styles";

function FormPicture() {
  const [selectedImg, setSelectedImg] = useState("");
  const { setPicture, picture } = usePicture();
  const [isUploading, setIsUploading] = useState(false);

  const uploadImg = () => {
    console.log(selectedImg);
    const formData = new FormData();
    formData.append("file", selectedImg);
    formData.append("upload_preset", "capstone");
    setIsUploading(true);

    axios
      .post(
        "https://api.cloudinary.com/v1_1/gustavopnunes/image/upload",
        formData
      )
      .then((resp) => {
        setPicture([...picture, { picture_url: resp.data.url }]);
        setIsUploading(false);
      });
    console.log(picture);
  };
  return (
    <Container>
      <div className="image">
        <h1> img upload</h1>
        <input
          type="file"
          onChange={(e) => setSelectedImg(e.target.files[0])}
        />
        <div className="button_div">
          {isUploading && <span>Loading!</span>}
          <button onClick={uploadImg}>Upload!</button>
        </div>
      </div>
    </Container>
  );
}

export default FormPicture;
