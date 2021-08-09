import React, { useState, useEffect } from "react";
import useKeyUp from "../hooks/useKeyUp";
import {
  Gallery,
  Image,
  Picture,
  Button,
  Nav,
  Caption,
  Figure,
  Tip,
} from "./Gallery.style.js";

function GalleryComponent() {
  const [data, setData] = useState(0);
  const [index, setIndex] = useState(0);

  const getData = () => {
    fetch("gallery/collection.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => getData(), []);

  const page = (move) => {
    let i = index + move;
    i = i < 0 ? 0 : i;
    i = i > data.length - 1 ? data.length - 1 : i;
    setIndex(i);
    console.log(i, index, move);
  };

  useKeyUp("ArrowRight", () => {
    page(1);
  });
  useKeyUp("ArrowDown", () => {
    page(1);
  });
  useKeyUp("ArrowLeft", () => {
    page(-1);
  });
  useKeyUp("ArrowUp", () => {
    page(-1);
  });
  useKeyUp("Home", () => {
    setIndex(0);
  });
  useKeyUp("End", () => {
    setIndex(data.length - 1);
  });

  return (
    <Gallery>
      {data ? (
        <>
          <Nav>
            <Button
              onClick={() => {
                page(-1);
              }}
              disabled={index <= 0}
              aria-label="Vorige foto"
            >
              ◂
            </Button>
            <Button
              onClick={() => {
                page(1);
              }}
              disabled={index === data.length - 1}
              aria-label="Volgende foto"
            >
              ▸
            </Button>
            <Tip>Tip: gebruik de pijltjestoetsen op je toetsenbord</Tip>
          </Nav>
          <Figure>
            <Picture>
              <source
                srcSet={"gallery/" + data[index].url + "avif"}
                type="image/avif"
              />
              <source
                srcSet={"gallery/" + data[index].url + "webp"}
                type="image/webp"
              />
              <Image
                src={"gallery/" + data[index].url + "jpg"}
                alt="{data[index].description}"
              />
            </Picture>
            <br />
            <Caption>{data[index].description}</Caption>
          </Figure>
        </>
      ) : (
        ""
      )}
    </Gallery>
  );
}

export default GalleryComponent;
