import React from 'react';
import Icon1 from '../../images/reduce.svg'
import Icon2 from '../../images/Office-virtuales.svg'
import Icon3 from '../../images/Premium.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'


const Services = () => {
    return ( <
        >
        <
        ServicesContainer id = "services" >
        <
        ServicesH1 > Nuestros servicios < /ServicesH1> <
        ServicesWrapper >
        <
        ServicesCard >
        <
        ServicesIcon src = { Icon1 }
        /> <
        ServicesH2 > Reduce gastos < /ServicesH2> <
        ServicesP > Ayudamos a reducir sus tarifas y aumentar sus ingresos generales < /ServicesP> <
        /ServicesCard>

        <
        ServicesCard >
        <
        ServicesIcon src = { Icon2 }
        /> <
        ServicesH2 > Oficinas virtuales < /ServicesH2> <
        ServicesP > Puedes acceder a la plataforma en cualquier lugar < /ServicesP> <
        /ServicesCard>

        <
        ServicesCard >
        <
        ServicesIcon src = { Icon3 }
        /> <
        ServicesH2 > Servicios premium < /ServicesH2> <
        ServicesP > Siempre damos un servicio calidad premium < /ServicesP> <
        /ServicesCard> <
        /ServicesWrapper> <
        /ServicesContainer> <
        />
    )
}

export default Services