/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ocorrencia } from "./ocorrencia";

export interface Funcionario {
    Id: number;
    Nome: string;
    NumeroFolha: string;
    NumeroIdentificador: string;
    NumeroPis: string;
    Carteira: string;
    Observacao: string | null;
    Endereco: string | null;
    Bairro: string | null;
    Uf: string | null;
    Cep: string;
    Telefone: string | null;
    Celular: string | null;
    Email: string | null;
    Rg: string | null;
    ExpedicaoRg: string | null;
    Ssp: string | null;
    Cpf: string;
    Mae: string | null;
    Pai: string | null;
    Nascimento: string | null;
    NaoVerificarDigital: boolean;
    Masculino: boolean;
    Master: boolean;
    Nacionalidade: string | null;
    Naturalidade: string | null;
    EscolaridadeId: number | null;
    NumeroProvisorio: string | null;
    CodigoHolerite: string | null;
    Admissao: string;
    Demissao: string | null;
    EmpresaId: number;
    Empresa: Empresa;
    HorarioId: number;
    Horario: Horario;
    DepartamentoId: number;
    Departamento: Departamento;
    FuncaoId: number;
    Funcao: Funcao;
    Filtro1Id: number | null;
    Filtro2Id: number | null;
    MotivoDemissaoId: number | null;
    RespostasPerguntasAdicionais: any[];
    DataUltimoEnvio: string;
    SenhaEquipamento: string | null;
    Invisivel: boolean;
    DataAlteracao: string;
    PeriodoEncerrado: string | null;
    NivelPermissaoId: number;
    PerfilId: number;
    PerfilFuncionarioId: number;
    DataUltimoLogin: string | null;
    BloquearRegistroPontoTeclado: boolean;
    PermiteInclusaoPontoManual: boolean;
    PermiteInclusaoDispositivosAutorizados: boolean;
    DesabilitarAssinaturaEletronica: boolean;
    BancoHorasId: number;
    EstruturaId: number | null;
    Estrutura: any | null;
    PossuiFoto: boolean;
    ConfigEspecificaInclusaoManualPonto: any | null;
    ConfigEspecificaInclusaoManualPontoFusoHorarioId: number | null;
    ConfigEspecificaDesativarVerificacaoLocalFicticio: boolean;
    ConfigEspecificaInclusaoPontoSemLocalizacao: any | null;
    ConfigEspecificaInclusaoPontoOffline: any | null;
    CidadeId: number | null;
    Cidade: Cidade | null;
    HorarioAlternativo2Id: number | null;
    HorarioAlternativo3Id: number | null;
    HorarioAlternativo4Id: number | null;
    DesconsiderarPerimetrosGlobais: boolean;
    ListaCentroDeCustos: any[];
    AceitouTermosLgpdApp: boolean;
    ocorrencias: Ocorrencia[];
  }
  
  export interface Empresa {
    Id: number;
    Nome: string;
    Documento: string;
    Inscricao: string;
    Endereco: string;
    Bairro: string;
    Cep: string;
    Uf: string;
    Pais: string;
    Telefone: string;
    Fax: string;
    CEI: string;
    NFolhaEmpresa: string;
    Logotipo: string | null;
    ResponsavelNome: string;
    ResponsavelCargo: string;
    ResponsavelEmail: string;
    ConfigEspecificaInclusaoManualPonto: any | null;
    ConfigEspecificaInclusaoManualPontoFusoHorarioId: number | null;
    ConfigEspecificaInclusaoManualPontoOrigem: any | null;
    TipoDocumento: number;
    PossuiLogo: boolean;
    CidadeId: number;
    Cidade: Cidade;
    UsaFechamentoDoPontoEspecifico: boolean;
    FechamentoPonto: number;
    DiaFechamentoPonto: number;
    UtilizaRepC: boolean;
    UtilizaRepA: boolean;
    UtilizaRepP: boolean;
    EmitiuAtestadoTecnico: boolean;
  }
  
  export interface Cidade {
    Id: number;
    Descricao: string;
  }
  
  export interface Horario {
    Id: number;
    Numero: number;
    Descricao: string;
    Desativar: boolean;
    Opcoes: any | null;
    Extras: any | null;
    Descanso: any | null;
    Dias: any | null;
    FaixasExtras: any | null;
    ColunasEmDias: any | null;
    ToleranciasEspecificas: any | null;
    Tipo: number;
    DataBase: any | null;
    HorarioIdCopiaOpcoes: any | null;
    HorarioCopiaOpcoes: any | null;
    HorarioIdCopiaDescanso: any | null;
    HorarioCopiaDescanso: any | null;
    HorarioIdCopiaExtras: number;
    HorarioCopiaExtras: any | null;
  }
  
  export interface Departamento {
    Id: number;
    Descricao: string;
    Nfolha: string;
  }
  
  export interface Funcao {
    Id: number;
    Descricao: string;
  }