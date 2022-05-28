interface Instituto{
    nombre: string,
    logo?: string
}

interface Educacion{
    nombre: string,
    periodo: string,
    instituto: Instituto[]
}

export const Educaciones: Educacion[] = [
    {
        nombre: "Licenciatura en Física",
        periodo: "2019-2022",
        instituto: [
            {
                nombre: "Universidad Nacional de Mar del Plata",
                logo: "./assets/logoUNMDP.png"
            }
        ]
    },
    {
        nombre: "Pasantía de investigación en el tema 'Dinámica y control de procesos catastróficos en redes complejas interdependientes y multicapas'",
        periodo: "2021",
        instituto: [
            {
                nombre: "Universidad Nacional de Mar del Plata",
                logo: "./assets/logoUNMDP.png"
            }
        ]
    },
    {
        nombre: "Pasantía de investigación en el tema 'Propagación y mitigación de procesos epidémicos y cascada de fallas'",
        periodo: "2021",
        instituto: [
            {
                nombre: "Universidad Nacional de Mar del Plata",
                logo: "./assets/logoUNMDP.png"
            }
        ]
    },
    {
        nombre: "Licenciatura en Física",
        periodo: "Actual",
        instituto: [
            {
                nombre: "Instituto Balseiro",
                logo: "./assets/logoBalseiro.png" 
            }
        ]
    }
]

interface Habilidad{
    nombre: string,
    nivel: string
}

export const Habilidades: Habilidad[] = [
    {
        nombre: "Front End",
        nivel: "85%"
    },
    {
        nombre: "Back End",
        nivel: "10%"
    },
    {
        nombre: "adadadda",
        nivel: "37%"
    },
    {
        nombre: "adaada",
        nivel: "21%"
    },
    {
        nombre: "adada1313dda",
        nivel: "93%"
    },
    {
        nombre: "seee",
        nivel: "50%"
    },
    {
        nombre: "mmm vos decis",
        nivel: "20%"
    },
    {
        nombre: "ingles xd",
        nivel: "5%"
    }
]

interface Link{
    nombre: string,
    url: string,
    logo: string
}

interface Proyecto{
    nombre: string,
    descripcion: string,
    fechaRealizacion: string,
    links?: Link[]
}

export const Proyectos: Proyecto[] = [
    {
        nombre: "Simulación epidémica",
        descripcion: "Programa hecho en C que simula una epidemia en una población, y que se puede configurar para ver los efectos de una vacunación.",
        fechaRealizacion: "2021",
        links:[
            {
            nombre: "Repositorio",
            url: "",
            logo: "./assets/github.png"
            }
        ]
    },
    {
        nombre: "Modelo de Eden",
        descripcion: "Modelo que representa el crecimiento de...",
        fechaRealizacion: "2021",
        links:[
            {
            nombre: "Repositorio",
            url: "",
            logo: "./assets/github.png"
            }
        ]
    },
    {
        nombre: "Este portfolio",
        descripcion: "Mi portfolio web",
        fechaRealizacion: "En proceso",
        links:[
            {
                nombre: "Repositorio",
                url: "https://github.com/TomyD30/Mi-Portfolio-Web-Front-End-",
                logo: "./assets/github.png"
            },
            {
                nombre: "Web",
                url: "",
                logo: "./assets/web.png"
            }
        ]
    }
]