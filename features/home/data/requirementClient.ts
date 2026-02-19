import { FaListCheck } from "react-icons/fa6";
import { PiUserListBold } from "react-icons/pi";
import { VscTasklist } from "react-icons/vsc";

export const requirementsData = [
    {
        title: "Buen score crediticio",
        description: "Al menos 2 años de experiencia con créditos bancarios o de instituciones financieras",
        icon: VscTasklist,
    },
    {
        title: "Comprobantes de ingresos",
        description: "Recibos de nómina o estados de cuenta bancarios",
        icon: FaListCheck,
    },
    {
        title: "Cuenta bancaria a tu nombre",
        description: "En ella depositamos tu préstamo y realizamos la domicialización del pago mensual",
        icon: PiUserListBold,
    }
]