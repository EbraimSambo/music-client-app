import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const footerData = {
    mapLinks: [
        {
            titleMap: "Empra",
            links: [
                {
                    title: "Sobre",
                    path: "/"
                },
                {
                    title: "Empregos",
                    path: "/"
                },
                {
                    title: "For the Record",
                    path: "/"
                }
            ]
        },
        {
            titleMap: "Comunidades",
            links: [
                {
                    title: "Para Artistas",
                    path: "/"
                },
                {
                    title: "Desenvolvedores",
                    path: "/"
                },
                {
                    title: "Publicidade",
                    path: "/"
                },
                {
                    title: "Investidores",
                    path: "/"
                },
                {
                    title: "Fornecedores",
                    path: "/"
                }
            ]
        },
        {
            titleMap: "Links úteis",
            links: [
                {
                    title: "Suporte",
                    path: "/"
                },
                {
                    title: "Aplicativo móvel grátis",
                    path: "/"
                },
            ]
        }
    ],
    social: [
        {
            title: "Instagram",
            icon: <BsInstagram />,
            path: "/"
        }, {
            title: "Twitter",
            icon: <BsTwitterX />,
            path: "/"
        },
        , {
            title: "Facebook",
            icon: <FaFacebook />,
            path: "/"
        }
    ]
};


export const mapsite = [
    {
        title: "Politicas",
        path: "/"
    },
    {
        title: "Segurança e Centro de privacidade",
        path: "/"
    },
    {
        title: "Politicas",
        path: "/"
    },
    {
        title: "Cookies",
        path: "/"
    }
]