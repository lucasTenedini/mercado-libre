import React from 'react';

export enum MessageError {
    NOT_FOUND = 'No hay anuncios que coincidan con tu búsqueda.',
    INTERNAL_SERVER_ERROR = 'Ocurrio un error. Por favor, inténtelo de nuevo más tarde.'
}

interface Props {
    type: MessageError;
}

const ErrorMessage: React.FC<Props> = ({ type }) => {
    return (
        <section id="error-text">
            <span>{type}</span>
        </section>
    );
};

export default ErrorMessage;
