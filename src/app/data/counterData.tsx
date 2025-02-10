export interface CounterData {
    id: number;
    endCounter: number;
    text: string;
    lineRight: boolean;
    lineRightMobile: boolean;
}

export const dataCounter: CounterData[] = [
    { id: 0, endCounter: 10, text: "Años de experiencia", lineRight: true, lineRightMobile: true },
    { id: 1, endCounter: 60, text: "Clientes satisfechos", lineRight: true, lineRightMobile: false },
    { id: 2, endCounter: 90, text: "Proyectos finalizados", lineRight: true, lineRightMobile: true },
    { id: 3, endCounter: 30, text: "Clientes Recurrentes", lineRight: false, lineRightMobile: false },
];
