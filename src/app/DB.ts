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