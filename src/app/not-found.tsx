import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import svg from '../../public/404.svg'
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="cont-404">
        <Image className="cont-404-image" src={svg} alt="svg" />

        <Link href="/">
          <Button>Voltar ao Início</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;