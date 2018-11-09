export class ClientesModel {
    idProcesso?: number;
    processo: string;
    reclamante: string;
    reclamada: string;
    valor: number;
    parcelado: number;
    parcelas: number;
    vencimento: Date;
    status: string;
    tipo: string;
    isShowMore?: boolean;

}
