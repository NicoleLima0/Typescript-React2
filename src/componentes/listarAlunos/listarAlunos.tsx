import { useState } from "react";
import "./listarAlunos.css";
import axios from "axios";

interface Props {
  image?: string;
}
async function ImgAlunos() {
  // const UrlImg =
  //   "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg";
  // await axios
  //   .get(UrlImg, {
  //     headers: {
  //       // Accept: "application/json",
  //       responseType: "arraybuffer",
  //     },
  //   })
  //   .then(async function (response) {
  //     var imgNicole = Buffer.from(response.data, "binary").toString("base64");
  //     setImagemNi(imagemNi);
  //     return console.log(imagemNi);
  //   })
  //   .catch();
}

ImgAlunos();
async function ListarAlunos(props: Props) {
  const UrlImg =
    "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg";
  const [imagemNi, setImagemNi] = useState<string | null>(null);

  await axios
    .get(UrlImg, {
      headers: {
        // Accept: "application/json",
        responseType: "arraybuffer",
      },
    })
    .then(async function (response) {
      var imgNicole = Buffer.from(response.data, "binary").toString("base64");

      setImagemNi(imagemNi);
      return console.log(imagemNi);
    })
    .catch();

  return (
    <div>
      <div className="alunos">
        <p>Nicole</p>
        <p>Matheus</p>
        <p>Matheus Jesus</p>
        <p>Rafael</p>
        <p>Erisvan</p>
        <p>Mariana</p>
        <p>Fabiola</p>
        <p>Arthur</p>
        <p>Giorgia</p>
        <p>Heloiza</p>
        <p>Lucas</p>
        <p>Kauã</p>
      </div>
      <div>
        <img src={`data:image/jpeg;base64, ${imagemNi}`} alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default ListarAlunos;
