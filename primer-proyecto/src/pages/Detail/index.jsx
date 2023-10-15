import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../services";

export default function Detail() {
  const { id } = useParams();

  return (
    <>
      <h1>Detalle</h1>
    </>
  );
}
