import styled from "styled-components"

/**
 * Función que devuelve la propiedad css correspondiente a justify-content
 * dependiendo del valor introducido
 */
const horizontalAlign = halign => {
    switch (halign) {
        case 'center': return 'center'
        case 'left': return 'left'
        case 'right': return 'right'
        case 'between': return 'space-between'
        case 'arround': return 'space-arround'
        case 'evenly': return 'space-evenly'
        default: return 'left'
    }
}

/**
 * Función que devuelve la propiedad css correspondiente a align-items
 * dependiendo del valor introducido
 */
 const verticalAlign = valign => {
    switch (valign) {
        case 'center': return 'center'
        case 'top': return 'flex-start'
        case 'bottom': return 'flex-end'
        default: return 'flex-start'
    }
}

/**
 * Función que devuelve un 'styled div' con propiedades de flex
 * 
 * @param hAlign    Controla el comportamiento horizontal de flex con la propiedad 'jusify-content'
 *                  Valores
 *                      'center':   Alinea los elementos en el centro horizontalmente. Corresponde al valor center
 *                      'left':     Alinea los elementos a la izquierda horizontalmente. Corresponde al valor left
 *                      'right':    Alinea los elementos a la derecha horizontalmente. Corresponde al valor right
 *                      'between':  Alinea los elementos con la máxima separación posible horizontalmente. Corresponde al valor space-between
 *                      'arround':  Alinea los elementos con la mediana separación posible horizontalmente. Corresponde al valor space-arround
 *                      'evenly':   Alinea los elementos con la separación media posible horizontalmente. Corresponde al valor space-evenly
 *
 * @param vAlign    Controla el comportamiento vertical de flex con la propiedad 'align-items'
 *                 Valores
 *                     'center':   Alinea los elementos en el centro verticalmente. Corresponde al valor center
 *                     'top':      Alinea los elementos a la parte superior verticalmente. Corresponde al valor flex-start
 *                     'bottom':   Alinea los elementos a la parte inferior verticalmente. Corresponde al valor flex-end
 * 
 * @param fullHeight    Controla si el elemento debe o no ocupar toda la altura disponible
 *                      La ausencia de esta etiqueta implica que el elemento ocupará la altura por defecto
 * 
 * @param fullWidth     Controla si el elemento debe o no ocupar toda la anchura disponible
 * 
 * @param screenHeight  Controla si el elemento debe o no ocupar toda la altura disponible en pantallas de alto
 * 
 * @param screenWidth   Controla si el elemento debe o no ocupar toda la anchura disponible en pantallas de ancho
 * 
 * @param wrap  Controla si el elemento debe o no ocupar toda la anchura disponible
 * 
 */
export const FlexLayout = styled.div`
    display: flex;
    gap: ${props => props.gap ? props.gap+'px' : '0'};
    flex-direction: ${ props => props.column ? 'column' : 'row' };
    ${ props => props.wrap=="true" ? 'flex-wrap: wrap' : 'flex-wrap: nowrap' };
    align-items: ${ props => verticalAlign( props.vAlign ) };
    justify-content: ${ props => horizontalAlign( props.hAlign ) };
    ${ props => props.screenHeight ? 'height: 100vh !important' : 'height: auto' };
    ${ props => props.screenWidth ? 'width: 100vw' : 'width: auto' };
    ${ props => props.fullHeight ? 'height: 100%' : 'height: auto' };
    ${ props => props.fullWidth ? 'width: 100%' : 'width: auto' };
    flex-direction: ${ props => props.column ? 'column' : 'row' };
`