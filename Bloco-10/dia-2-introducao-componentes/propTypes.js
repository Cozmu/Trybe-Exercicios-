MeuComponente.propTypes = {
    // Todos os validadores aqui são, por padrão, validadores opcionais.
    // Para torná-los obrigatórios, basta adicionar .isRequired
    numeroObrigatório: PropTypes.number.isRequired,

    // Tipos básicos do JS.
    stringOpcional: PropTypes.string,
    numeroOpcional: PropTypes.number,
    booleanoOpcional: PropTypes.bool,
    funcaoOpcional: PropTypes.func,
    objetoOpcional: PropTypes.object,
    arrayOpcional: PropTypes.array,

    // Um array de determinado tipo básico
    arrayDe: PropTypes.arrayOf(PropTypes.number),

    // Um objeto de determinado tipo básico
    objetoDe: PropTypes.objectOf(PropTypes.number),

    // Um objeto com forma específica
    objetoComForma: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),

    // Um objeto que não permite props extras
    objetoComFormatoRigoroso: PropTypes.exact({
        name: PropTypes.string,
        quantity: PropTypes.number,
        avaibility: PropTypes.bool,
    }),
};