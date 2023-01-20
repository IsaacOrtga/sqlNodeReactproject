import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Stack from 'react-bootstrap/Stack';
import Image from "react-bootstrap/Image";
import BreadcrumbItem from "react-bootstrap/esm/BreadcrumbItem";
import "bootstrap/dist/css/bootstrap.css";
import './user.css';

function ImgPerfil() {
    return (

        <Stack gap={3}>
            <div className='ms-5 p-1'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Image className="picProfile"
                            src=
                            "https://dam.muyinteresante.com.mx/wp-content/uploads/2018/05/extranos-pueden-elegir-mejores-fotos-de-perfil.jpg"
                            roundedCircle
                            style={{ height: 110, width: 110 }} /></BreadcrumbItem>

                </Breadcrumb>
                <div className="ms-4">
                    <Breadcrumb>
                        <Breadcrumb.Item style={{ fontSize: 12 }} href="#">Editar perfil</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Breadcrumb>
                <BreadcrumbItem><div style={{ border: "1px solid black", width: 150, height: 220, borderRadius: 4}}></div></BreadcrumbItem>
                </Breadcrumb>
            </div>

        </Stack>

    );
}


export default ImgPerfil;