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
                logo: "./assets/logoUNMDP.jpg"
            }
        ]
    }
]